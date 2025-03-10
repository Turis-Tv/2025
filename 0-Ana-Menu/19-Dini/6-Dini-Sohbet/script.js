function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [  'jTuS__phhwo','iKU9G__VR4w','8Z5jpVDt_Uw','m1P0gtTlLjA','UAvntmmmyYY','qz0GTt6tqG8','2OP9RNAtgjM','eROLWAQf3v8','LuXNSS8LKEE','5LzQb6uiBCM','EajLpp73tmM','m4xqkgak6yw'
,'URjb9T7UZ-8','RqIYOs2wfzw','l791xzfUtd8','ljAMQgOh66o','qIrt_pFOiDw','478iLJJFvhA','7ZywXJL5JnI','IxwRW0pLSYs','FXK0qjZQgiE','VHQd3WJlr3c','1UP23pBD3nw',
'H-KmtandB-8','w3EWT1D8ZJY','ztNZNsblr8k','nv4XU-gFOYU','GeGjaMHb3Xc','n3w_owR4aNY','Aa-DbHulAh8','DbSB33kuKpM','oG4gr6ow3aA','dwxvUIF_nz8','RJ-SN4n0YTg','AsU5Ie54lW8'
,'1q3W7rkKuXc','N0cqtfsFouw','-06GrnRJ7zw','JF9eBfDKgow','2Ss7XBIG-Jg','JVusikXcJfY','RhFiBScWzqU','R0n5IPgjIu4','9kGfZEvmSdo','6eO5Ax31R_4','clyzdzGBI10',
'UYkvhmwS7Zw','_s3GnqzgQHM','Pq27i9GiTYM','IDjope8Kr9Q','gCAR8PJfDYI','t0sl5H7nph4','7hupIRJ6W8Y','NZ9RxFSwick','7hVQa7JFjTw','OvwTPbvWGMY','UCZTxDshoi8',
'7-pc6II2nX0','2vY28NaxF5Y','Kj2HMitxL-E','Z5b6zk6Wv6k','6GtA_mDqWVE','uttHxKoRKnE','YzeS3IbbPcI','w7kMZSPfzV4','rE2k3Sto7xE','FRqAH-Gz2Y8','mIwWZxTyVVM','Zr4XyXzGVZ0'
,'of3CMdBOjKA','eyMv-NDKRtM','Q7LqMTg7dDA','SquusN-t_G8','QQ8hUnLqIDo','IQBJjs0L9Kw','G61ymgTlsCo','4bs5bRuH4xI','xsoayHAzYso','jgGEPPsdkeM','t-MmBxilDas','rI_33N4dWqA'  ];







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