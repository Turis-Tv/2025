Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  songs: [
    {
      name: "Я люблю тебя",
      artist: "Борис Леви",
      album: "",
      url:
        "https://img0.liveinternet.ru/images/attach/d/3//13450/13450283_boris_levi__ya_lyublyu_tebya.mp3",
      cover_art_url: "https://im.wampi.ru/2023/03/17/PARA6.jpg"
    },
    {
      name: "Одно сердце на двоих",
      artist: "Рада Рай",
      album: "",
      url:
        "https://static.tunnel.ru/media/audio/2016-09/post_comment/416547//song.mp3",
      cover_art_url: "https://ie.wampi.ru/2023/03/17/PARA2.jpg"
    },
    {
      name: "Любимая",
      artist: "Андрей Бандера",
      album: "",
      url:
        "https://static.tunnel.ru/media/audio/2016-09/post_comment/53813//song.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081136/1.jpg"
    },
    {
      name: "Никто тебя не любит так,как я",
      artist: "Валерий Власов",
      album: "",
      url:
        "https://img0.liveinternet.ru/images/attach/d/2//6116/6116608_valeriy_vlasov__nikto_tebya_ne_lyubit_tak_kak_ya.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081147/2.jpg"
    },
    {
      name: "Ты моя",
      artist: "Ярослав Дронов",
      album: "",
      url:
        "https://img1.liveinternet.ru/images/attach/d/3//13449/13449989_shaman__tuy_moya.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081185/3.jpg"
    },
    {
      name: "Единственная женщина",
      artist: "Константин Дерр",
      album: "",
      url:
        "https://img1.liveinternet.ru/images/attach/d/3//13447/13447766_konstantin_derr__edinstvennaya_zhenschina.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081188/9.jpg"
    },
    {
      name: "Если любишь, докажи",
      artist: "Мурат Тхаголегов",
      album: "",
      url:
        "https://img0.liveinternet.ru/images/attach/d/3//13450/13450278_murat_thagalegov__esli_lyubish_dokazhi.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081206/6.jpg"
    },
    {
      name: "Цветы без повода",
      artist: "И.Круг и А.Брянцев",
      album: "",
      url:
        "https://static.tunnel.ru/media/audio/2018-01/post_comment/929721//i.krug---tsvetyi-bez-povoda.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081212/7.jpg"
    },
    {
      name: " Я тебя люблю",
      artist: "В.Асмолов",
      album: "",
      url:
        "https://static.tunnel.ru/media/audio/2016-06/post_comment/58638//at280461275.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081218/10.jpg"
    },

    {
      name: "Любимый мой",
      artist: "Юта",
      album: "",
      url:
        "https://img1.liveinternet.ru/images/attach/d/4//13475/13475467_muzmo.mp3",
      cover_art_url: "https://www.yapfiles.ru/files/3081224/4.jpg"
    }
  ]
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};

$(".down-header").on("click", function () {
  console.log("true");
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
  $("#list-screen").slideDown(500, function () {
    $(this).show();
  });

  /*
    Handles a click on the up arrow to hide the list screen.
  */
  $(".hide-playlist").on("click", function () {
    $("#list-screen").slideUp(500, function () {
      $(this).hide();
    });
  });

  /*
    Handles a click on the song played progress bar.
  */
  document
    .getElementById("song-played-progress")
    .addEventListener("click", function (e) {
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;

      Amplitude.setSongPlayedPercentage(
        (parseFloat(x) / parseFloat(this.offsetWidth)) * 100
      );
    });

  $('img[amplitude-song-info="cover_art_url"]').css(
    "height",
    $('img[amplitude-song-info="cover_art_url"]').width() + "px"
  );
});

$(window).on("resize", function () {
  $('img[amplitude-song-info="cover_art_url"]').css(
    "height",
    $('img[amplitude-song-info="cover_art_url"]').width() + "px"
  );
});

/* взято отсюда https://codepen.io/impressivewebs/pen/LeEgyj */