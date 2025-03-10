function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [ 'ioolvhxI51g','J07zTStuNxE','EG8ewqGifDg','D7-4sBs-tWE','PmCpeu9uhv8','mj295h4LXww','8Lf2TrAxfi4','fxWAGh3pY1Q','UGibzJKopYE','KZrvr7Ov3R4','w6vz6NUc1XQ',
'Fh7bo0drgTg','oomThC6iowY','gHDiRd1sJSs','3KayFHl6Iqw','eY4CxpBNUbI','gFvxx1_UVlQ','Jd2ZVQtHw0M','l0-KuFSY89k','7aoIu0pkHwE','otfHT4Zsfo0','9aHJqWzdUxY','FJBvZrg251E',
'a2rE8tZW_Eg','z6EiEhg765g','DM5fR6yAr4Q','QKBCbHpBO60','lKISxZJrEDI','C8V-fvHIC-o','x2rXAo1-tb0','PElti8peSbU','QQfD9yK54Uc','tgNwqGqaF0Y','Gjam0C3OJ5Y','qWP_07TDYi0',
'By51YV0YNKQ','EIWDQSN2dQw','ZSmSvyZ3vdI','W-RwtsTXwVg','ftVSI3ayEEM','gsqwKlcexN4','ed9IgNEq8CI','70uqWAccXeM','SFjQm0UeIIY','5LmYa8s6b2A','2x-cRv0leNE','POV-BERTgmg'
,'D_uw-3oEzxQ','M_zAFIozf6g','D7-4sBs-tWE'  ];







  var playlistThumbs = document.querySelector('.playlist-thumbs');

  var videoThumbs;
  var currentIndex = 0;

  videos.forEach(function(id, i){
    var activeClass = '';
    if ( i === currentIndex ) {
      activeClass = 'is-active';
    }
    playlistThumbs.innerHTML += '<li class="video-thumb '+activeClass+'"><img src="https://img.youtube.com/vi/'+id+'/default.jpg"/></li>';
  });
  
  videoThumbs = document.querySelectorAll('.video-thumb');
  
  initPlayer(videos[currentIndex]);
  
  
  var player;
  function initPlayer(id) {
    console.log('initPlayer');
    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    player = new YT.Player('player', {
      height: '250',
      width: '340',
      videoId: id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  
  prevBtn.addEventListener('click', playPrevVideo);
  nextBtn.addEventListener('click', playNextVideo);

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log('onPlayerREady', event);
    event.target.playVideo();
  }
  
  function onPlayerStateChange(event) {
    if ( event.data === 0 ) { // video ended
      playNextVideo();
    }
  }

  function playNextVideo() {
    currentIndex += 1;
    player.loadVideoById(videos[currentIndex], 0, "large");
    for ( var i=0; videoThumbs.length > i; i++ ) {
      videoThumbs[i].className = videoThumbs[i].className.split('is-active').join('');
      videoThumbs[currentIndex].className += ' is-active';
    }
  }
  
  function playPrevVideo() {
    currentIndex -= 1;
    player.loadVideoById(videos[currentIndex], 0, "large");
    for ( var i=0; videoThumbs.length > i; i++ ) {
      videoThumbs[i].className = videoThumbs[i].className.split('is-active').join('');
      videoThumbs[currentIndex].className += ' is-active';
    }
  }
  
  
  
}