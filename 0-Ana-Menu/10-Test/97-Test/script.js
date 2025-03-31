Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  songs: [
    {
      name: "Risin' High (feat Raashan Ahmad)",
      artist: "Ancient Astronauts",
      album: "We Are to Answer",
      url:
        "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
    },
    {
      name: "The Gun",
      artist: "Lorn",
      album: "Ask The Dust",
      url: "https://521dimensions.com/song/08 The Gun.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
    },
    {
      name: "Anvil",
      artist: "Lorn",
      album: "Anvil",
      url: "https://521dimensions.com/song/LORN - ANVIL.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg"
    },
    {
      name: "I Came Running",
      artist: "Ancient Astronauts",
      album: "We Are to Answer",
      url: "https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
    },
    {
      name: "First Snow",
      artist: "Emancipator",
      album: "Soon It Will Be Cold Enough",
      url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
    },
    {
      name: "Terrain",
      artist: "pg.lost",
      album: "Key",
      url: "https://521dimensions.com/song/Terrain-pglost.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg"
    },
    {
      name: "Vorel",
      artist: "Russian Circles",
      album: "Guidance",
      url: "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg"
    },
    {
      name: "Intro / Sweet Glory",
      artist: "Jimkata",
      album: "Die Digital",
      url: "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
    },
    {
      name: "Offcut #6",
      artist: "Little People",
      album: "We Are But Hunks of Wood Remixes",
      url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
    },
    {
      name: "Dusk To Dawn",
      artist: "Emancipator",
      album: "Dusk To Dawn",
      url: "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
    },
    {
      name: "Anthem",
      artist: "Emancipator",
      album: "Soon It Will Be Cold Enough",
      url: "https://521dimensions.com/song/Anthem-Emancipator.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
    }
  ],
  callbacks: {
    initialized: function () {
      var lastIndex = getSongs();
      nextSong(lastIndex);
    },
    song_change: function () {
      var lastIndex = getSongs();
      nextSong(lastIndex);
    }
  }
});
hamburger();
volumeSlider();

/*$('#list-screen-header').on('click', function(){
  $('#list').css('display', 'block');
})*/

function volumeSlider() {
  $(".volumeIcon").on("click", function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".hamburger").removeClass("is-active");
      $("#list-screen").css("display", "none");
      $(".volumeSlideContainer").css("display", "block");
    } else {
      $(".volumeSlideContainer").css("display", "none");
    }
  });
}

function hamburger() {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".volumeIcon").removeClass("is-active");
      $(".volumeSlideContainer").css("display", "none");
      $("#list-screen").css("display", "block");
    } else {
      $("#list-screen").css("display", "none");
    }
  });
}

function getSongs() {
  var songs = Amplitude.getSongs(),
    lastIndex = songs.length - 1;

  return lastIndex;
}
function nextSong(lastIndex) {
  var activeIndex = Amplitude.getActiveIndex(),
    nextIndex;
  if (activeIndex === lastIndex) {
    nextIndex = 0;
  } else {
    nextIndex = activeIndex + 1;
  }
  var nextSong = Amplitude.getSongAtIndex(nextIndex);
  $(".nextSongArtwork").attr("src", nextSong.cover_art_url);
  $(".nextSongName").text(nextSong.name);
  $(".nextSongAlbum").text(nextSong.artist);
  console.log(nextSong);
}