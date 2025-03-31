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
    artistName: "Mustafa Küçük ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Mustafa-Kucuk/Klasikleri/Mustafa-Kucuk-Yandim-Ogul.mp3",
    musicPoster: "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg",
    liked: false
  },
  {
    musicName: "Oğul",
    artistName: "Nuray Hafiftaş ",
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
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Ferhat Tunç ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ferhat-Tunc/Ferhat-Tunc-Secmeler/Ferhat-Tunc-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Erdal Erzincan  ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Erdal-Erzincan/Turkuler-Sevdamiz-Serisi/Erdal-Erzincan-Ismail-Ozden-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Nazlı Öksüz",
    musicSrc:
      "https://mp3kulisi.mobi/indir/nazli-oksuz/yar-benimle-gelir-misin-2020/nazli-oksuz-ogul-gomdum-ogul-seni-topraga-gomdum.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Aydın Ağyer ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Aydin-Agyer/Oy-Daglar-2018/Aydin-Agyer-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Ferhat Tunç",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ferhat-Tunc/Kavgamin-Cicegi-1999/Ferhat-Tunc-Gulmene-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Mustafa Uğur ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/Mustafa-Ugur/Bir-Tek-Canim-2011/Mustafa-Ugur-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Elif Altıntaş ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/Elif-Altintas/Unut-Beni-Senin-Hallerin-2013/Elif-Altintas-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Hakkı Bulut ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Hakki-Bulut/Senden-Vazgecmem-2012/Hakki-Bulut-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Osman Öztunç ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/Osman-Oztunc/Durmusun-Turkusu-1999/Osman-Oztunc-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Tülay Maciran",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Tulay-Maciran/Nerdesin-2014/Tulay-Maciran-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Murat Çobanoğlu",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Murat-Cobanoglu/Ozan-Murat-Sarkilari/Murat-Cobanoglu-Ogul-Babayi-Tanimaz.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Derinsu",
    musicSrc:
      "https://mp3kulisi.mobi/indir/derinsu/derin-turkuler-2010/derinsu-can-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: " Murat Güler",
    musicSrc:
      "https://mp3kulisi.mobi/indir/murat-guler/kilit-2009/murat-guler-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Sevda Gül ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/sevda-gul/sevdali-turkuler-2002/sevda-gul-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Aşık Hayrani ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/asik-hayrani/hisse-alsana-1987/asik-hayrani-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Abdullah Bektaş ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/abdullah-bektas/ogul-2016/abdullah-bektas-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },

  {
    musicName: "Oğul",
    artistName: "Şahin Yücebaş ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Sahin-Yucebas/Yoruldum-Anam-2017/Sahin-Yucebas-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Naki Yoksuli ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/naki-yoksuli/dogma-bebek-2006/naki-yoksuli-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Cemali Kaya ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/cemali-kaya/yolcum-2016/cemali-kaya-ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Ruşen Aydeniz ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/Rusen-Aydeniz/Kara-Kiz-2019/Rusen-Aydeniz-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Çimen Yalçın ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Cimen-Yalcin/Ogul-2020/Cimen-Yalcin-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Oğul",
    artistName: "Arzu Şahin ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Arzu-Sahin/Ceylanim-1999/Arzu-Sahin-Sen-Kucuksun-Olemezsin.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Yetim-Yavrum",
    artistName: "Sibel Can ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/sibel-can/canim-benim-2001/sibel-can-yetim-yavrum.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Hele Yavrum",
    artistName: "Ali Turaç ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ali-Turac/Ali-Turac-Klasikleri/Ali-Turac-Hele-Yavrum.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Seyfettin Sucu ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Seyfettin-Sucu/Anilarim-1980/Seyfettin-Sucu-Evlat-Acisi.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Ayhan Keser ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ayhan-Keser/Kavak-Yelleri-2018/Ayhan-Keser-Evlat-Acisi.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Ali Ercan ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ali-Ercan/Ali-Ercan-Uzelli-Arsiv/Ali-Ercan-Evlat-Acisi.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Gönül Maraşlı ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ali-Ercan/Ali-Ercan-Uzelli-Arsiv/Ali-Ercan-Evlat-Acisi.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "İsmail Özden ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/Ismail-Ozden/Gonul-Ezgilerimiz-1998/Ismail-Ozden-Sen-Kucuksun.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Recebim ",
    musicSrc:
      " https://mp3kulisi.mobi/indir/Recebim/Vatan-2018/Recebim-Uyu-Bebegim.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: " Evlat Acısı",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ali-Haydar-Yildiz/Dinle-Ahvalimi-2019/Ali-Haydar-Yildiz-Emek-Cektim.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Çimen Yalçın ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Cimen-Yalcin/Ogul-2020/Cimen-Yalcin-Ogul.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Çılgın Sedat ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Cilgin-Sedat/Sirac-Bebegime-2007/Cilgin-Sedat-Sirac-Bebegim.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Metin Çiftlik ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Metin-Ciftlik/Gunun-Birinde-2003/Metin-Ciftlik-Vur-Mezarci-Kazmayi.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Bedirhan Gökçe ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Bedirhan-Gokce/Adam-Kavgada-Belli-Olur-2007/Bedirhan-Gokce-Ogluma.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },
  {
    musicName: "Evlat Acısı",
    artistName: "Bedirhan Gökçe ",
    musicSrc:
      "https://mp3kulisi.mobi/indir/Ferhat-Tunc/Vurgunum-Hasretine-1986/Ferhat-Tunc-Uyu-Yavrum.mp3",
    musicPoster:
      "https://1k-cdn.com/resimler//kitaplar/42674_1439927696.jpg"
  },























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