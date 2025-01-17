document.querySelectorAll('.channel-button').forEach(button => {
    button.addEventListener('click', function() {
        const streamUrl = this.getAttribute('data-url');
        launchVLC(streamUrl);  // Launch VLC with the selected channel
    });
});

function launchVLC(url) {
    try {
        window.open(`vlc://${url}`);
    } catch (e) {
        alert(`Cannot launch VLC automatically. Please copy the URL and open it manually in VLC: ${url}`);
    }
}