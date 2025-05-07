const channels = [







  {
    channelName: "Trt müzik  ",
    src: " https://tv-trtmuzik.medya.trt.com.tr/master.m3u8 ",
  },

  {
    channelName: " Trt müzik ",
    src: " https://helga.iptv2022.com/trt_muzik/index.m3u8 ",
  },








     {
    channelName: "Kral pop ",
    src: " https://tgn.bozztv.com/dvrfl05/gin-kralpop/tracks-v1a1/mono.m3u8  ",
  },
     {
    channelName: "Kral pop | a ",
    src: " https://dogus-live.daioncdn.net/kralpoptv/kralpoptv.m3u8  ",
  },

  {
    channelName: "Turis",
    src: "https://tgn.bozztv.com/dvrfl05/gin-powerhd/tracks-v1a1/mono.m3u8  ",
  },
  {
    channelName: "Power hd ",
    src: " https://tgn.bozztv.com/dvrfl05/gin-powerhd/tracks-v1a1/mono.m3u8 ",
  },

  {
    channelName: "Tempo tv  ",
    src: "https://helga.iptv2022.com/tempo_tv/index.m3u8  ",
  },
  {
    channelName: "Power türk ",
    src: "https://tgn.bozztv.com/dvrfl05/gin-powerturk/tracks-v1a1/mono.m3u8  ",
  },
  {
    channelName: "Powerakustik ",
    src: "https://listen.powerapp.com.tr/pturkakustik/akustik.smil/master.m3u8  ",
  },
  {
    channelName: "Powerdance ",
    src: "https://listen.powerapp.com.tr/dance/dance.smil/master.m3u8  ",
  },
  {
    channelName: "Powerlove ",
    src: "https://listen.powerapp.com.tr/plove/love.smil/master.m3u8  ",
  },
  {
    channelName: "Powerslow ",
    src: "https://listen.powerapp.com.tr/pturkslow/slow.smil/master.m3u8   ",
  },
  {
    channelName: "Powertaptaze ",
    src: " https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/master.m3u8 ",
  },
  {
    channelName: "Powertürk ",
    src: " https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/master.m3u8 ",
  },
  {
    channelName: " Powertürktv ",
    src: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/master.m3u8  ",
  },
  {
    channelName: "Powertv ",
    src: "https://livetv.powerapp.com.tr/powerTV/powerhd.smil/master.m3u8  ",
  },

  {
    channelName: "Nr1 türk ",
    src: " https://nr1turk.blutv.com/blutv_n1turk/live.m3u8 ",
  },
  {
    channelName: "Nr1damar ",
    src: " https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8 ",
  },

  {
    channelName: " Nr1dance",
    src: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8  ",
  },

  {
    channelName: "Nr1 ",
    src: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8 ",
  },

  {
    channelName: "Cartoon network  ",
    src: "https://yayin2.canlitv.fun/livetv/cartoon-network.stream/master.m3u8  ",
  },

  {
    channelName: " Olay türk ",
    src: "https://helga.iptv2022.com/OlayTurk_TV/index.m3u8  ",
  },

  {
    channelName: " Anadolu Tv ",
    src: "https://live.artidijitalmedya.com/artidijital_anadolunet/anadolunet/playlist.m3u8  ",
  },

  {
    channelName: " Cine5 ",
    src: " https://cdn-cine5tv.yayin.com.tr/cine5tv/cine5tv/playlist.m3u8 ",
  },
 


];

const jwtConfigSetup = {
  file: channels.find((c) => c.channelName === "Turis").src,
  width: "100%",
  height: "100%",
  skin: "glow",
  autostart: true,
  primary: "flash",
  fallback: "false",
  abouttext: "",
  aboutlink: "",
  displaytitle: "false",
  ga: "{}",
};

const getPlayerWrapper = () =>
  document.querySelector("#content #player-wrapper #jwplayer-wrapper");
const getBbcArabicIframe = () => document.querySelector("#bbc-iframe");

const getElementByDataSrc = (dataSrc) =>
  document.querySelector(`[data-src="${dataSrc}"]`);

let currentlyPlayingSrc = null;
const handleHighlightingSelectedChannel = (_src, channelsList) => {
  const currentElement = getElementByDataSrc(_src);
  if (currentElement) {
    [...channelsList.children].forEach((el) => {
      const _el =
        el.querySelector(".channel-name") || el.querySelector(".bbc-arabic");
      if (_el?.getAttribute("id")?.includes("selected-channel-indicator")) {
        _el.setAttribute(
          "id",
          _el.getAttribute("id").replace("selected-channel-indicator", "")
        );
      }
    });
    currentElement.setAttribute("id", "selected-channel-indicator");
  }
  if (_src) {
    currentlyPlayingSrc = _src;
  }
};

const stopBBCPlayer = () => {
  setTimeout(() => {
    getBbcArabicIframe().style.display = "none";
    const iframeSrc = getBbcArabicIframe().src;
    getBbcArabicIframe().src = iframeSrc;
  }, 0);
};

function main() {
  loadContent();
}

function loadContent() {
  const jwpInstance = jwplayer("jwplayer-wrapper");
  jwpInstance.setup(jwtConfigSetup);

  const getSrcElement = () => document.querySelector("#player-src");
  const channelsList = document.querySelector("#channels-list");
  const inputWrapper = document.querySelector("#input-wrapper");

  const bbcArabicButton = document.querySelector(".bbc-arabic");
  bbcArabicButton.addEventListener("click", () => {
    setTimeout(() => {
      getPlayerWrapper().style.display = "none";
    }, 0);
    getBbcArabicIframe().style.display = "block";
    // .stop is not available in the free version, workaround: setting the file will stop playback
    jwpInstance.setup({
      ...jwtConfigSetup,
      file: channels.find((c) => c.channelName === "Turis").src,
    });
  });

  const showHideSidebar = document.querySelector(".show-hide-sidebar");
  showHideSidebar.addEventListener("click", () => {
    // User closed the sidebar : User opened the sidebar
    channelsList.style.display =
      channelsList.style.display !== "none" ? "none" : "flex";
  });

  const showHideInput = document.querySelector(".show-hide-input");
  showHideInput.addEventListener("click", () => {
    if (!inputWrapper.style.display) {
      inputWrapper.style.display = "none";
    }
    // User closed the input : User opened the input
    inputWrapper.style.display =
      inputWrapper.style.display !== "none" ? "none" : "flex";
  });

  const createChannelItemAndAppendToList = ({ src, channelName }) => {
    const channelItem = document.createElement("li");
    channelItem.classList.add("channel-item");
    channelItem.innerHTML = `<p class="channel-name" data-src="${src}">${channelName}</p>`;
    channelsList.appendChild(channelItem);
  };

  function onLoad() {
    channels.forEach((channelName) => {
      createChannelItemAndAppendToList(channelName);
    });
  }

  onLoad();

  function play(_src, channelName) {
    const playButton = document.querySelector("#play-button");
    const setupJWPInstance = () => {
      const src = _src || getSrcElement().value.trim();
      if (src) {
        jwpInstance.setup({ ...jwtConfigSetup, file: src });
        // .play is not available in the free version of jwplayer
        // jwpInstance.play();

        document.title = channelName || "m3u8 player";
      }
    };
    _src
      ? setupJWPInstance()
      : playButton.addEventListener("click", setupJWPInstance);
    if (getPlayerWrapper().style.display === "none") {
      getPlayerWrapper().style.display = "block";
    }
    if (_src !== "bbc-arabic") {
      stopBBCPlayer();
    }

    handleHighlightingSelectedChannel(_src, channelsList);
  }

  play();

  function playChannel() {
    channelsList.addEventListener("click", (event) => {
      if (event.target.closest(".turn-off")) {
        const channelsList = document.querySelector("#channels-list");
        jwpInstance.setup({
          ...jwtConfigSetup,
          file:
            currentlyPlayingSrc ||
            channels.find((c) => c.channelName === "Turis").src,
        });
        handleHighlightingSelectedChannel("", channelsList);
        stopBBCPlayer();
        setTimeout(() => {
          getPlayerWrapper().style.display = "none";
        }, 0);
      } else if (event.target.getAttribute("data-src")) {
        play(event.target.getAttribute("data-src"), event.target.textContent);
      }
    });
  }

  playChannel();
}

main();