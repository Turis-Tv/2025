// app.js

const m3uUrl = "https://raw.githubusercontent.com/Turis-Tv/Turis-Tv-m3u/refs/heads/main/10-M3u-Listeleri/4-Muzik.m3u";
let channels = [];
let currentChannelIndex = 0;

// Sayfa tamamen yüklendiğinde kodu çalıştırın
document.addEventListener("DOMContentLoaded", () => {
  fetchM3U(m3uUrl);

  const nextButton = document.getElementById("next-channel");
  nextButton.addEventListener("click", nextChannel); // Kanal değiştirme olayı
});

async function fetchM3U(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("M3U listesi yüklenemedi");
    const data = await response.text();
    parseM3U(data);
  } catch (error) {
    console.error("M3U dosyası yüklenirken hata oluştu:", error);
    document.getElementById("channel-list").innerHTML = "<p>Kanal listesi yüklenirken hata oluştu.</p>";
  }
}

function parseM3U(data) {
  try {
    const lines = data.split("\n");
    let currentChannel = {};

    lines.forEach((line) => {
      line = line.trim();

      // Yorumları filtreleyin ve yalnızca kanal URL'lerini işleyin
      if (line.startsWith("#EXTINF")) {
        currentChannel.name = line.split(",")[1] || "Adsız kanal"; // Kanal adını çıkar
      } else if (line && !line.startsWith("#")) {
        currentChannel.url = line; // Kanal URL'sini çıkart
        channels.push(currentChannel);
        currentChannel = {}; // Sonraki kanala sıfırla
      }
    });

    displayChannels(channels);
    playChannel(currentChannelIndex); // İlk kanalı oynat
  } catch (error) {
    console.error("Error al analizar la lista M3U:", error);
    document.getElementById("channel-list").innerHTML = "<p>Kanal listesi işlenirken hata oluştu.</p>";
  }
}

function displayChannels(channels) {
  const channelList = document.getElementById("channel-list");
  channelList.innerHTML = ""; // Limpia la lista anterior

  channels.forEach((channel, index) => {
    const channelElement = document.createElement("div");
    channelElement.textContent = channel.name;
    channelElement.classList.add("channel-item");
    channelElement.addEventListener("click", () => playChannel(index));

    channelList.appendChild(channelElement);
  });
}

function playChannel(index) {
  const videoPlayer = document.getElementById("video-player");

  // Actualiza el índice del canal actual
  currentChannelIndex = index;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(channels[index].url);
    hls.attachMedia(videoPlayer);
  } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
    videoPlayer.src = channels[index].url; // Safari ve diğer tarayıcılarda yerel destek
  } else {
    alert("Tarayıcınız bu tür aktarımları desteklemiyor.");
  }

  videoPlayer.play();
}

function nextChannel() {
  // Cambiar al siguiente canal en la lista
  if (channels.length > 0) {
    currentChannelIndex = (currentChannelIndex + 1) % channels.length; // Sonraki kanala git
    playChannel(currentChannelIndex);
  }
}