// script.js

const videoPlayer = videojs('videoPlayer');
const channelSelect = document.getElementById('channelSelect');
const refreshChannelsButton = document.getElementById('refreshChannels');
const loadUrlButton = document.getElementById('loadUrl');
const m3uUrlInput = document.getElementById('m3uUrl');

let channels = [];

// Fetch M3U playlist and populate the channel list
async function fetchChannels(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();

        // Parse the M3U playlist
        const lines = text.split('\n');
        channels = [];
        channelSelect.innerHTML = ''; // Clear existing options

        lines.forEach(line => {
            if (line.startsWith('#EXTINF:')) {
                const parts = line.split(',');
                const channelName = parts[1].trim();
                channels.push({
                    name: channelName,
                    url: lines[lines.indexOf(line) + 1].trim()
                });
            }
        });

        // Populate channel select
        channels.forEach((channel, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = channel.name;
            channelSelect.appendChild(option);
        });

        // Select the first channel by default
        if (channels.length > 0) {
            channelSelect.value = 0;
            loadChannel(channels[0].url);
        }
    } catch (error) {
        console.error('Error fetching channels:', error);
    }
}

// Load selected channel
function loadChannel(url) {
    videoPlayer.src({ src: url, type: 'application/x-mpegURL' });
}

// Event listeners
channelSelect.addEventListener('change', (event) => {
    const channel = channels[event.target.value];
    if (channel) {
        loadChannel(channel.url);
    }
});

refreshChannelsButton.addEventListener('click', () => {
    const url = m3uUrlInput.value.trim();
    if (url) {
        fetchChannels(url);
    } else {
        alert('Please enter a valid M3U playlist URL.');
    }
});

loadUrlButton.addEventListener('click', () => {
    const url = m3uUrlInput.value.trim();
    if (url) {
        fetchChannels(url);
    } else {
        alert('Please enter a valid M3U playlist URL.');
    }
});

// Initial fetch with a default URL or empty
fetchChannels(''); // If you want to use a default URL, replace the empty string with the default URL.