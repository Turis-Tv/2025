const player = videojs('player');
let channels = [];

function playLive() {
    const liveUrl = document.getElementById('live-url-input').value;
    if (liveUrl) {
        player.src({ type: 'application/x-mpegURL', src: liveUrl });
        player.play();
    } else {
        alert('Veuillez entrer le lien de diffusion en direct');
    }
}
const m3uUrl = 'https://raw.githubusercontent.com/Turis-Tv/Turis-2025/refs/heads/main/Ana-Dosya/20-Test-Sayfasi/15-Test-Player/1-Ulusal/Ulusal.m3u';
        const recentChannels = [];

        fetch(m3uUrl)
            .then(response => response.text())
            .then(data => {
                const channels = parseM3U(data);
                displayChannels(channels);
            });

        function parseM3U(data) {
            const lines = data.split('\n');
            const channels = [];

            let currentChannel = {};

            lines.forEach(line => {
                line = line.trim();
                if (line.startsWith('#EXTINF:')) {
                    const info = line.split(',');
                    currentChannel.name = info[1];
                    currentChannel.logo = extractLogo(line);
                } else if (line && !line.startsWith('#')) {
                    currentChannel.url = line;
                    channels.push(currentChannel);
                    currentChannel = {};
                }
            });

            return channels;
        }

        function extractLogo(line) {
            const logoMatch = line.match(/tvg-logo="(.+?)"/);
            return logoMatch ? logoMatch[1] : '';
        }

        function displayChannels(channels) {
            const channelList = document.getElementById('channels');
            const recentChannelsWrapper = document.getElementById('recent-channels');

            channels.forEach(channel => {
                // قائمة القنوات العمودية
                const div = document.createElement('div');
                div.className = 'channel-item';
                div.innerHTML = `<div class="details">
                                    <img src="${channel.logo || 'https://via.placeholder.com/100'}" alt="Logo">
                                    <span>${channel.name}</span>
                                 </div>`;
                div.addEventListener('click', () => {
                    playChannel(channel.url);
                    addToRecentChannels(channel);
                });

                channelList.appendChild(div);
            });

            // شريط القنوات الأخيرة
            new Swiper('.swiper-container', {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }
            });
        }

        function playChannel(url) {
            const player = videojs('player');
            player.src({ src: url, type: 'application/x-mpegURL' });
            player.play();
        }

        function addToRecentChannels(channel) {
            const recentChannelsWrapper = document.getElementById('recent-channels');
            
            // تحقق من أن القناة ليست موجودة بالفعل في القائمة الأخيرة
            if (!recentChannels.some(item => item.name === channel.name)) {
                recentChannels.push(channel);

                const div = document.createElement('div');
                div.className = 'swiper-slide';
                div.innerHTML = `<img src="${channel.logo || 'https://via.placeholder.com/100'}" alt="Logo">
                                 <span>${channel.name}</span>`;
                div.addEventListener('click', () => {
                    playChannel(channel.url);
                });

                recentChannelsWrapper.appendChild(div);
            }
        }
  
  (function () {
  var video = document.querySelector('#player');

  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://fl2.moveonjoy.com/HBO/index.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
  }
  
 
  
  
  plyr.setup(video);
})();