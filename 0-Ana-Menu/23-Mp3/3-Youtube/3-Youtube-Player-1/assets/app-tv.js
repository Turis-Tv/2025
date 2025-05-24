const channelsData = [
    { 
        id: "tvn",
        name: "TVN",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://janus-tv.senado.cl/embed.php#1611498286"
    },
    { 
        id: "24horas",
        name: "24 Horas",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/5bFPd0wR8C8?autoplay=1&mute=1"
    },
    { 
        id: "tvchile",
        name: "TV Chile",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://mdstrm.com/live-stream/533adcc949386ce765657d7c?jsapi=true&autoplay=true"
    },
    { 
        id: "13",
        name: "13",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://mdstrm.com/live-stream/5f2d60b6e6e8357a6a4d8b4d?access_token=d8szeAOrFLsHNaymSrV3m7hIQl439ypqiZwlz1y4Q3YBqtAUy1RWKB661drnK2ZOlzoTjdcBmz0&autoplay=true"
    },
    { 
        id: "t13",
        name: "T13",
        visibilidad: "",
        source: "https://www.youtube.com/embed/f2t3330_mBk?autoplay=1&mute=1"
    },
    
    { 
        id: "meganoticias",
        name: "MEGA Noticias",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/Q-SA9a3MAmo?autoplay=1&mute=1"
    },
    { 
        id: "chv",
        name: "Chilevisión",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://mdstrm.com/live-stream/5c928b7f6d6f41084bdae898?jsapi=true&autoplay=true&access_token=ZzIaOnJDfSzmHe3KT6Rxyh2wiXlzP5EG8OStbtlz2o1HNNI3JhEJf34UmsoVjtfKLOqBtBlc8HB&custom.categoria_prontus=senal-online&custom.dfpLanguage=es&custom.dfpCountry=cl&custom.dfpShowName=senal-online&custom.dfpVidId=&custom.dfpURLEncoded=https%3A%2F%2Fwww.chilevision.cl%2Fsenal-online&custom.dfpRandomNumber=9186199867&custom.origen=chilevision&custom.iu=%2F99911224%2Fchilevision%2Flive%2Fsenal-online%2Flive&custom.app=false&custom.cust_params=sect%253Dlive%2526sub%253Dsenal-online%2526show%253Dsenal-online%2526videotype%253Dlive%2526cat%253Dlive%2526vidid%253D%2526site%253Dchilevision%2526app%253Dfalse%2526theme%253Dge&custom.amp=false&custom.appname="
      },
    { 
        id: "cnnchile",
        name: "CNN Chile",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/d-USMe-Rnsw?autoplay=1&mute=1"
      },
    { 
        id: "tvmas",
        name: "TV+",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://tv-trt1.medya.trt.com.tr/master_720.m3u8"
      },
      { 
        id: "mediabanco",
        name: "Media Banco",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/lHarJeh2yNY?autoplay=1&mute=1"
      },
      { 
        id: "ucv",
        name: "UCV",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://rudo.video/live/ucvtv2"
      },
      { 
        id: "tveduca",
        name: "TV Educa",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://mdstrm.com/live-stream/5aaabe9e2c56420918184c6d?jsapi=true&autoplay=true&controls=true&volume=100&player=57f40bb4dc5b9f3075c49cfe&access_token=&mse=true&custom.preroll=&custom.overlay="
      },
      { 
        id: "stgotv",
        name: "STGO TV",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://stv.janus.cl/front/embed.html?autoplay=1&mute=1"
      },
      { 
        id: "biobio",
        name: "Radio Bio bio",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/bbtv?volume=0&mute=1"
      },
      { 
        id: "cooperativa",
        name: "Radio Cooperativa",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/coopetv?volume=0&mute=1"
      },
      { 
        id: "tvu",
        name: "TVU",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/tvu?volume=0&mute=1"
      },
      { 
        id: "c9",
        name: "C9",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/c9?volume=0&mute=1"
      },
      { 
        id: "uatv",
        name: "UATV",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/uatv"
      },
      { 
        id: "tvsenado",
        name: "TV Senado",
        visibilidad: "ocultar",
        tipo: "video",
        source: "https://janus-tv.senado.cl/embed.php#1611498286"
      },
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="channel-name"><h4>${channel.name}</h4><a target="_BLANK" href="${channel.source}"><span>Ver en otra ventana</span></a></div>
      </div>
    `;
  }
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  