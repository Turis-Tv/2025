// Initialize Video.js player
const player = videojs('video-player');

// Global variables
let allContent = { live: [], movies: [], series: [] };
let epgData = {};
let categories = {};
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
let savedPlaylists = JSON.parse(localStorage.getItem('savedPlaylists')) || [];
let currentPlaying = null;
let currentSection = 'live';
let currentCredentials = null;
let epgUrl = null;

// Placeholder image for when logos are unavailable
const placeholderImage = "https://via.placeholder.com/150x200.png?text=No+Image";

// Language translations
const translations = {
    en: {
        title: "ELIPlayer",
        connect: "Connect to Your IPTV",
        m3uTab: "M3U URL",
        xtreamTab: "Xtream Codes",
        m3uUrl: "M3U URL:",
        m3uPlaceholder: "Enter your M3U URL",
        xtreamUrl: "Server URL:",
        xtreamUrlPlaceholder: "http://yourserver.com",
        xtreamUsername: "Username:",
        xtreamUsernamePlaceholder: "Your username",
        xtreamPassword: "Password:",
        xtreamPasswordPlaceholder: "Your password",
        connectButton: "Connect",
        liveTab: "Live TV",
        moviesTab: "Movies",
        seriesTab: "Series",
        liveSection: "Live TV",
        moviesSection: "Movies",
        seriesSection: "Series",
        catchUpSection: "Catch Up",
        favoritesSection: "Favorites",
        playlistsSection: "Playlists",
        search: "Search",
        searchCategory: "Search Category",
        all: "All",
        favorite: "Favorite",
        recentlyViewed: "Recently Viewed",
        playingDescription: "No description available.",
        catchUp: "Catch Up",
        addToFavorite: "Add to Favorite",
        settings: "Settings",
        changePlaylist: "Change Playlist:",
        changeLanguage: "Change Language:",
        refreshPlaylist: "Refresh Playlist:",
        clearHistory: "Clear History:",
        contactUs: "Contact Us:",
        contactButton: "Contact via WhatsApp",
        currentPlaylist: "Current Playlist:",
        expires: "Expires:",
        orderBy: "Order by:",
        orderNumber: "Number",
        orderRating: "Rating",
        orderTitle: "Title",
        epgNow: "Now:",
        epgNext: "Next:",
        addPlaylist: "Add Playlist"
    },
    fr: {
        title: "ELIPlayer",
        connect: "Connectez-vous à votre IPTV",
        m3uTab: "URL M3U",
        xtreamTab: "Codes Xtream",
        m3uUrl: "URL M3U :",
        m3uPlaceholder: "Entrez votre URL M3U",
        xtreamUrl: "URL du serveur :",
        xtreamUrlPlaceholder: "http://votre-serveur.com",
        xtreamUsername: "Nom d'utilisateur :",
        xtreamUsernamePlaceholder: "Votre nom d'utilisateur",
        xtreamPassword: "Mot de passe :",
        xtreamPasswordPlaceholder: "Votre mot de passe",
        connectButton: "Se connecter",
        liveTab: "TV en direct",
        moviesTab: "Films",
        seriesTab: "Séries",
        liveSection: "TV en direct",
        moviesSection: "Films",
        seriesSection: "Séries",
        catchUpSection: "Rattrapage",
        favoritesSection: "Favoris",
        playlistsSection: "Listes de lecture",
        search: "Rechercher",
        searchCategory: "Rechercher une catégorie",
        all: "Tout",
        favorite: "Favori",
        recentlyViewed: "Récemment vu",
        playingDescription: "Aucune description disponible.",
        catchUp: "Rattrapage",
        addToFavorite: "Ajouter aux favoris",
        settings: "Paramètres",
        changePlaylist: "Changer de playlist :",
        changeLanguage: "Changer de langue :",
        refreshPlaylist: "Rafraîchir la playlist :",
        clearHistory: "Effacer l'historique :",
        contactUs: "Nous contacter :",
        contactButton: "Contacter via WhatsApp",
        currentPlaylist: "Playlist actuelle :",
        expires: "Expire le :",
        orderBy: "Trier par :",
        orderNumber: "Numéro",
        orderRating: "Note",
        orderTitle: "Titre",
        epgNow: "Maintenant :",
        epgNext: "Ensuite :",
        addPlaylist: "Ajouter une playlist"
    }
    // Add other languages as needed
};

// Show/hide login tabs
function showTab(tabName) {
    document.getElementById('m3u-form').style.display = tabName === 'm3u' ? 'block' : 'none';
    document.getElementById('xtream-form').style.display = tabName === 'xtream' ? 'block' : 'none';
    document.getElementById('m3u-tab').classList.toggle('active', tabName === 'm3u');
    document.getElementById('xtream-tab').classList.toggle('active', tabName === 'xtream');
}

// Show/hide new playlist tabs
function showNewTab(tabName) {
    document.getElementById('new-m3u-form').style.display = tabName === 'm3u' ? 'block' : 'none';
    document.getElementById('new-xtream-form').style.display = tabName === 'xtream' ? 'block' : 'none';
    document.getElementById('new-m3u-tab').classList.toggle('active', tabName === 'm3u');
    document.getElementById('new-xtream-tab').classList.toggle('active', tabName === 'xtream');
}

// Login with M3U URL
async function loginWithM3U() {
    const m3uUrl = document.getElementById('m3u-url').value.trim();
    if (!m3uUrl) {
        alert(translations[currentLang].m3uPlaceholder);
        return;
    }

    currentCredentials = { type: 'm3u', url: m3uUrl };

    try {
        const response = await fetch(m3uUrl, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.text();
        const items = parseM3U(data);
        if (items.length === 0) {
            alert('No content found in the M3U playlist.');
            return;
        }
        allContent = { live: [], movies: [], series: [] };
        categorizeM3UContent(items);

        // Fetch EPG if available
        if (epgUrl) {
            try {
                await fetchEPG(epgUrl);
            } catch (error) {
                console.error('Error fetching EPG:', error);
                epgData = {};
            }
        }

        populateCategories();
        showMainPage('eli', 'N/A');
    } catch (error) {
        console.error('Error loading M3U:', error);
        alert('Failed to load M3U playlist. Please check the URL and ensure you are using a local server or hosting online to avoid CORS issues. Error: ' + error.message);
    }
}

// Login with Xtream Codes
async function loginWithXtream() {
    const serverUrl = document.getElementById('xtream-url').value.trim();
    const username = document.getElementById('xtream-username').value.trim();
    const password = document.getElementById('xtream-password').value.trim();

    if (!serverUrl || !username || !password) {
        alert('Please fill in all Xtream Codes fields.');
        return;
    }

    currentCredentials = { type: 'xtream', serverUrl, username, password };
    const baseUrl = serverUrl.endsWith('/') ? serverUrl : serverUrl + '/';
    const authUrl = `${baseUrl}player_api.php?username=${username}&password=${password}`;

    try {
        const authResponse = await fetch(authUrl, { method: 'GET' });
        if (!authResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const userInfo = await authResponse.json();
        if (!userInfo.user_info || userInfo.user_info.auth === 0) {
            alert('Invalid Xtream Codes credentials.');
            return;
        }

        const liveUrl = `${baseUrl}player_api.php?username=${username}&password=${password}&action=get_live_streams`;
        const moviesUrl = `${baseUrl}player_api.php?username=${username}&password=${password}&action=get_vod_streams`;
        const seriesUrl = `${baseUrl}player_api.php?username=${username}&password=${password}&action=get_series`;
        const epgUrl = `${baseUrl}player_api.php?username=${username}&password=${password}&action=get_short_epg`;

        const [liveResponse, moviesResponse, seriesResponse, epgResponse] = await Promise.all([
            fetch(liveUrl).then(res => res.json()),
            fetch(moviesUrl).then(res => res.json()),
            fetch(seriesUrl).then(res => res.json()),
            fetch(epgUrl).then(res => res.json()).catch(() => ({})) // EPG might fail, so provide empty object
        ]);

        allContent.live = liveResponse.map(item => ({
            name: item.name,
            url: `${baseUrl}live/${username}/${password}/${item.stream_id}.m3u8`,
            HLSUrl: `${baseUrl}live/${username}/${password}/${item.stream_id}.m3u8`,
            MPEGTSUrl: `${baseUrl}live/${username}/${password}/${item.stream_id}.ts`,
            group: item.category_name || 'Uncategorized',
            logo: item.stream_icon || placeholderImage,
            tvgId: item.epg_channel_id || null
        }));
        allContent.movies = moviesResponse.map(item => ({
            name: item.name,
            url: `${baseUrl}movie/${username}/${password}/${item.stream_id}.m3u8`,
            HLSUrl: `${baseUrl}movie/${username}/${password}/${item.stream_id}.m3u8`,
            MPEGTSUrl: `${baseUrl}movie/${username}/${password}/${item.stream_id}.ts`,
            group: item.category_name || 'Uncategorized',
            logo: item.stream_icon || placeholderImage,
            rating: (Math.random() * 10).toFixed(1)
        }));
        allContent.series = seriesResponse.map(item => ({
            name: item.name,
            url: null,
            group: item.category_name || 'Uncategorized',
            logo: item.cover || placeholderImage,
            rating: (Math.random() * 10).toFixed(1)
        }));

        // Store EPG data
        epgData = epgResponse.epg_listings || {};
        populateCategories();
        showMainPage(username, userInfo.user_info.exp_date ? new Date(userInfo.user_info.exp_date * 1000).toISOString().split('T')[0] : 'N/A');
    } catch (error) {
        console.error('Error authenticating Xtream Codes:', error);
        alert('Failed to connect to Xtream Codes. Please check your server URL, username, and password, and ensure you are using a local server or hosting online to avoid CORS issues. Error: ' + error.message);
    }
}

// Parse M3U playlist
function parseM3U(data) {
    const lines = data.split('\n');
    const items = [];
    let currentItem = null;

    if (lines[0].startsWith('#EXTM3U')) {
        const epgMatch = lines[0].match(/tvg-url="([^"]+)"/);
        if (epgMatch) {
            epgUrl = epgMatch[1];
        }
    }

    for (const line of lines) {
        if (line.startsWith('#EXTINF')) {
            const parts = line.split(',');
            const name = parts[1]?.trim();
            const groupMatch = line.match(/group-title="([^"]+)"/);
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            const tvgIdMatch = line.match(/tvg-id="([^"]+)"/);
            const group = groupMatch ? groupMatch[1] : 'Uncategorized';
            const logo = logoMatch ? logoMatch[1] : placeholderImage;
            const tvgId = tvgIdMatch ? tvgIdMatch[1] : null;
            currentItem = { name, group, logo, tvgId, rating: (Math.random() * 10).toFixed(1) };
        } else if (line.startsWith('http') && currentItem) {
            currentItem.url = line.trim();
            currentItem.HLSUrl = line.trim();
            if (line.includes('.m3u8')) {
                currentItem.MPEGTSUrl = line.replace('.m3u8', '.ts');
            } else if (line.includes('.ts')) {
                currentItem.MPEGTSUrl = line;
                currentItem.HLSUrl = line.replace('.ts', '.m3u8');
            } else {
                currentItem.MPEGTSUrl = line;
            }
            items.push(currentItem);
            currentItem = null;
        }
    }

    return items;
}

// Fetch EPG data from URL
async function fetchEPG(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch EPG data');
        }
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const programmes = xmlDoc.getElementsByTagName('programme');
        epgData = {};
        Array.from(programmes).forEach(programme => {
            const channelId = programme.getAttribute('channel');
            const start = programme.getAttribute('start');
            const stop = programme.getAttribute('stop');
            const title = programme.getElementsByTagName('title')[0]?.textContent || 'Unknown';
            if (!epgData[channelId]) {
                epgData[channelId] = [];
            }
            epgData[channelId].push({
                start: new Date(start.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3T$4:$5:$6Z')),
                stop: new Date(stop.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3T$4:$5:$6Z')),
                title
            });
        });
    } catch (error) {
        console.error('Error parsing EPG:', error);
        epgData = {};
    }
}

// Categorize M3U content
function categorizeM3UContent(items) {
    items.forEach(item => {
        const name = item.name.toLowerCase();
        if (name.includes('movie') || name.includes('film')) {
            allContent.movies.push(item);
        } else if (name.includes('series') || name.includes('episode')) {
            allContent.series.push(item);
        } else {
            allContent.live.push(item);
        }
    });
}

// Populate category groups in the sidebar
function populateCategories() {
    const categoryGroups = document.getElementById('category-groups');
    categoryGroups.innerHTML = '';
    categories = {};

    Object.keys(allContent).forEach(section => {
        allContent[section].forEach(item => {
            const group = item.group;
            if (!categories[group]) {
                categories[group] = { live: [], movies: [], series: [] };
            }
            categories[group][section].push(item);
        });
    });

    Object.keys(categories).forEach(group => {
        const totalCount = categories[group].live.length + categories[group].movies.length + categories[group].series.length;
        const div = document.createElement('div');
        div.className = 'category-item';
        div.dataset.category = group;
        div.onclick = () => showCategory(group);
        div.innerHTML = `<span>${group}</span><span>${totalCount}</span>`;
        categoryGroups.appendChild(div);
    });

    const totalItems = Object.values(allContent).reduce((sum, items) => sum + items.length, 0);
    document.getElementById('all-count').textContent = totalItems;
    document.getElementById('favorites-count').textContent = favorites.length;
    document.getElementById('recently-viewed-count').textContent = recentlyViewed.length;
}

// Show main page after login
function showMainPage(playlistName, expires) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('main-page').style.display = 'flex';
    document.getElementById('content-page').style.display = 'none';
    document.getElementById('playlist-name').textContent = playlistName;
    document.getElementById('playlist-expires').textContent = expires;
    updateDateTime();
    setInterval(updateDateTime, 1000);
    updateTranslations();
}

// Navigate to content page
function navigateToContent(section) {
    currentSection = section;
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('content-page').style.display = 'flex';
    showSection(section);
}

// Go back to main page from content page
function goBackToMain() {
    player.pause();
    currentPlaying = null;
    document.getElementById('content-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'flex';
    document.getElementById('currently-playing').style.display = 'none';
    document.getElementById('settings-panel').classList.remove('open');
}

// Show content page section (Live TV, Movies, Series, Catch Up, Favorites, Playlists)
function showSection(section) {
    currentSection = section;
    player.pause();
    currentPlaying = null;

    document.getElementById('live-content').style.display = section === 'live' ? 'block' : 'none';
    document.getElementById('movies-content').style.display = section === 'movies' ? 'block' : 'none';
    document.getElementById('series-content').style.display = section === 'series' ? 'block' : 'none';
    document.getElementById('catchup-content').style.display = section === 'catchup' ? 'block' : 'none';
    document.getElementById('favorites-content').style.display = section === 'favorites' ? 'block' : 'none';
    document.getElementById('playlists-content').style.display = section === 'playlists' ? 'block' : 'none';

    document.getElementById('currently-playing').style.display = section === 'live' ? 'block' : 'none';
    document.getElementById('playing-title').textContent = translations[currentLang].playingDescription;
    document.getElementById('playing-description').textContent = translations[currentLang].playingDescription;
    document.getElementById('epg-info').innerHTML = '';
    document.getElementById('catch-up-options').style.display = 'none';
    document.getElementById('favorite-icon').className = 'far fa-heart';

    document.querySelectorAll('.tabs .tab').forEach(tab => {
        tab.classList.toggle('active', tab.textContent.toLowerCase().replace(' ', '-') === section);
    });

    if (section === 'playlists') {
        showPlaylists();
    } else if (section === 'favorites') {
        showFavorites();
    } else if (section === 'catchup') {
        showCategory('all'); // Show live channels for catch-up
    } else {
        showCategory('all');
    }
}

// Show content for a category
function showCategory(category) {
    let items;
    if (category === 'all') {
        items = allContent[currentSection];
    } else if (category === 'favorites') {
        items = favorites.filter(item => allContent[currentSection].includes(item));
    } else if (category === 'recently-viewed') {
        items = recentlyViewed.filter(item => allContent[currentSection].includes(item));
    } else {
        items = categories[category][currentSection];
    }

    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });

    if (currentSection === 'live' || currentSection === 'catchup') {
        const itemList = document.getElementById('live-items');
        itemList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.logo}" alt="${item.name}" onerror="this.src='${placeholderImage}'">
                <i class="fas fa-play playing-indicator${currentPlaying === item ? ' playing' : ''}"></i> ${index + 1}. ${item.name}
            `;
            if (item.url) {
                li.onclick = () => playChannel(item);
            } else {
                li.style.cursor = 'default';
                li.style.opacity = '0.6';
            }
            itemList.appendChild(li);
        });
    } else {
        const contentList = document.getElementById(currentSection === 'movies' ? 'movies-list' : 'series-list');
        contentList.innerHTML = '';
        items.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'grid-item';
            div.innerHTML = `
                <img src="${item.logo}" alt="${item.name}" onerror="this.src='${placeholderImage}'">
                <div class="rating">${item.rating}</div>
                <div class="title">${item.name}</div>
            `;
            if (item.url) {
                div.onclick = () => playChannel(item);
            } else {
                div.style.cursor = 'default';
                div.style.opacity = '0.6';
            }
            contentList.appendChild(div);
        });
    }
}

// Show favorited items
function showFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favorites.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `
            <img src="${item.logo}" alt="${item.name}" onerror="this.src='${placeholderImage}'">
            <div class="rating">${item.rating || 'N/A'}</div>
            <div class="title">${item.name}</div>
        `;
        if (item.url) {
            div.onclick = () => playChannel(item);
        } else {
            div.style.cursor = 'default';
            div.style.opacity = '0.6';
        }
        favoritesList.appendChild(div);
    });
}

// Sort favorites
function sortFavorites(criteria) {
    if (criteria === 'rating') {
        favorites.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    } else if (criteria === 'title') {
        favorites.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        favorites.sort((a, b) => favorites.indexOf(a) - favorites.indexOf(b));
    }
    showFavorites();
}

// Play a channel
function playChannel(item, catchUpUrl = null) {
    if (!item.url && !catchUpUrl) {
        alert('No stream URL available for this item.');
        return;
    }

    currentPlaying = item;
    const streamUrl = catchUpUrl || item.HLSUrl || item.url;
    player.src({ src: streamUrl, type: 'application/x-mpegURL' });
    player.play().catch(error => {
        if (!catchUpUrl && item.MPEGTSUrl) {
            // Retry with MPEG-TS URL if HLS fails
            player.src({ src: item.MPEGTSUrl, type: 'video/mp2t' });
            player.play().catch(error => {
                console.error('Error playing stream:', error);
                alert('Failed to play the stream. The stream might be unavailable or not supported in the browser.');
            });
        } else {
            console.error('Error playing stream:', error);
            alert('Failed to play the stream. The stream might be unavailable or not supported in the browser.');
        }
    });

    document.getElementById('playing-title').textContent = item.name;
    document.getElementById('playing-description').textContent = translations[currentLang].playingDescription;
    document.getElementById('favorite-icon').className = favorites.includes(item) ? 'fas fa-heart' : 'far fa-heart';

    // Display EPG data if available
    const epgInfo = document.getElementById('epg-info');
    epgInfo.innerHTML = '';
    if (item.tvgId && epgData[item.tvgId]) {
        const now = new Date();
        const epgPrograms = epgData[item.tvgId].sort((a, b) => a.start - b.start);
        let currentProgram = null;
        let nextProgram = null;

        for (const program of epgPrograms) {
            if (now >= program.start && now <= program.stop) {
                currentProgram = program;
            } else if (program.start > now && !nextProgram) {
                nextProgram = program;
                break;
            }
        }

        if (currentProgram) {
            epgInfo.innerHTML += `<p>${translations[currentLang].epgNow} ${currentProgram.title} (${currentProgram.start.toLocaleTimeString()} - ${currentProgram.stop.toLocaleTimeString()})</p>`;
        }
        if (nextProgram) {
            epgInfo.innerHTML += `<p>${translations[currentLang].epgNext} ${nextProgram.title} (${nextProgram.start.toLocaleTimeString()} - ${nextProgram.stop.toLocaleTimeString()})</p>`;
        }
    }

    recentlyViewed = recentlyViewed.filter(i => i !== item);
    recentlyViewed.unshift(item);
    if (recentlyViewed.length > 50) recentlyViewed.pop();
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    document.getElementById('recently-viewed-count').textContent = recentlyViewed.length;

    if (currentSection === 'live') {
        showCategory(document.querySelector('.category-item.active').dataset.category);
    }
}

// Toggle catch-up options
function toggleCatchUp() {
    if (!currentPlaying || !currentPlaying.tvgId || !epgData[currentPlaying.tvgId]) {
        alert('Catch-up data not available for this channel.');
        return;
    }

    const catchUpOptions = document.getElementById('catch-up-options');
    catchUpOptions.style.display = catchUpOptions.style.display === 'block' ? 'none' : 'block';

    if (catchUpOptions.style.display === 'block') {
        const catchUpList = document.getElementById('catch-up-list');
        catchUpList.innerHTML = '';
        const now = new Date();
        const pastPrograms = epgData[currentPlaying.tvgId].filter(program => program.stop < now);
        pastPrograms.sort((a, b) => b.start - a.start); // Sort by most recent first

        pastPrograms.forEach(program => {
            const li = document.createElement('li');
            li.textContent = `${program.title} (${program.start.toLocaleTimeString()} - ${program.stop.toLocaleTimeString()})`;
            li.onclick = () => playCatchUp(program);
            catchUpList.appendChild(li);
        });
    }
}

// Play catch-up program (simplified)
function playCatchUp(program) {
    if (!currentPlaying) return;

    // Note: True catch-up requires server-side support to provide a URL for past programs.
    // For demonstration, we'll assume the catch-up URL follows a hypothetical format.
    // In a real implementation, you would need a catch-up URL from your IPTV provider.
    const startTime = program.start.toISOString().replace(/[:.-]/g, '');
    const catchUpUrl = `${currentPlaying.url}/timeshift/3600/${startTime}`; // Hypothetical URL format
    playChannel(currentPlaying, catchUpUrl);
}

// Toggle favorite
function toggleFavorite() {
    if (!currentPlaying) return;

    const index = favorites.indexOf(currentPlaying);
    if (index === -1) {
        favorites.push(currentPlaying);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    document.getElementById('favorite-icon').className = favorites.includes(currentPlaying) ? 'fas fa-heart' : 'far fa-heart';
    document.getElementById('favorites-count').textContent = favorites.length;
    if (currentSection === 'live') {
        showCategory(document.querySelector('.category-item.active').dataset.category);
    }
}

// Filter content by search
function filterContent() {
    const search = document.getElementById('search').value.toLowerCase();
    if (currentSection === 'live' || currentSection === 'catchup') {
        const items = document.getElementById('live-items').children;
        Array.from(items).forEach((li, index) => {
            const name = li.textContent.toLowerCase();
            li.style.display = name.includes(search) ? '' : 'none';
        });
    } else if (currentSection === 'favorites') {
        const items = document.getElementById('favorites-list').children;
        Array.from(items).forEach(item => {
            const name = item.querySelector('.title').textContent.toLowerCase();
            item.style.display = name.includes(search) ? '' : 'none';
        });
    } else if (currentSection === 'playlists') {
        const items = document.getElementById('playlists-list').children;
        Array.from(items).forEach(item => {
            const name = item.querySelector('span').textContent.toLowerCase();
            item.style.display = name.includes(search) ? '' : 'none';
        });
    } else {
        const contentList = document.getElementById(currentSection === 'movies' ? 'movies-list' : 'series-list');
        const items = contentList.children;
        Array.from(items).forEach(item => {
            const name = item.querySelector('.title').textContent.toLowerCase();
            item.style.display = name.includes(search) ? '' : 'none';
        });
    }
}

// Filter categories by search
function filterCategories() {
    const search = document.getElementById('category-search').value.toLowerCase();
    const categoryItems = document.querySelectorAll('.category-item');

    Array.from(categoryItems).forEach(item => {
        const name = item.querySelector('span:first-child').textContent.toLowerCase();
        item.style.display = name.includes(search) ? '' : 'none';
    });
}

// Sort content
function sortContent(criteria) {
    let items = currentSection === 'movies' ? allContent.movies : allContent.series;
    if (criteria === 'rating') {
        items.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (criteria === 'title') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        items.sort((a, b) => allContent[currentSection].indexOf(a) - allContent[currentSection].indexOf(b));
    }
    showCategory(document.querySelector('.category-item.active').dataset.category);
}

// Go back to login
function goBackToLogin() {
    player.pause();
    allContent = { live: [], movies: [], series: [] };
    epgData = {};
    categories = {};
    currentPlaying = null;
    currentSection = 'live';
    currentCredentials = null;
    epgUrl = null;
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('content-page').style.display = 'none';
    document.getElementById('login-section').style.display = 'flex';
    document.getElementById('settings-panel').classList.remove('open');
}

// Update date and time in header
function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('current-time').textContent = time;
    document.getElementById('current-date').textContent = date;
}

// Open/close settings
function openSettings() {
    document.getElementById('settings-panel').classList.add('open');
}

function closeSettings() {
    document.getElementById('settings-panel').classList.remove('open');
}

// Change language
let currentLang = localStorage.getItem('language') || 'en';
document.getElementById('language').value = currentLang;

function changeLanguage() {
    currentLang = document.getElementById('language').value;
    localStorage.setItem('language', currentLang);
    updateTranslations();
}

function updateTranslations() {
    const t = translations[currentLang];
    document.querySelector('title').textContent = t.title;
    document.querySelector('.container-login h1').textContent = t.title;
    document.querySelector('.login-form h2').textContent = t.connect;
    document.getElementById('m3u-tab').textContent = t.m3uTab;
    document.getElementById('xtream-tab').textContent = t.xtreamTab;
    document.querySelector('label[for="m3u-url"]').textContent = t.m3uUrl;
    document.getElementById('m3u-url').placeholder = t.m3uPlaceholder;
    document.querySelector('label[for="xtream-url"]').textContent = t.xtreamUrl;
    document.getElementById('xtream-url').placeholder = t.xtreamUrlPlaceholder;
    document.querySelector('label[for="xtream-username"]').textContent = t.xtreamUsername;
    document.getElementById('xtream-username').placeholder = t.xtreamUsernamePlaceholder;
    document.querySelector('label[for="xtream-password"]').textContent = t.xtreamPassword;
    document.getElementById('xtream-password').placeholder = t.xtreamPasswordPlaceholder;
    document.querySelectorAll('.tab-buttons button').forEach(btn => {
        if (btn.id === 'm3u-tab' || btn.id === 'new-m3u-tab') btn.textContent = t.m3uTab;
        else btn.textContent = t.xtreamTab;
    });
    document.querySelectorAll('.tab-content button').forEach(btn => {
        if (!btn.classList.contains('cancel-btn')) btn.textContent = t.connectButton;
    });

    // Main Page
    document.querySelector('#main-page .logo').textContent = t.title;
    document.querySelector('#main-page .section:nth-child(1) span').textContent = t.liveSection;
    document.querySelector('#main-page .section:nth-child(2) span').textContent = t.moviesSection;
    document.querySelector('#main-page .section:nth-child(3) span').textContent = t.seriesSection;
    document.querySelector('#main-page .section:nth-child(4) span').textContent = t.catchUpSection;
    document.querySelector('#main-page .section:nth-child(5) span').textContent = t.favoritesSection;
    document.querySelector('#main-page .section:nth-child(6) span').textContent = t.playlistsSection;
    document.querySelector('#main-page footer span:nth-child(1)').innerHTML = `${t.currentPlaylist} <span id="playlist-name">${document.getElementById('playlist-name').textContent}</span>`;
    document.querySelector('#main-page footer span:nth-child(2)').innerHTML = `${t.expires} <span id="playlist-expires">${document.getElementById('playlist-expires').textContent}</span>`;

    // Content Page
    document.querySelector('#content-page .tabs button:nth-child(2)').textContent = t.liveTab;
    document.querySelector('#content-page .tabs button:nth-child(3)').textContent = t.moviesTab;
    document.querySelector('#content-page .tabs button:nth-child(4)').textContent = t.seriesTab;
    document.querySelector('#content-page .search-bar input').placeholder = t.search;
    document.getElementById('category-search').placeholder = t.searchCategory;
    document.querySelector('.category-item[data-category="all"] span:first-child').textContent = t.all;
    document.querySelector('.category-item[data-category="favorites"] span:first-child').textContent = t.favorite;
    document.querySelector('.category-item[data-category="recently-viewed"] span:first-child').textContent = t.recentlyViewed;
    document.getElementById('playing-description').textContent = t.playingDescription;
    document.querySelector('.channel-actions button:nth-child(1)').childNodes[1].textContent = t.catchUp;
    document.querySelector('.channel-actions button:nth-child(2)').childNodes[1].textContent = t.addToFavorite;
    document.querySelector('.settings-header h2').textContent = t.settings;
    document.querySelector('.setting-item:nth-child(1) label').textContent = t.changePlaylist;
    document.querySelector('.setting-item:nth-child(1) button').textContent = t.changePlaylist;
    document.querySelector('.setting-item:nth-child(2) label').textContent = t.changeLanguage;
    document.querySelector('.setting-item:nth-child(3) label').textContent = t.refreshPlaylist;
    document.querySelector('.setting-item:nth-child(3) button').childNodes[1].textContent = t.refreshPlaylist;
    document.querySelector('.setting-item:nth-child(4) label').textContent = t.clearHistory;
    document.querySelector('.setting-item:nth-child(4) button').childNodes[1].textContent = t.clearHistory;
    document.querySelector('.setting-item:nth-child(5) label').textContent = t.contactUs;
    document.querySelector('.setting-item:nth-child(5) button').childNodes[1].textContent = t.contactButton;
    document.querySelectorAll('.sort-bar label').forEach(label => label.textContent = t.orderBy);
    document.querySelectorAll('.sort-bar select option[value="number"]').forEach(option => option.textContent = t.orderNumber);
    document.querySelectorAll('.sort-bar select option[value="rating"]').forEach(option => option.textContent = t.orderRating);
    document.querySelectorAll('.sort-bar select option[value="title"]').forEach(option => option.textContent = t.orderTitle);

    // Playlists Section
    document.querySelector('#playlists-content .playlists-header button').childNodes[1].textContent = t.addPlaylist;
}

// Refresh playlist
function refreshPlaylist() {
    if (!currentCredentials) {
        alert('No playlist loaded.');
        return;
    }

    if (currentCredentials.type === 'm3u') {
        loginWithM3U();
    } else {
        loginWithXtream();
    }
    alert('Playlist refreshed!');
}

// Clear history
function clearHistory() {
    recentlyViewed = [];
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    document.getElementById('recently-viewed-count').textContent = recentlyViewed.length;
    alert('History cleared!');
}

// Show playlists
function showPlaylists() {
    const playlistsList = document.getElementById('playlists-list');
    playlistsList.innerHTML = '';
    savedPlaylists.forEach((playlist, index) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        div.innerHTML = `
            <span>${playlist.name}</span>
            <div class="actions">
                <button onclick="loadPlaylist(${index})">${translations[currentLang].connectButton}</button>
                <button class="delete-btn" onclick="deletePlaylist(${index})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        playlistsList.appendChild(div);
    });
}

// Show add playlist form
function showAddPlaylistForm() {
    document.getElementById('add-playlist-form').style.display = 'flex';
    document.getElementById('new-m3u-name').value = '';
    document.getElementById('new-m3u-url').value = '';
    document.getElementById('new-xtream-name').value = '';
    document.getElementById('new-xtream-url').value = '';
    document.getElementById('new-xtream-username').value = '';
    document.getElementById('new-xtream-password').value = '';
}

// Cancel adding playlist
function cancelAddPlaylist() {
    document.getElementById('add-playlist-form').style.display = 'none';
}

// Add playlist
function addPlaylist(type) {
    let playlist;
    if (type === 'm3u') {
        const name = document.getElementById('new-m3u-name').value.trim();
        const url = document.getElementById('new-m3u-url').value.trim();
        if (!name || !url) {
            alert('Please fill in all fields.');
            return;
        }
        playlist = { type: 'm3u', name, url };
    } else {
        const name = document.getElementById('new-xtream-name').value.trim();
        const serverUrl = document.getElementById('new-xtream-url').value.trim();
        const username = document.getElementById('new-xtream-username').value.trim();
        const password = document.getElementById('new-xtream-password').value.trim();
        if (!name || !serverUrl || !username || !password) {
            alert('Please fill in all fields.');
            return;
        }
        playlist = { type: 'xtream', name, serverUrl, username, password };
    }

    savedPlaylists.push(playlist);
    localStorage.setItem('savedPlaylists', JSON.stringify(savedPlaylists));
    showPlaylists();
    document.getElementById('add-playlist-form').style.display = 'none';
}

// Load playlist
function loadPlaylist(index) {
    const playlist = savedPlaylists[index];
    currentCredentials = playlist;
    if (playlist.type === 'm3u') {
        document.getElementById('m3u-url').value = playlist.url;
        loginWithM3U();
    } else {
        document.getElementById('xtream-url').value = playlist.serverUrl;
        document.getElementById('xtream-username').value = playlist.username;
        document.getElementById('xtream-password').value = playlist.password;
        loginWithXtream();
    }
}

// Delete playlist
function deletePlaylist(index) {
    if (confirm('Are you sure you want to delete this playlist?')) {
        savedPlaylists.splice(index, 1);
        localStorage.setItem('savedPlaylists', JSON.stringify(savedPlaylists));
        showPlaylists();
    }
}