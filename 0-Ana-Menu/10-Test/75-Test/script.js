/*
contact me on instagram if you found any bug on this player 
https://instagram.com/theviralboy.ig
some of the songs are not able to  play because codepen dosen't allow any non secure media links.
 */

// play and pause music
// contact me on instagram if you found any bug on this player
// https://instagram.com/sahilverma.dev
// some of the songs are not able to  play because codepen dosen't allow any non secure media links.
//music info
const musicInfo = [
  {
    musicName: "Oğul",
    artistName: "Eyvah Oğul",
    musicSrc:
      "https://mp3kulisi.mobi/indir/seyda-karadeniz/vefa-2011/seyda-karadeniz-eyvah-ogul.mp3",
    musicPoster: "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg",
    liked: true
  },
  {
    musicName: "Oğul",
    artistName: "Mustafa Küçük",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Mustafa-Kucuk/Klasikleri/Mustafa-Kucuk-Yandim-Ogul.mp3",
    musicPoster: "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg",
    liked: false
  },
  {
    musicName: "Oğul",
    artistName: "Nuray Hafiftaş",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Nuray-Hafiftas/Eyvah-Gonul-1999/Nuray-Hafiftas-Sen-Kucuksun.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "İzzet Yıldızhan ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Izzet-Yildizhan/Birisi-1999/Izzet-Yildizhan-Ogul.mp3",
    musicPoster: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Ferhat Tunç",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ferhat-Tunc/Ferhat-Tunc-Secmeler/Ferhat-Tunc-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Erdal Erzincan",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Erdal-Erzincan/Turkuler-Sevdamiz-Serisi/Erdal-Erzincan-Ismail-Ozden-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Raftaar",
    musicSrc:
      "https://songs15.vlcmusic.com/download.php?track_id=33726&format=320",
    musicPoster:
      "https://1.bp.blogspot.com/-3xC8UxACBBs/X7O5YLd5Y0I/AAAAAAAAEdc/Jhf3_uWkhBQH3grgqD878SHr-Aiz4L-uACLcBGAsYHQ/w640/microphone%2Bcheck.webp"
  },
  {
    musicName: "Oğul",
    artistName: "Nazlı Öksüz",
    musicSrc:
      "https://mp3kulisi.mobi/indir/nazli-oksuz/yar-benimle-gelir-misin-2020/nazli-oksuz-ogul-gomdum-ogul-seni-topraga-gomdum.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul ",
    artistName: "Aydın Ağyer",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Aydin-Agyer/Oy-Daglar-2018/Aydin-Agyer-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Ferhat Tunç ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ferhat-Tunc/Kavgamin-Cicegi-1999/Ferhat-Tunc-Gulmene-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Naki Yoksuli",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Mustafa-Ugur/Bir-Tek-Canim-2011/Mustafa-Ugur-Ogul.mp3",
    musicPoster: "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Feeling You",
    artistName: "Cemali Kaya",
    musicSrc:
      "https://mp3kulisi.mobi/indir/cemali-kaya/yolcum-2016/cemali-kaya-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  }
];
// playlist
const musicPlaylist = document.querySelector(".music-playlist");
const musicPlayer = document.querySelector(".music-player");
const playlistOpenBtn = document.querySelector(".playlist-open-btn");
const playlistCloseBtn = document.querySelector(".playlist-close-btn");
const playlist = document.querySelector(".playlist");

const openPlaylist = () => {
  musicPlayer.classList.add("open");
  musicPlaylist.classList.add("open");
};

const closePlaylist = () => {
  musicPlayer.classList.remove("open");
  musicPlaylist.classList.remove("open");
};

playlistOpenBtn.onclick = () => openPlaylist();
playlistCloseBtn.onclick = () => closePlaylist();

// swap up and down
let manager1 = new Hammer.Manager(musicPlayer);

// Create a recognizer
let Swipe1 = new Hammer.Swipe();

manager1.add(Swipe1);

manager1.on("swipe", function (e) {
  let direction = e.offsetDirection;
  if (direction == 16) {
    openPlaylist();
  }
  if (direction == 8) {
    closePlaylist();
  }
});
// swap left and right
const playerCenter = document.querySelector(".player-center");
let manager = new Hammer.Manager(playerCenter);

// Create a recognizer
let Swipe = new Hammer.Swipe();

manager.add(Swipe);

manager.on("swipe", function (e) {
  let direction = e.offsetDirection;
  if (direction == 4) {
    musicIndex = musicIndex - 1;
    currentMusic(musicIndex);
    playMusic();
  } else if (direction == 2) {
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
  }
});

musicInfo.forEach((item, index) => {
  let playlistItem = document.createElement("div");
  playlistItem.classList.add("playlist-item");

  let playlistItemPoster = document.createElement("div");
  playlistItemPoster.classList.add("playlist-item-poster");
  playlistItem.appendChild(playlistItemPoster);

  let playlistItemPosterImg = document.createElement("img");
  playlistItemPosterImg.src = item.musicPoster;
  playlistItemPoster.appendChild(playlistItemPosterImg);

  let playlistItemInfo = document.createElement("div");
  playlistItemInfo.classList.add("playlist-item-info");
  playlistItem.appendChild(playlistItemInfo);

  let playlistItemName = document.createElement("p");
  playlistItemName.classList.add("plalist-item-name");
  playlistItemName.innerText = item.musicName;
  playlistItemInfo.appendChild(playlistItemName);

  let playlistItemArtist = document.createElement("p");
  playlistItemArtist.classList.add("playlist-artist-name");
  playlistItemArtist.innerText = item.artistName;
  playlistItemInfo.appendChild(playlistItemArtist);

  let playlistHeartBtn = document.createElement("div");
  playlistHeartBtn.classList.add("playlist-heart-btn");
  playlistItem.appendChild(playlistHeartBtn);

  let playlistHeartIcon = document.createElement("i");
  playlistHeartIcon.setAttribute("class", "fa fa-heart playlist-heart-icon");
  playlistHeartBtn.appendChild(playlistHeartIcon);

  let playlistMenuBtn = document.createElement("div");
  playlistMenuBtn.classList.add("playlist-heart-btn");
  playlistItem.appendChild(playlistMenuBtn);

  let playlistMenuIcon = document.createElement("i");
  playlistMenuIcon.setAttribute(
    "class",
    "fa fa-ellipsis-v playlist-item-menu-icon"
  );
  playlistMenuBtn.appendChild(playlistMenuIcon);

  playlist.appendChild(playlistItem);
});

const playlistItems = document.querySelectorAll(".playlist-item");
playlistItems.forEach((item, index) => {
  item.onclick = () => {
    currentMusic(index);
    closePlaylist();
    playMusic();
  };
});

const posterContainer = document.querySelector(".poster-container");
musicInfo.forEach((item, index) => {
  let poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = item.musicPoster;
  poster.alt = item.musicName;
  posterContainer.appendChild(poster);
});
const audio = document.querySelector(".audio");
const bg = document.querySelector(".bg");
let musicName = document.querySelector(".music-name");
let artistName = document.querySelector(".artist-name");
let musicIndex = 0;
const currentMusic = (index) => {
  let i = index % musicInfo.length;
  bg.src = musicInfo[i].musicPoster;
  posterContainer.style.left = -(index * 100) + "%";
  musicName.innerText = musicInfo[i].musicName;
  artistName.innerText = musicInfo[i].artistName;
  audio.src = musicInfo[i].musicSrc;
};
currentMusic(musicIndex);

// music controls
const prevBtn = document.querySelector(".back-btn");
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".forward-btn");
const loopBtn = document.querySelector(".loop-btn");
const shuffleBtn = document.querySelector(".shuffle-btn");
let isPlaying = false;
let isShuffle = false;
let isLoop = false;

playBtn.onclick = () => {
  startMusic();
};
const startMusic = () => {
  isPlaying ? pauseMusic() : playMusic();
};
loopBtn.onclick = () => {
  isLoop = !isLoop;
  if (isLoop == true) {
    loopBtn.classList.add("active");
  } else {
    loopBtn.classList.remove("active");
  }
};
shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  if (isShuffle == true) {
    shuffleBtn.classList.add("active");
  } else {
    shuffleBtn.classList.remove("active");
  }
};

nextBtn.onclick = () => {
  nextMusic();
};
const nextMusic = () => {
  musicIndex = musicIndex + 1;
  currentMusic(musicIndex);
  playMusic();
};
prevBtn.onclick = () => {
  prevMusic();
};
const prevMusic = () => {
  musicIndex = musicIndex - 1;
  currentMusic(musicIndex);
  playMusic();
};
const playMusic = () => {
  isPlaying = true;
  audio.play();
  playBtn.classList.replace("fa-play-circle", "fa-pause-circle-o");
};

function pauseMusic() {
  isPlaying = false;
  audio.pause();
  playBtn.classList.replace("fa-pause-circle-o", "fa-play-circle");
}

// timebar

// music time
const current = document.querySelector(".music-current-time");
const duration = document.querySelector(".music-duration-time");
if (duration.innerText == "NaN:0NaN") {
  duration.innerText = "0:00";
}

audio.addEventListener("timeupdate", () => {
  let time = audio.currentTime;
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60);
  if (seconds < 10) {
    current.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    current.innerText = minutes + ":" + seconds;
  } else {
    current.innerText = minutes + ":0" + seconds;
  }

  //duration time
  time = audio.duration;
  seconds = Math.floor(time % 60);
  minutes = Math.floor(time / 60);
  if (seconds < 10) {
    duration.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    duration.innerText = minutes + ":" + seconds;
  } else {
    duration.innerText = "0:00";
  }

  // time bar
  const timebarCicle = document.querySelector(".music-current-length-circle");
  const timebar = document.querySelector(".music-current-length");

  timebar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  timebarCicle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
  if (
    isLoop == false &&
    isShuffle == false &&
    audio.currentTime == audio.duration
  ) {
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
  } else if (isLoop == true && audio.currentTime == audio.duration) {
    audio.currentTime = 0;
    playMusic();
  } else if (isShuffle == true && audio.currentTime == audio.duration) {
    musicIndex = Math.floor(Math.random() * musicInfo.length);
    currentMusic(musicIndex);
    playMusic();
  }
});

const musicTimebar = document.querySelector(".music-timebar");
musicTimebar.addEventListener("click", (e) => {
  let a = e.offsetX;
  const b = e.srcElement.clientWidth;
  audio.currentTime = (a / b) * audio.duration;
});

window.addEventListener("keydown", (e) => {
  let code = e.keyCode;
  if (code == 32) {
    startMusic();
  }
  if (code == 39) {
    audio.currentTime += 5;
    playMusic();
  }
  if (code == 37) {
    playMusic();
    audio.currentTime -= 5;
  }
});