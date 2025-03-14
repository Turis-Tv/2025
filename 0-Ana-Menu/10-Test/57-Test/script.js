/**
 * Created by Hugo-T
 * MIT License.
 */

class YoutubePlayer {
  constructor(element, callback, settings = {}) {
    if (!(element instanceof Node)) {
      throw `Can't initialize YoutubePlayer because ${element} is not a Node.`;
    }
    if (!(callback instanceof Function)) {
      throw `Can't initialize YoutubePlayer because ${callback} is not a Function.`;
    }

    this.element = element;
    this.videoId = this.element.getAttribute("data-id");
    this.thumbnail = null;
    
    this.settings = this._extendSettings(settings);

    if (!this.videoId) {
      throw '"data-id" is not defined in the Node element.';
    }

    if (!window.loadIframeAPICallbacks) {
      window.loadIframeAPICallbacks = [];
    }
    this.loadIframeAPICallbacks = window.loadIframeAPICallbacks;

    this._createThumbnail();

    this.callback = () => {
      this.thumbnail.removeEventListener("click", this.callback);
      callback(this.thumbnail, this.videoId);
    };

    this._loadIframeLoader(() => {
      //this.thumbnail.addEventListener("click", this.callback);
      this.thumbnail.onclick = () => callback(this.thumbnail, this.videoId);
    });
  }

  eventOnThumbnail(type, listener) {
    this.thumbnail["on" + type] = listener;
  }

  _createThumbnail() {
    const player = document.createElement("div");
    player.classList.add(...this.settings.classPlayer);

    const thumbnail = this.getThumbnail();

    const img = document.createElement("img");
    img.src = thumbnail.maxres.url;
    img.srcset =
      `${thumbnail.default.url} ${thumbnail.default.width}w,` +
      `${thumbnail.medium.url} ${thumbnail.medium.width}w,` +
      `${thumbnail.high.url} ${thumbnail.high.width}w,` +
      `${thumbnail.standard.url} ${thumbnail.standard.width}w,` +
      `${thumbnail.maxres.url} ${thumbnail.maxres.width}w`;
    img.sizes = `(max-width: ${thumbnail.maxres.width}px) 100vw, ${
      thumbnail.maxres.width
    }px`;
    img.classList.add(...this.settings.classThumbnail);
    player.appendChild(img);

    this.thumbnail = this.element.appendChild(player);
  }

  getThumbnail(thumb) {
    switch (thumb) {
      case 1:
      case 2:
      case 3:
      case "1":
      case "2":
      case "3":
        break;
      case "default":
      default:
        thumb = "default";
    }

    const host = "https://i.ytimg.com";
    return {
      default: {
        url: `${host}/vi/${this.videoId}/${thumb}.jpg`,
        width: 120,
        height: 90
      },
      medium: {
        url: `${host}/vi/${this.videoId}/mq${thumb}.jpg`,
        width: 320,
        height: 180
      },
      high: {
        url: `${host}/vi/${this.videoId}/hq${thumb}.jpg`,
        width: 480,
        height: 360
      },
      standard: {
        url: `${host}/vi/${this.videoId}/sd${thumb}.jpg`,
        width: 640,
        height: 480
      },
      maxres: {
        url: `${host}/vi/${this.videoId}/maxres${thumb}.jpg`,
        width: 1280,
        height: 720
      }
    };
  }

  _loadIframeLoader(callback) {
    if (window.YT && typeof window.YT.Player === "function") {
      return callback();
    }

    this.loadIframeAPICallbacks.push(callback);

    const YOUTUBE_IFRAME_API_SRC = "https://www.youtube.com/iframe_api";
    const scripts = Array.from(document.getElementsByTagName("script"));
    const isLoading = scripts.some(
      script => script.src === YOUTUBE_IFRAME_API_SRC
    );

    if (!isLoading) {
      this._loadScript(YOUTUBE_IFRAME_API_SRC).then(function() {
        callback();
      });
    }

    if (typeof window.onYouTubeIframeAPIReady !== "function") {
      window.onYouTubeIframeAPIReady = () => {
        while (this.loadIframeAPICallbacks.length) {
          const loadCb = this.loadIframeAPICallbacks.shift();
          loadCb();
        }
      };
    }
  }

  _loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;

      script.onload = () => {
        script.onerror = script.onload = null;
        resolve(script);
      };

      script.onerror = () => {
        script.onerror = script.onload = null;
        reject(new Error(`Failed to load ${src}`));
      };

      const node = document.head || document.getElementsByTagName("head")[0];
      node.appendChild(script);
    });
  }
  
  _extendSettings(settings) {
		const defaultSettings = {
			classPlayer: ["card-video__player"],
      classThumbnail: ["card-video__thumb"]
		};

		const newSettings = {};
		for (const property in defaultSettings) {
			if (property in settings) {
				newSettings[property] = settings[property];
			} else {
				newSettings[property] = defaultSettings[property];
			}
		}

		return newSettings;
	}
}

const cards = document.querySelectorAll(".card-video");

cards.forEach(card => {
  let player = new YoutubePlayer(card, (element, videoId) => {
    new YT.Player(element, {
      videoId: videoId,
      host: "https://www.youtube-nocookie.com",
      playerVars: {
        autoplay: 0,
        rel: 0,
        showinfo: 0,
        wmode: "transparent",
        autohide: 1
      }
    });
  });

  player.eventOnThumbnail("mousemove", function(e) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    element.style.setProperty("--x", x + "px");
    element.style.setProperty("--y", y + "px");
  });
});