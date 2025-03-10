function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [  'hnuL62sUdHc','K00Qx3HZuyo','5ocneLgUGBA','HX5SiLDwiU0','VNEitgv8SUM','ef0L0MqmeEI','hQXsSKTso10','s0eMf6GqRmc','NFqjAkB_rTE','BQXTip1VLBs'
,'zSQN3ykl7Ds','J985F89kkes','FZiWK-JbrKw','dkw4UvDOegY','XOd2_HxGA0k','Sv77rCE_Y1g'   ];







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