function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [

 {
      name:"peygamberimiz-sav-seyyidul-istigfar-duasi ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237943738.m4a ",
      duration:""
    },
 {
      name:"Hz. Nuh, çağlar öncesinde neler söylemişti ",
      file:"https://audios.tmgrup.com.tr/fkr/mp3/2023/03/19/872c44cd-d18e-41be-93a5-22b392513861.m4a ",
      duration:""
    },
 {
      name:" dileklerin-semda-karsilik-buldugu-gecedir-bu-gece",
      file:" https://audios.tmgrup.com.tr/fkr/mp3/2023/03/06/2343e12f-133e-4122-a5a5-c57d233f3c46.m4a",
      duration:""
    },
 {
      name:" denizde-duzen-bozuldu-ayeti-bize",
      file:"https://audios.tmgrup.com.tr/fkr/mp3/2023/03/02/34ee4fa9-883f-4f8e-ad0d-080f38b8a03c.m4a ",
      duration:""
    },
 {
      name:" musibetler-karsisinda-peygamberimizin-buyuk-sabri",
      file:"https://audios.tmgrup.com.tr/fkr/mp3/2023/02/15/9a4ced62-40db-437d-99e0-6ee145f641ce.m4a ",
      duration:""
    },
 {
      name:" deprem-felaketini-vkia-suresinin-yardimiyla-anlamak",
      file:"https://audios.tmgrup.com.tr/fkr/mp3/2023/02/12/12831940-c6dc-4ef0-b66b-5f6bd409dfc4.m4a ",
      duration:""
    },
 {
      name:"felaketler-de-sinanacagimiz-dunya-sinavlarindan-biridir ",
      file:" https://audios.tmgrup.com.tr/fkr/mp3/2023/02/10/437807a0-5e32-49b8-a4ea-ee14bbe2539b.m4a",
      duration:""
    },
 {
      name:"kurana-en-buyuk-saygisizligi-yapan-alcak-neyin-pesinde ",
      file:"https://audios.tmgrup.com.tr/fkr/mp3/2023/02/04/088d6cbb-9ad6-4f29-8450-99158147481f.m4a ",
      duration:""
    },
 {
      name:" peygamber-efendimiz-sav-namazda-ve-evde-okumayi-tavsiye-ettigi-dua",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238636009.m4a ",
      duration:""
    },
 {
      name:"sikinti-icinde-olan-bir-kimsenin-okumasini-tavsiye-ettigi-dua ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238591671.m4a ",
      duration:""
    },
 {
      name:" korku-duygusundan-korunmak-icin-okunmasini ",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238522413.m4a",
      duration:""
    },
 {
      name:" sikinti-veya-siddet-halinde-okunmasini",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238485652.m4a ",
      duration:""
    },
 {
      name:" sabahladigi-ve-aksamladigimiz-zaman-okunmasini",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238440825.m4a ",
      duration:""
    },
 {
      name:"hz-hasan-ve-hz-huseyin-icin ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238395061.m4a ",
      duration:""
    },
 {
      name:" basa-gelebilecek-musibetlerden-korunmak",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238365577.m4a",
      duration:""
    },
 {
      name:"yilin-ilk-turfanda-meyvesi-kendisine-sunuldugunda ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238312755.m4a ",
      duration:""
    },
 {
      name:" borclu-olan-kimsenin-okumasini-tavsiye-ettigi",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238271328.m4a ",
      duration:""
    },
 {
      name:"ezan-okunduktan-sonra-okunmasini-tavsiye-ettigi ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238230188.m4a ",
      duration:""
    },
 {
      name:"zor-bir-isle-karsilastiginda-okudugu ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238191470.m4a ",
      duration:""
    },
 {
      name:" yolculuga-cikarken ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238143140.m4a ",
      duration:""
    },
 {
      name:"bir-kisinin-cenaze-namazini-kildirirken ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238100964.m4a ",
      duration:""
    },
 {
      name:"basina-sikintili-ve-uzuntu-veren-bir-is-geldiginde-okudugu ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675238041092.m4a ",
      duration:""
    },
 {
      name:"hasta-ziyaretinde ",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237988441.m4a",
      duration:""
    },
 {
      name:"sabah-namazinin-sunnetini-kildiktan-sonra ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237900258.m4a ",
      duration:""
    },
 {
      name:" gece-ibadeti-icin-kalktiginda ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237836591.m4a ",
      duration:""
    },
 {
      name:" uyuyamayan-ve-uykusuzluk-ceken-birine ",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237793965.m4a",
      duration:""
    },
 {
      name:" yatagina-girerken-ve-uykuya-dalmadan-once ",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237736138.m4a",
      duration:""
    },
 {
      name:" elbisesini-cikardigi-zaman ",
      file:"https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237691085.m4a ",
      duration:""
    },
 {
      name:"orucunu-acarken-okudugu  ",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237652973.m4a",
      duration:""
    },
 {
      name:" aynaya-bakarken ",
      file:" https://audios.tmgrup.com.tr/724_dinle/2023/02/01/1675237427812.m4a",
      duration:""
    },
 {
      name:" hz-musanin-ikinci-hicreti-ve-bu-esnada-yasadiklari ",
      file:"https://audios.tmgrup.com.tr/fkr/mp3/2022/08/27/c956368c-faac-4af9-8dfd-c316dc13b70c.m4a ",
      duration:""
    },
 {
      name:" muhacir-hz-ltun-as-hayatindan-alinacak ",
      file:" https://audios.tmgrup.com.tr/fkr/mp3/2022/08/15/ec90796f-861e-4914-a727-e9250f67bbc5.m4a",
      duration:""
    },



 {
      name:" haci-olmak-haci-kalmak-ve-haci-olarak-ugurlanmak ",
      file:" https://audios.tmgrup.com.tr/fkr/mp3/2022/07/29/55d2c00c-5c9a-4123-af61-a23cc2b3b77b.m4a",
      duration:""
    },


 {
      name:"Cevşen-ül Kebir ",
      file:"https://www.hizmetvakfi.net/sesler/cevsenul-kebir.mp3 ",
      duration:""
    },

    {
      name:"tahmIdIye ",
      file:"https://www.hizmetvakfi.net/sesler/TAHMIDIYE.mp3 ",
      duration:""
    },


    {
      name:" cevsenul-kebir",
      file:" https://www.hizmetvakfi.net/sesler/cevsenul-kebir.mp3",
      duration:""
    },




 {
      name:"  ",
      file:" ",
      duration:""
    }

  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }