document.addEventListener('DOMContentLoaded', function() {
    // Hide splash screen after a delay
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    }, 2000); // Adjust delay as needed

    // Event listener for channel selection
    const channels = document.querySelectorAll('.channel');
    channels.forEach(channel => {
        channel.addEventListener('click', function() {
            const streamUrl = this.getAttribute('data-url');
            openInVLC(streamUrl);
        });
    });
});

// Function to open the stream in VLC
function openInVLC(url) {
    // VLC external protocol (for local desktop applications)
    // This example assumes VLC is installed and accessible via the external protocol handler.
    const vlcUrl = `vlc://${url}`;

    // Open VLC with the stream URL
    window.location.href = vlcUrl;
}