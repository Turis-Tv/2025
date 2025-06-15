const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Hata-Benim-2000/Neset-Ertas-Yazimi-Kisa-Cevirdin.mp3",
    title: "Al-Fatiha",
    artist: "Saad Al-Ghamdi - Hafs op gezag van Asim",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Sabreyle-Gonul-2001/Neset-Ertas-Arefe-Tarif.mp3",
    title: "البقرة",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Muhur-Gozlum-1999/Neset-Ertas-Acma-Zuluflerin.mp3",
    title: "آل عمران ",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Agla-Sazim-2000/Neset-Ertas-Agla-Sazim.mp3",
    title: "النساء",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Gonul-Ne-Gezersin-Seyran-Yerinde-1988/Neset-Ertas-Ah-Ellerin-Sala-Sala.mp3",
    title: "المائدة",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Cicek-Dagi-2000/Neset-Ertas-Ah-Su-Yalanci-Dunya.mp3",
    title: "الأنعام",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Benim-Yurdum-1995/Neset-Ertas-Allah-Etmesin.mp3",
    title: "الأعراف",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Zahidem-2000/Neset-Ertas-Anam-Aglar.mp3",
    title: "الأنفال",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Yar-Gonlunu-Bilenlere-2002/Neset-Ertas-Analar-Babalar-Devri.mp3",
    title: "التوبة",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
  {
    songSrc: "https://mp3kulisi.mobi/indir/Neset-Ertas/Sabreyle-Gonul-2001/Neset-Ertas-Aradim-Derdimi.mp3",
    title: "يونس",
    artist: "سعد الغامدي - حفص عن عاصم",
    imgSrc: "https://mp3indirdur.life/detayresim/100/100/mp3resimler/Neset-Ertas-Cicek-Dagi-2000.jpg",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});