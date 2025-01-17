// app.js

const m3uUrl = "https://raw.githubusercontent.com/Turis-Tv/Turis-Tv-m3u/refs/heads/main/2-Haberler.m3u";
let channels = [];
let currentChannelIndex = 0;

// Ejecuta el código cuando la página esté completamente cargada
document.addEventListener("DOMContentLoaded", () => {
  fetchM3U(m3uUrl);

  const nextButton = document.getElementById("next-channel");
  nextButton.addEventListener("click", nextChannel); // Evento de cambio de canal
});

async function fetchM3U(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("No se pudo cargar la lista M3U");
    const data = await response.text();
    parseM3U(data);
  } catch (error) {
    console.error("Error al cargar el archivo M3U:", error);
    document.getElementById("channel-list").innerHTML = "<p>Error al cargar la lista de canales.</p>";
  }
}

function parseM3U(data) {
  try {
    const lines = data.split("\n");
    let currentChannel = {};

    lines.forEach((line) => {
      line = line.trim();

      // Filtra los comentarios y solo procesa las URLs de los canales
      if (line.startsWith("#EXTINF")) {
        currentChannel.name = line.split(",")[1] || "Canal sin nombre"; // Extrae el nombre del canal
      } else if (line && !line.startsWith("#")) {
        currentChannel.url = line; // Extrae la URL del canal
        channels.push(currentChannel);
        currentChannel = {}; // Resetea para el siguiente canal
      }
    });

    displayChannels(channels);
    playChannel(currentChannelIndex); // Reproduce el primer canal
  } catch (error) {
    console.error("Error al analizar la lista M3U:", error);
    document.getElementById("channel-list").innerHTML = "<p>Error al procesar la lista de canales.</p>";
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
    videoPlayer.src = channels[index].url; // Soporte nativo en Safari y otros navegadores
  } else {
    alert("Tu navegador no soporta este tipo de transmisiones.");
  }

  videoPlayer.play();
}

function nextChannel() {
  // Cambiar al siguiente canal en la lista
  if (channels.length > 0) {
    currentChannelIndex = (currentChannelIndex + 1) % channels.length; // Avanza al siguiente canal
    playChannel(currentChannelIndex);
  }
}