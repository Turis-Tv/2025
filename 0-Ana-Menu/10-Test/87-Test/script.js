// https://521dimensions.com/open-source/amplitudejs/examples/flat-black-playlist

Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  songs: [
    {
      name: "Когда весна придет",
      artist: "Николай Рыбников",
      album: "",
      url: "https://static.tunnel.ru/media/audio/2016-10/post_comment/772268//at138348168.mp3",
      cover_art_url: "https://ic.wampi.ru/2023/02/26/8-MARTA.jpg"
    },
    {
      name: "Весна",
      artist: "Лариса Долина",
      album: "",
      url: "https://static.tunnel.ru/media/audio/2016-09/post_comment/149985//song.mp3",
      cover_art_url: "https://ie.wampi.ru/2023/03/01/VESNA.gif"
    },
    {
      name: "Была весна",
      artist: "Ля Минор",
      album: "",
      url: "https://static.tunnel.ru/media/audio/2016-09/post_comment/150015//song.mp3",
      cover_art_url: "https://im.wampi.ru/2023/03/01/image.gif"
    },
    {
      name: "Привет, весна",
      artist: "Марина Александрова",
      album: "",
      url: "https://static.tunnel.ru/media/audio/2018-03/post_comment/939516//m.aleksandrova---privet-vesna.mp3",
      cover_art_url: "https://ic.wampi.ru/2023/03/01/PRISLA-VESNA.jpg"
    },
    {
      name: "Как упоительны в России вечера",
      artist: "Белый орел",
      album: "",
      url: "https://tunnel.ru/tmp/OuQ6lgItE7UVbfohX2k1/belyiy-orol---kak-upoitelnyi-v-rossii-vechera.mp3",
      cover_art_url: "https://ie.wampi.ru/2023/02/24/VESNA.jpg" 
    },
  
  ]
});

window.onkeydown = function(e) {
  return !(e.keyCode == 32);
};

  $(".down-header").on("click", function() {
    console.log('true');
    /*
      Sets the list's height;
    */
    $("#list").css(
      "height",
      parseInt($("#flat-black-player-container").height()) - 135 + "px"
    );

    /*
      Slides down the playlist.
    */
    $("#list-screen").slideDown(500, function() {
      $(this).show();
    });

  /*
    Handles a click on the up arrow to hide the list screen.
  */
  $(".hide-playlist").on("click", function() {
    $("#list-screen").slideUp(500, function() {
      $(this).hide();
    });
  });

  /*
    Handles a click on the song played progress bar.
  */
  document
    .getElementById("song-played-progress")
    .addEventListener("click", function(e) {
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;

      Amplitude.setSongPlayedPercentage(
        parseFloat(x) / parseFloat(this.offsetWidth) * 100
      );
    });

  $('img[amplitude-song-info="cover_art_url"]').css(
    "height",
    $('img[amplitude-song-info="cover_art_url"]').width() + "px"
  );
});

$(window).on("resize", function() {
  $('img[amplitude-song-info="cover_art_url"]').css(
    "height",
    $('img[amplitude-song-info="cover_art_url"]').width() + "px"
  );
});

//Взято отсюда https://codepen.io/impressivewebs/pen/LeEgyj