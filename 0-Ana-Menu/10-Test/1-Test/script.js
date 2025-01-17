// Função para criar e adicionar um link de canal na sidebar
function addChannelLink(name, url) {
    const channelListItems = document.getElementById('channelListItems');
    const channelListItem = document.createElement('li');
    const channelLink = document.createElement('a');
    channelLink.textContent = name;
    channelLink.href = '#';
    channelLink.onclick = function () {
        playChannel(url);
    };
    channelListItem.appendChild(channelLink);
    channelListItems.appendChild(channelListItem);
}

// Função para limpar a sidebar antes de carregar uma nova playlist
function clearChannelList() {
    const channelListItems = document.getElementById('channelListItems');
    while (channelListItems.firstChild) {
        channelListItems.removeChild(channelListItems.firstChild);
    }
}

// Função para carregar a playlist de exemplo
function loadExamplePlaylist() {
    const playlistUrlInput = document.getElementById('playlistUrl');
    playlistUrlInput.value = 'https://raw.githubusercontent.com/Turis-Tv/Turis-Tv-m3u/refs/heads/main/1-ulusal.m3u';
    loadCustomPlaylist();
}

// Carregar o canal fixo
const fixedChannelUrl = 'https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8';
playChannel(fixedChannelUrl);

// Função para carregar uma playlist customizada fornecida pelo usuário
function loadCustomPlaylist() {
    clearChannelList(); // Limpar a sidebar antes de carregar a nova playlist
    const playlistUrlInput = document.getElementById('playlistUrl');
    const customPlaylistUrl = playlistUrlInput.value;
    fetch(customPlaylistUrl)
        .then(response => response.text())
        .then(playlistText => parsePlaylist(playlistText))
        .catch(error => console.error('Erro ao carregar a playlist:', error));
    return false; // Prevenir envio do formulário
}

let playerInstance; // Declare a variável aqui para evitar o erro

// Função para reproduzir o canal com o player correto
function playChannel(url) {
    fetch(url)
        .then(response => response.text())
        .then(channelText => {
            const outputType = url.endsWith('.m3u8') ? 'hls' : 'other'; // Verificar se é HLS (.m3u8) ou outro tipo
            let codec = 'other';
            
            // Verificar o codec do canal (sempre com extensão .m3u8)
            if (channelText.includes('#EXT-X-STREAM-INF')) {
                codec = 'h264-aac'; // Pode variar conforme a playlist
            } else if (channelText.includes('CODECS="avc1')) {
                codec = 'h265-aac'; // Pode variar conforme a playlist
            }

            // Chamar o player apropriado com o outputType e codec identificados
            if (outputType === 'hls') {
                playHLSChannel(url, codec);
            } else {
                // Adicionar suporte para outros tipos de output, se necessário
                console.error('Tipo de output não suportado:', outputType);
            }
        })
        .catch(error => console.error('Erro ao obter informações do canal:', error));
}

// Função para reproduzir o canal HLS com o Clappr Player
function playHLSChannel(url, codec) {
    const playerContainer = document.getElementById('playerContainer');
    playerContainer.innerHTML = ''; // Limpar o player atual

    playerInstance = new Clappr.Player({
        source: url,
        parentId: '#playerContainer',
        autoPlay: true,
        class: 'player',
        width: '100%',
        height: '100%',
        mimeType: `application/vnd.apple.mpegurl; codecs="${codec}"`,
    });
}

// Função para analisar a playlist M3U e extrair nomes e URLs dos canais
function parsePlaylist(playlistText) {
    const lines = playlistText.split('\n');
    let currentChannelName = '';
    let currentChannelURL = '';

    for (const line of lines) {
        if (line.startsWith('#EXTINF:')) {
            // Extrair o nome do canal da linha
            currentChannelName = line.split(',')[1];
        } else if (line.trim() !== '') {
            // Supor que qualquer linha não vazia sem "#EXTINF" é o URL do canal
            currentChannelURL = line.trim();
            addChannelLink(currentChannelName, currentChannelURL);
        }
    }
}