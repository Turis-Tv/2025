function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [ '0rTWgc8jCTg', 'oPVFkiHnfSU', 'RbCmCOGeHiY', 'bjk0CPXAPA4', 'UPxJLZ7iq6I', 'fXrujo59gas', 'chnSNa5qDwo', 'Szo1if1_pOg', 'Bmj_RTME4sc', 'eWh7l5XkRAI', 'IQBSQQR2j0k'
,'VamMCPzh3F0','_6_TuuKQA4M','TI7ud3WjiIs','rJ-LkiLeFzk','Oh7BWw0PpMg','ZbIAK-Q9wOY','TdwBuha5Xn8','ODKV1NLENFk','A6vmLEyKIAo','NIK800qURq8','t8j0hgB1zSE'
,'WSWlFvfngMA','ls3rOhI_zcw','y3qWJmofya8','NmmNNgsR0ts','BhpwRr1Y6Zg','LYF-i8owSwY','NaXv5rZ2iRY' ];
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