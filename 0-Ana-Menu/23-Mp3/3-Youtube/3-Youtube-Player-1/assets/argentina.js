const channelsData = [
    
    
    { 
      id: "Ceylan",
      name: "Ceylan",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/vZmJnYBCPHs?si=v62RphPb6hjVi4AF"
    },
    { 
        id: "İbrahim Tatlıses",
        name: "İbrahim Tatlıses",
        visibilidad: "",
        source: "https://www.youtube.com/embed/4DOMcjVNq-w?si=uK4glVvOqkN3fu4x"
    },
    { 
        id: "Gözleri Bela",
        name: "Gözleri Bela",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/1xn3nEvc5Oc?si=wJW3VXSoqTdO3oQx"
    },
    { 
        id: "Ceylan Ft. Alişan ",
        name: "Ceylan Ft. Alişan ",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/QkYBMuB6sco?si=T7esQMUYnoj-EcUH"
    },
    { 
        id: "Ceylan Ft. Alişan",
        name: "Ceylan Ft. Alişan",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/lzmjXDvK4EA?si=gkAUySMI7ZP3_l6t"
    },
    { 
        id: "Aşkından Yanayım Mı",
        name: "Aşkından Yanayım Mı",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/3WieehU8a8w?si=F9UsUVtZUA1TMlyf"
      },/*
      { 
        id: "Sen Affetsen Ben Affetmem",
        name: "Sen Affetsen Ben Affetmem",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/BTZp5qfSJNg?si=08hh9pEwpVTGWVpy"
      },
      { 
        id: "biobio",
        name: "Bio bio",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/kwVRXc6AG3M?autoplay=1&mute=1"
      },{ 
        id: "copano",
        name: "Copano",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/M10BmZ__V7Q?autoplay=1&mute=1"
      },/*
      { 
          id: "adnradio",
          name: "ADN Radio",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/DwiPDjo2Bo8?autoplay=1&mute=1"
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
     /* { 
        id: "uatv",
        name: "UATV",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/uatv"
      },
      
      { 
        id: "itvpatagonia",
        name: "ITV Patagonia",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/k_O0QiiyIKU?autoplay=1&mute=1"
      },*/
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="channel-name"><h4>${channel.name}</h4><a target="_BLANK" href="${channel.source}"><span class="new-window">Turis Tv</span><img width="16px" src="assets/img/Icon material-open-in-new.svg"></a></div>
      </div>
    `;
  }
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  