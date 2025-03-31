Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  songs: [
    {
      name: "Ах,как вы прекрасны,мадам",
      artist: "Григорий Герасимов",
      album: "",
      url: "https://mp3bob.ru/download/muz/Grigory_Gerasimov_-_Akh__kak_krasivy_vy__Madam.mp3",
      cover_art_url: "https://avatars.mds.yandex.net/i?id=536f4325ecf23bd48fb31f296de16ae8a28d0919-11008180-images-thumbs&n=13"
    },
    {
      name: "А ты прости меня",
      artist: "Михаил Кармаш",
      album: "",
      url: "https://monfon.org/dl/378401936/Mikhail_Karmash_-_A_ty_prosti_menya_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://vjoy.cc/wp-content/uploads/2020/12/409149f116ad4a8880e0755e8355931f.jpg"
    },
    {
      name: "Заметелена",
      artist: "Михаил Кармаш",
      album: "",
      url: "https:///monfon.org/dl/1963157190/Mikhail_Karmash_-_Zametelena_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://amiel.club/uploads/posts/2022-03/1647618292_6-amiel-club-p-krasivaya-lyubov-kartinki-8.jpg"
    },
    {
      name: "А мне бы встать",
      artist: "Михаил Кармаш",
      album: "",
      url: "https:///monfon.org/dl/1275417180/Mikhail_Karmash_-_A_mne_by_vstat_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://pw.artfile.me/wallpaper/12-09-2014/650x433/raznoe-muzhchina-zhenschina-paren-lyubov-865245.jpg"
    },
    {
      name: "Мы с тобой",
      artist: "Михаил Кармаш",
      album: "",
      url: "https:///monfon.org/dl/1931165309/Mikhail_Karmash_-_My_s_tobojj_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://sonko-mosreg.ru/800/600/http/i.pinimg.com/originals/96/04/81/960481d0f87f306dbfc8c191ef2712fe.png"
    },
    {
      name: "Я на Родине",
      artist: "Михаил Кармаш",
      album: "",
      url: "https:///monfon.org/dl/1268238743/Mikhail_Karmash_-_Zdravstvujj_Altajj_ya_na_rodine_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://masterpiecer-images.s3.yandex.net/ffd7726e8a1211ee9febf6c574779d3e:upscaled"
    },
    {
      name: "Я буду жить любя",
      artist: "Михаил Кармаш",
      album: "",
      url: "https:///monfon.org/dl/312800277/Mikhail_Karmash_-_MIKHAIL_KARMASH_-_YA_BUDU_ZHIT_LYUBYA_krasivaya_pesnya_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://s1.1zoom.ru/b7259/773/Sunrises_and_sunsets_Men_511512_600x800.jpg"
    },
    {
      name: "Женщина дарованная небом",
      artist: "Артур Степанян",
      album: "",
      url: "https:///monfon.org/dl/482327322/Artur_Stepanyan_-_ZHenshhina_darovannaya_nebom_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://kartin.papik.pro/uploads/posts/2023-06/1687655738_kartin-papik-pro-p-kartinki-zakata-na-more-i-devushka-s-parne-48.jpg"
    },
    {
      name: " Цените время",
      artist: "Артур Степанян",
      album: "",
      url: "https:///monfon.org/dl/425046160/Artur_Stepanyan_-_Cenite_vremya_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://99px.ru/sstorage/56/2021/11/image_561511211854483178172.jpg"
    },
    
    {
      name: "Нет пути назад",
      artist: "Ал.Малинин",
      album: "",
      url: "https:///monfon.org/dl/1028720769/Aleksandr_Malinin_-_Net_puti_nazad_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://img.freepik.com/free-photo/trans-couple-spending-quality-time-together_23-2149344345.jpg"
    },
     {
      name: "Ты моя первая любовь",
      artist: "Михаил Кармаш",
      album: "",
      url: "https:///monfon.org/dl/562070261/Mikhail_Karmash_-_Ty_moya_pervaya_lyubov_(ruf.muzikavsem.org).mp3",
      cover_art_url: "https://img.freepik.com/free-photo/trans-couple-spending-quality-time-together_23-2149344345.jpg"
    },
    {
      name: "Буду помнить",
      artist: "Ал.Солодников",
      album: "",
      url: "https://static.tunnel.ru/media/audio/2016-09/post_comment/207442//song.mp3",
      cover_art_url: "https://img1.liveinternet.ru/images/attach/d/4/161/933/161933299_Muzh_i_ZHensch.jpg"
    }
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
/* взято отсюда https://codepen.io/impressivewebs/pen/LeEgyj */