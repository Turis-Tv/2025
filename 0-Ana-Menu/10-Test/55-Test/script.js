document.addEventListener('DOMContentLoaded', () => {
    const player = videojs('video');
    const buttons = document.querySelectorAll('#controls button');

    const channels = {
        1: 'https://vod.mycamtv.net/9038.m3u8',
        2: 'https://vod.mycamtv.net/9038.m3u8',
        3: 'http://stream.tvcdn.net/muzik/muzik-tv.m3u8'
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const channel = button.getAttribute('data-channel');
            const url = channels[channel];

            player.src({ src: url, type: 'application/x-mpegURL' });
            player.play();
        });
    });
});