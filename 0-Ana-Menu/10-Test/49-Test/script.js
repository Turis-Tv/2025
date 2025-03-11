const videoPlayer = document.getElementById('hls-player');
const playlistItems = document.querySelectorAll('#playlist li');

if(Hls.isSupported()) {
	const hls = new Hls();
	hls.loadSource(playlistItems[0].dataset.url);
	hls.attachMedia(videoPlayer);
	hls.on(Hls.Events.MANIFEST_PARSED,function() {
		videoPlayer.play();
	});
	playlistItems.forEach((item, index) => {
		item.addEventListener('click', () => {
			videoPlayer.poster = item.querySelector('img').src;
			hls.loadSource(item.dataset.url);
			hls.attachMedia(videoPlayer);
			hls.on(Hls.Events.MANIFEST_PARSED,function() {
				videoPlayer.play();
			});
			playlistItems.forEach((item) => {
				item.classList.remove('active');
			});
			item.classList.add('active');
		});
	});
} else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
	videoPlayer.src = playlistItems[0].dataset.url;
	videoPlayer.poster = playlistItems[0].querySelector('img').src;
	videoPlayer.addEventListener('loadedmetadata',function() {
		videoPlayer.play();
	});
	playlistItems.forEach((item, index) => {
		item.addEventListener('click', () => {
			videoPlayer.src = item.dataset.url;
			videoPlayer.poster = item.querySelector('img').src;
			videoPlayer.addEventListener('loadedmetadata',function() {
				videoPlayer.play();
			});
			playlistItems.forEach((item) => {
				item.classList.remove('active');
			});
			item.classList.add('active');
		});
	});
}

playlistItems[0].classList.add('active');