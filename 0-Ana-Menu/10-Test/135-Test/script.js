// special thanks to https://github.com/iptv-org/iptv/tree/master/streams for the channel files (m3u8)

const channels = [
  {
    name: "Atv | b",
    category: "film",
    url: "https://kanaldvod.duhnet.tv/S11/HLS_VOD/277935_08f6/index.m3u8"
  },
  {
    name: "Atv | c",
    category: "Ulusal",
    url: "https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8"
  },
  {
    name: "fox",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/FoxTurkey/playlist.m3u8"
  },
  {
    name: "kanal 7",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/Kanal7/playlist.m3u8"
  },
  {
    name: "kanal d",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/KanalD/playlist.m3u8"
  },
  {
    name: "show tv",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/ShowTV/playlist.m3u8"
  },
  {
    name: "Star",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/StarTV/playlist.m3u8"
  },
  {
    name: "trt 1",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/trt1/playlist.m3u8"
  },
  {
    name: "Tv8",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/tv8/playlist.m3u8"
  },
  {
    name: "360",
    category: "Ulusal",
    url: "https://tv8-live.daioncdn.net/tv8/tv8.m3u8"
  },
  {
    name: "a haber",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/AHaber/playlist.m3u8"
  },
  {
    name: "Akit tv",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/akittv/playlist.m3u8"
  },

  {
    name: "Beeyaz Tv",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/beyaz/playlist.m3u8"
  },
  {
    name: "Cnn",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/cnnturk/playlist.m3u8"
  },
  {
    name: "Tele 1",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/tele1/playlist.m3u8"
  },
  {
    name: "Trt Muzik",
    category: "Ulusal",
    url: "http://hw2.jemtv.com/app/10063.stream/playlist.m3u8"
  },
  {
    name: "Ulke Tv",
    category: "Ulusal",
    url: "http://hw1.jemtv.com/app/ulketv/playlist.m3u8"
  },
  {
    name: "A2",
    category: "Ulusal",
    url: "https://tgn.bozztv.com/dvrfl05/gin-atva2/tracks-v1a1/mono.m3u8"
  },
  {
    name: "Beinsport haber",
    category: "Ulusal",
    url: "https://trn03.tulix.tv/gt-beinsportshaber/index.m3u8"
  },
  {
    name: "Bengü türk",
    category: "Ulusal",
    url: "https://trn03.tulix.tv/gt-benguturk/index.m3u8"
  },
  {
    name: "Cnn türk",
    category: "Ulusal",
    url: "https://tgn.bozztv.com/dvrfl05/gin-cnnturk/tracks-v1a1/mono.m3u8"
  },
  {
    name: "Dmax",
    category: "Ulusal",
    url: "https://trn03.tulix.tv/gt-dmax/index.m3u8"
  },
  {
    name: "Dream türk",
    category: "Ulusal",
    url: "https://trn03.tulix.tv/gt-dreamturk/index.m3u8"
  }
];

// DO NOT CHANGE BELOW ...
const channelList = document.getElementById("channelList");
const videoPlayer = document.getElementById("videoPlayer");
const loading = document.getElementById("loading");
const videoGlow = document.querySelector(".video-glow");
let currentChannelIndex = -1;
let lastGlowColor = { r: 0, g: 0, b: 0 };
let glowUpdateInterval;

function loadChannels() {
  loading.style.display = "none";
  channels.forEach((channel, index) => {
    const channelItem = document.createElement("div");
    channelItem.className = "channel-item fade-in";
    channelItem.style.animationDelay = `${index * 0.05}s`;
    channelItem.innerHTML = `
          <div class="channel-name">${channel.name}</div>
          <div class="channel-category">${channel.category}</div>
        `;
    channelItem.addEventListener("click", () => {
      selectChannel(index);
    });
    channelList.appendChild(channelItem);
  });
}

function selectChannel(index) {
  currentChannelIndex = index;
  const selectedChannel = channels[index];
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(selectedChannel.url);
    hls.attachMedia(videoPlayer);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoPlayer.play();
    });
  } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
    videoPlayer.src = selectedChannel.url;
    videoPlayer.addEventListener("loadedmetadata", function () {
      videoPlayer.play();
    });
  }
  // Update active state in the list
  const channelItems = channelList.getElementsByClassName("channel-item");
  for (let i = 0; i < channelItems.length; i++) {
    channelItems[i].classList.remove("active");
  }
  channelItems[index].classList.add("active");
  // Scroll to the active channel
  channelItems[index].scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
  // Animate the channel change
  videoPlayer.classList.add("fade-in");
  setTimeout(() => videoPlayer.classList.remove("fade-in"), 500);
  // Reset glow color and start updating
  lastGlowColor = {
    r: 0,
    g: 0,
    b: 0
  };
  clearInterval(glowUpdateInterval);
  glowUpdateInterval = setInterval(updateVideoGlow, 100);
}

function updateVideoGlow() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = videoPlayer.videoWidth;
  canvas.height = videoPlayer.videoHeight;
  ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
  // Sample multiple points for more accurate color representation
  const samplePoints = [
    {
      x: 0,
      y: 0
    },
    {
      x: canvas.width - 1,
      y: 0
    },
    {
      x: 0,
      y: canvas.height - 1
    },
    {
      x: canvas.width - 1,
      y: canvas.height - 1
    },
    {
      x: Math.floor(canvas.width / 2),
      y: Math.floor(canvas.height / 2)
    }
  ];
  let r = 0,
    g = 0,
    b = 0;
  samplePoints.forEach((point) => {
    const pixel = ctx.getImageData(point.x, point.y, 1, 1).data;
    r += pixel[0];
    g += pixel[1];
    b += pixel[2];
  });
  r = Math.floor(r / samplePoints.length);
  g = Math.floor(g / samplePoints.length);
  b = Math.floor(b / samplePoints.length);
  // Smooth color transition
  const transitionSpeed = 0.1; // Adjust this value to change transition speed (0-1)
  lastGlowColor.r += (r - lastGlowColor.r) * transitionSpeed;
  lastGlowColor.g += (g - lastGlowColor.g) * transitionSpeed;
  lastGlowColor.b += (b - lastGlowColor.b) * transitionSpeed;
  // Set glow color and intensity
  const glowColor = `rgb(${Math.round(lastGlowColor.r)},${Math.round(
    lastGlowColor.g
  )},${Math.round(lastGlowColor.b)})`;
  videoGlow.style.background = `radial-gradient(circle, ${glowColor} 0%, rgba(${Math.round(
    lastGlowColor.r
  )},${Math.round(lastGlowColor.g)},${Math.round(
    lastGlowColor.b
  )},0.2) 70%, rgba(${Math.round(lastGlowColor.r)},${Math.round(
    lastGlowColor.g
  )},${Math.round(lastGlowColor.b)},0) 100%)`;
}
// Load channels
loadChannels();
// Enable smooth scrolling for the channel list
channelList.addEventListener("wheel", (e) => {
  e.preventDefault();
  channelList.scrollBy({
    top: e.deltaY,
    behavior: "smooth"
  });
});
// Enable keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (currentChannelIndex > 0) {
      selectChannel(currentChannelIndex - 1);
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (currentChannelIndex < channels.length - 1) {
      selectChannel(currentChannelIndex + 1);
    }
  }
});