function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [  'SdVmO8QvlqU', 'mXv8QiLv6_E', 'lXu1_FKAAHM', 'Bmx_r35NGHo', 'sml27dh2G3I', 'fvmIfQtuyxM', 'elWWWCAWFXw', '_BhgFGH777Y', 'RfXVEvx83gY',
 'yGVdohDTbZY', '2Hup3PL3sGw','BKceGVcESng','h7PtkXHFuTc','XrhnVlyd53A','Wq4Y4xjwfBM','eAf_u9EyTy4','e3vpuAanJ0A','0UGK_ZzICRs','GoP8HZLYimk',
'n38gmNKMEZo','WKuD43ibwAI','XbGOeb6qamk','TfP66L0UNjk','8YzI94msuA8','EktJ7v19quc','_eiJOduTNSo','chvdvyeGvr0','sjChYoNyV-g','TB5CSZjwN20','jEFSPXQFKWs',
'tMsvLAcUc6E','W0e4kWhy3Tg','QqemuA-qA3Q','271BQkYw1Qs','PKSxKzZZBg4','0AR7EpNBJdw','JsR7Jco4Trs','zrM5YLHNWtc','tH7TwcYYHfI','uhpyeqe9TfI','T34FPMF4vns',
'mgFXByk8GPM','IrdE_KH2hAc','2YrWwDfdLG0','rerTycczBRI','gDqS7Ji-mGg','zUy_YvXE5KU','sno7zDLeoIY','DM07GEUR7Fk','iSM6ruLIVnI','aavu3nBKTqI',
'6TsuYevQ_g8','UhgQj4ti2xk','vRD96jBymJs','LnvqIiGeuyc','oL8Z3gobkLE','dXHE2dP-rk0','RWymqp4PkTw','cKG-yCVBGSA','7tLbw3X_A7I','Ha2PAy1G1yo'
 ];







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