// special thanks to https://github.com/iptv-org/iptv/tree/master/streams for the channel files (m3u8)

const channels = [
  {
    name: "ccc",
    category: "News, Local",
    url: "https://vod.mycamtv.net/5320.m3u8"
  },
  {
    name: "dfg",
    category: "News, Local",
    url: "https://vod.mycamtv.net/5320.m3u8"
  },
  {
    name: "cwd",
    category: "News, Local",
    url: "https://vod.mycamtv.net/5320.m3u8"
  },
  {
    name: "CBS LA",
    category: "News, Local",
    url: "https://cbsn-la.cbsnstream.cbsnews.com/out/v1/57b6c4534a164accb6b1872b501e0028/master.m3u8"
  },
  {
    name: "ABC News",
    category: "News",
    url: "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8"
  },
  {
    name: "CBS News",
    category: "News",
    url: "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8"
  },
  {
    name: "Sky News",
    category: "News",
    url:
      "https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8"
  },
  {
    name: "Newsmax",
    category: "News",
    url: "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8"
  },
  {
    name: "DW English",
    category: "News",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
  },
  {
    name: "Red Bull TV",
    category: "Sports",
    url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
  },
  {
    name: "Tastemade",
    category: "Lifestyle",
    url: "https://tastemadessai.akamaized.net/amagi_hls_data_tastemade-tastemade/CDN/playlist.m3u8"
  },
  {
    name: "Fashion TV",
    category: "Lifestyle",
    url: "https://fash1043.cloudycdn.services/slive/_definst_/ftv_ftv_midnite_k1y_27049_midnite_secr_108_hls.smil/playlist.m3u8"
  },
  {
    name: "Bon Appétit",
    category: "Lifestyle",
    url: "https://bonappetit-samsung.amagi.tv/playlist.m3u8"
  },
  {
    name: "World Poker Tour",
    category: "World Poker Tour",
    url: "https://d3w4n3hhseniak.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/WPT-DistroTV/150.m3u8"
  },
  {
    name: "Rakuten TV Action",
    category: "Movies",
    url: "https://rakuten-actionmovies-1-eu.rakuten.wurl.tv/playlist.m3u8"
  },
  {
    name: "AsianCrush",
    category: "Movies",
    url: "https://amg01201-cinedigmenterta-asiancrush-cineverse-x701o.amagi.tv/playlist/amg01201-cinedigmenterta-asiancrush-cineverse/playlist.m3u8"
  },
  {
    name: "Ultimate Music Ch",
    category: "Music",
    url: "https://app.viloud.tv/hls/channel/0694b92d093cc2bd5438ff9bbccaf1a2.m3u8"
  },
  {
    name: "30A Music",
    category: "Musics",
    url: "https://30a-tv.com/feeds/ceftech/30atvmusic.m3u8"
  },
  {
    name: "Adult Swim Toonami",
    category: "Comics",
    url: "https://adultswim-vodlive.cdn.turner.com/live/toonami/stream.m3u8"
  },
  {
    name: "AS Rick and Morty",
    category: "Comics",
    url: "https://adultswim-vodlive.cdn.turner.com/live/rick-and-morty/stream.m3u8"
  },
  {
    name: "AS Robot Chicken",
    category: "Comics",
    url: "https://adultswim-vodlive.cdn.turner.com/live/robot-chicken/stream.m3u8"
  },
  {
    name: "AS Mr. Pickles",
    category: "Comics",
    url: "https://adultswim-vodlive.cdn.turner.com/live/mr-pickles/stream.m3u8"
  },
  {
    name: "30A Ridiculous TV",
    category: "Tiktok",
    url: "https://30a-tv.com/feeds/720p/63.m3u8"
  },
  {
    name: "Arirang TV",
    category: "News, KR",
    url: "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8"
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