document.addEventListener('DOMContentLoaded', function() {
const playlistItems = document.querySelectorAll('.playlist li a');
const playBtn = document.getElementById('play-btn');
const audioPlayer = document.getElementById('audio-player');
const stationName = document.querySelector('.station-name');
const stationFrequency = document.querySelector('.station-frequency');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const stopBtn = document.getElementById('stop-btn');
const volumeUpBtn = document.getElementById('volume-up-button');
const volumeDownBtn = document.getElementById('volume-down-button');
const playlistToggleBtn = document.getElementById('toggle-player-and-playlist-button');


let currentStation = 0;
let isPlaying = false;
let currentVolume = 1;



// play the selected station
function playStation(index) {
  audioPlayer.src = playlistItems[index].dataset.src;
  audioPlayer.load();
  audioPlayer.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="material-icons">pause</i>';
  stationName.textContent = playlistItems[index].textContent;
  stationFrequency.textContent = 'Loading...';
  currentStation = index;
}

// stop the audio player
function stopStation() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  isPlaying = false;
  playBtn.innerHTML = '<i class="material-icons">play_arrow</i';
  stationFrequency.textContent = 'Stop';
}

// go to the next station in the playlist
function nextStation() {
  currentStation++;
  if (currentStation >= playlistItems.length) {
    currentStation = 0;
  }
  playStation(currentStation);
}

// go to the previous station in the playlist
function prevStation() {
  currentStation--;
  if (currentStation < 0) {
    currentStation = playlistItems.length - 1;
  }
  playStation(currentStation);
}

// increase the volume
function volumeUp() {
  if (currentVolume < 1) {
    currentVolume += 0.1;
    if (currentVolume > 1) {
      currentVolume = 1;
    }
    audioPlayer.volume = currentVolume;
  }
}

// decrease the volume
function volumeDown() {
  if (currentVolume > 0) {
    currentVolume -= 0.1;
    if (currentVolume < 0) {
      currentVolume = 0;
    }
    audioPlayer.volume = currentVolume;
  }
}

volumeUpBtn.addEventListener('mousedown', function() {
  volumeInterval = setInterval(volumeUp, 100);
  this.classList.add('active');
  volumeDownBtn.classList.remove('active');
});

volumeUpBtn.addEventListener('mouseup', function() {
  clearInterval(volumeInterval);
  volumeUpBtn.classList.remove('active');
});

volumeDownBtn.addEventListener('mousedown', function() {
  intervalId = setInterval(volumeDown, 100);
  this.classList.add('active');
  volumeUpBtn.classList.remove('active');
  
});

volumeDownBtn.addEventListener('mouseup', function() {
  clearInterval(intervalId);
  volumeDownBtn.classList.remove('active');
});
  
  
  

// event listeners
playBtn.addEventListener('click', function() {
  if (!isPlaying) {
    playStation(currentStation);
  } else {
    stopStation();
  }
});


nextBtn.addEventListener('mousedown', function() {
  nextStation();
  this.classList.add('active');
  playBtn.classList.add('active');
});
  nextBtn.addEventListener('mouseup', function() {
  nextBtn.classList.remove('active');
});

prevBtn.addEventListener('mousedown', function() {
  prevStation();
  this.classList.add('active');
  playBtn.classList.add('active');
});
prevBtn.addEventListener('mouseup', function() {
  prevBtn.classList.remove('active');
});

  
playBtn.addEventListener('click', function() {
  if (!isPlaying) {
    audioPlayer.pause();
    this.classList.remove('active');
  } else {
    audioPlayer.play();
    this.classList.add('active');
  }
});

stopBtn.addEventListener('mousedown', function() {
  audioPlayer.currentTime = 0;
  audioPlayer.pause();
  this.classList.add('active');
  playBtn.classList.remove('active');
  isPlaying = false;
  playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
  stationFrequency.textContent = 'Stop';
});
  
 stopBtn.addEventListener('mouseup', function() {
  stopBtn.classList.remove('active');
}); 
 

audioPlayer.addEventListener('canplay', function() {
  stationFrequency.textContent = audioPlayer.duration.toFixed(0) + '';
});
const radioStations = [
  {
    frequency: 'Directo',
  } 
];
// populate playlist
function populatePlaylist() {
  for (let i = 0; i < radioStations.length; i++) {
    const station = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = radioStations[i].name + ' - ' + radioStations[i].frequency + '';
    link.dataset.index = i;
    link.dataset.src = radioStations[i].src;
    station.appendChild(link);
    
  }
}
// Seleccionar el elemento <p> por su ID
const frequencyElement = document.getElementById('station-frequency');

// Obtener la frecuencia de la estación de radio actual

let currentIndex = 0;
const currentFrequency = radioStations[currentIndex].frequency;
function loadStation() {
  // Obtener la estación actualmente seleccionada
  const station = radioStations[currentIndex];
  
  // Actualizar el nombre de la estación y la frecuencia en la interfaz de usuario
  const nameElement = document.querySelector('.station-name');
  const frequencyElement = document.querySelector('.station-frequency');
  nameElement.textContent = station.name;
  frequencyElement.textContent = station.frequency + '';
  
  // Cargar el audio de la estación
  const audioElement = document.querySelector('.audio-player');
  audioElement.src = station.src;
  audioElement.load();
}
  
// Actualizar el contenido del elemento con la frecuencia actual
frequencyElement.textContent = currentFrequency + '';
window.addEventListener('load', () => {
        const stationFrequency = document.getElementById('station-frequency');
        const frequencyValue = stationFrequency.textContent.trim();
        stationFrequency.textContent = frequencyValue === 'Directo' ? 'Online' : frequencyValue;
      });
  // Botón de YouTube
const youtubeBtn = document.querySelector('.additional-buttons a[href="https://www.youtube.com/"]');
youtubeBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar la acción predeterminada del enlace
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) { // Verificar si es un dispositivo iOS
    window.location = 'youtube://'; // Abrir la aplicación de YouTube si está instalada
  } else {
    window.open('https://www.youtube.com/', '_blank'); // Abrir la página de YouTube en una nueva pestaña del navegador
  }
});

// Botón de GPS
const gpsBtn = document.querySelector('.gps-btn');
gpsBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar la acción predeterminada del botón
  if (navigator.geolocation) { // Verificar si el navegador es compatible con la geolocalización
    navigator.geolocation.getCurrentPosition(function(position) {
      const { latitude, longitude } = position.coords;
      window.open(`geo:${latitude},${longitude}`); // Abrir la aplicación de GPS con las coordenadas de la ubicación actual
    });
  }
});


// Botón de teléfono
const phoneBtn = document.querySelector('.additional-buttons a[href^="tel:"]');
phoneBtn.addEventListener('click', function(event) {
  const phoneNumber = this.href.replace('tel:', ''); // Obtener el número de teléfono del enlace
  if (!phoneNumber) return; // Salir si el número de teléfono es inválido
  event.preventDefault(); // Evitar la acción predeterminada del enlace
  if (/iPhone|iPad|iPod/.test(navigator.userAgent)) { // Verificar si es un dispositivo iOS
    window.location = `tel://${phoneNumber}`; // Realizar la llamada telefónica
  } else {
    window.open(`tel:${phoneNumber}`); // Abrir la aplicación de teléfono con el número de teléfono
  }
});
  

  });