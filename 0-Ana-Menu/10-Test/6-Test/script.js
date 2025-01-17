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
            openInLuaPlayer(streamUrl);
        });
    });
});

// Function to open the stream in Lua Player
function openInLuaPlayer(url) {
    // Lua Player external protocol (for local desktop applications)
    // This example assumes Lua Player is installed and accessible via the external protocol handler.
    const luaUrl = `lua://${url}`;

    // Open Lua Player with the stream URL
    window.location.href = luaUrl;
}