let video = document.getElementById("videoPlayer");
let channelList = document.getElementById("channelList");
let channelTitle = document.getElementById("channelTitle");
let categoryList = document.getElementById("categoryList");
let fullscreenBtn = document.getElementById("fullscreenBtn");
let currentHls = null;
let channels = {};
let currentCategory = "sports";
let hideTimeout = null;

function updateChannels() {
    fetch("https://raw.githubusercontent.com/Turis-Tv/2025/refs/heads/main/%2B18.channels.json")
        .then(response => {
            if (!response.ok) throw new Error("⚠️ Kanallar yüklenemedi, bağlantıyı veya interneti kontrol edin.");
            return response.json();
        })
        .then(data => {
            channels = data;
            loadCategories();
            loadCategory("sports");
        })
        .catch(error => {
            alert(error.message);
            console.error("❌ Kanallar getirilirken hata oluştu:", error);
        });
}

function loadCategories() {
    categoryList.innerHTML = "";
    const categories = {
        "favorite": "⭐ Favoriler",
        "sports": "📺 spor",
        "arabic": "📡 Türkçe",
        "entertainment": "🎭 eğlence",
        "variety": "📺 Çeşitli",
        "world": "🌍 Ülkeler",
        "all": "📢  Tümü "
    };

    Object.entries(categories).forEach(([key, value]) => {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = value;
        btn.onclick = () => loadCategory(key);
        categoryList.appendChild(btn);
    });
}

function loadCategory(category) {
    currentCategory = category;
    channelList.innerHTML = "";
    channelList.style.display = "block";

    let selectedChannels = [];

    if (category === "all") {
        selectedChannels = Object.values(channels).flat();
    } else if (category === "favorite") {
        const favUrls = JSON.parse(localStorage.getItem("favorites") || "[]");
        selectedChannels = Object.values(channels)
            .flat()
            .filter(channel => favUrls.includes(channel.url));
    } else {
        selectedChannels = channels[category] || (channels.country || []);
    }

    selectedChannels.forEach((channel, index) => {
        let channelItem = document.createElement("div");
        channelItem.classList.add("channel-item");

        let match = channel.name.match(/^(\d+)\s*-\s*(.+)$/);
        let channelNumber = match ? match[1] : (index + 1);
        let channelName = match ? match[2] : channel.name;
        let isFav = isChannelFavorite(channel.url);

        channelItem.innerHTML = `
            <span class="channel-number">${channelNumber}. </span>
            <span class="channel-name">${channelName}</span>
            <button class="fav-btn" onclick="toggleFavorite('${channel.url}', this)">${isFav ? '⭐' : '☆'}</button>
        `;

        channelItem.onclick = () => loadChannel(channel.url, channelName);
        channelList.appendChild(channelItem);
    });
}

function isChannelFavorite(url) {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favs.includes(url);
}

function toggleFavorite(url, button) {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favs.includes(url)) {
        favs = favs.filter(f => f !== url);
        button.textContent = "☆";
    } else {
        favs.push(url);
        button.textContent = "⭐";
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
}

// Tıklandığında kanalı oynat
function loadChannel(url, name) {
    if (!video) video = document.getElementById("videoPlayer");
    if (currentHls) {
        currentHls.destroy();
        currentHls = null;
    }

    channelTitle.textContent = name;

    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
        currentHls = hls;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
    } else {
        video.src = url;
        video.play();
    }

    showUI(); // Menüleri geçici olarak göster
}





// إMenüleri göster ve zamanlayıcıyı sıfırla
function showUI() {
    channelList.style.display = "block";
    categoryList.style.display = "flex";
    fullscreenBtn.style.display = "block";

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        channelList.style.display = "none";
        categoryList.style.display = "none";
        fullscreenBtn.style.display = "none";
    }, 5000);
}


// Uzaktan kumanda - oklarla gezinin
let currentFocusIndex = 0;
function focusChannel(index) {
    const items = document.querySelectorAll(".channel-item");
    if (items.length === 0) return;
    currentFocusIndex = index;
    items.forEach(el => el.classList.remove("focused"));
    items[index].classList.add("focused");
    items[index].scrollIntoView({ behavior: "smooth", block: "center" });
}

document.addEventListener("keydown", (e) => {
    const items = document.querySelectorAll(".channel-item");
    if (items.length === 0) return;
    switch (e.key) {
        case "ArrowDown":
            currentFocusIndex = (currentFocusIndex + 1) % items.length;
            focusChannel(currentFocusIndex);
            break;
        case "ArrowUp":
            currentFocusIndex = (currentFocusIndex - 1 + items.length) % items.length;
            focusChannel(currentFocusIndex);
            break;
        case "Enter":
            items[currentFocusIndex].click();
            break;
        case "Backspace":
        case "Escape":
            if (document.fullscreenElement) document.exitFullscreen();
            break;
    }
});


// Menüleri yeniden göstermek için kullanıcı hareketini izleyin
function setupUserInteractionEvents() {
    const resetUI = () => showUI();
    ["mousemove", "touchstart", "keydown"].forEach(evt => {
        document.addEventListener(evt, resetUI);
    });
}


// Videoya tıklandığında Oynat/Duraklat
function setupVideoClick() {
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Çift tıklamayla tüm oynatıcıyı büyüt.
function setupDoubleClickFullscreen() {
    const container = document.getElementById("fullScreenContainer");
    video.addEventListener("dblclick", function () {
        if (!document.fullscreenElement) {
            container.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
}



// Tam ekran moduna girerken/çıkarken gövde stilini değiştir
function setupFullscreenClassToggle() {
    document.addEventListener("fullscreenchange", () => {
        document.body.classList.toggle("fullscreen-mode", !!document.fullscreenElement);
    });
}



const versionFileUrl = "https://raw.githubusercontent.com/mohammedxp2024/tv-channels/main/version.json";
const currentVersion = "1.1.2"; // Bu uygulamanın güncel sürümüdür.

async function checkForUpdate(manualCheck = false) {
    try {
        const response = await fetch(versionFileUrl);
        const data = await response.json();
        const latestVersion = data.version;

        if (latestVersion !== currentVersion) {
            if (confirm(`🔔 Yeni bir güncelleme mevcut (${latestVersion})! Şimdi indirmek ister misiniz?؟`)) {
                // Aşağıdaki bağlantıyı dosya bağlantısına değiştirin. APK içinde GitHub Releases
                window.location.href = "https://github.com/mohammedxp2024/tv-channels/releases/latest/download/app-debug.apk";
            }
        } else if (manualCheck) {
            alert("✅ Uygulamanın en son sürümüne sahipsiniz.!");
        }
    } catch (error) {
        alert("❌Güncelleme kontrol edilirken bir hata oluştu. Daha sonra tekrar deneyin..");
        console.error("hata:", error);
    }
}


// Güncellemeleri kontrol etmek için butona tıklayın.
document.getElementById("update-btn").addEventListener("click", function (e) {
    e.preventDefault();
    checkForUpdate(true);
});

// Tıklandığında güncelleme yapmak için düğmeyi bağlayın
document.getElementById("update-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Bağlantının başka bir sayfaya gitmesini önle
    console.log("Yenileme butonuna basıldı."); // إKayıt eklemek için düğmeye tıklayarak onaylayınإ
    checkForUpdate(true); // Bir bağlantıya tıklandığında doğrulamayı manuel olarak çalıştır
});

// Uygulamaya girdiğinizde yalnızca bir güncelleme varsa güncellemeyi kontrol edin
document.addEventListener("DOMContentLoaded", function() {
    console.log("Sayfa yüklendi"); // إSayfanın yüklenmesini onaylamak için bir kayıt ekleyin.إ
    checkForUpdate(); // Yalnızca yeni bir güncelleme varsa sayfa yüklendiğinde doğrulamayı otomatik olarak çalıştır
});

// ✅ Uygulamayı çalıştırırken kanalları yükle
updateChannels();
// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", function () {
    updateChannels();
    setupUserInteractionEvents();
    setupVideoClick();
    setupDoubleClickFullscreen();
    setupFullscreenClassToggle();

    document.getElementById("update-btn").addEventListener("click", function (event) {
        event.preventDefault();
        checkForUpdate(true);
    });
});




document.getElementById("fullscreenBtn").addEventListener("click", function () {
    const container = document.getElementById("fullScreenContainer");
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
    } else {
        document.exitFullscreen();
    }
});









  





document.addEventListener("keydown", function(e) {
    switch(e.keyCode) {
        case 37: // Left arrow
            console.log("sol");
            break;
        case 38: // Up arrow
            console.log("Odak noktası");
            break;
        case 39: // Right arrow
            console.log("Sağ");
            break;
        case 40: // Down arrow
            console.log("İçeri");
            break;
        case 13: // OK or Enter
            console.log("seçmek");
            break;
        default:
            console.log("Bilinmeyen düğme: " + e.keyCode);
    }
});











// 🔧 Üst kontrol menüsü
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");

// Simgeye tıklandığında menü görüntüsünü değiştir
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// Menü için klavye kontrol desteği
menuIcon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
        menuList.classList.remove("hidden");
        menuItems[0].focus();
    }
});

menuItems.forEach((item, index) => {
    item.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            const next = (index + 1) % menuItems.length;
            menuItems[next].focus();
        } else if (e.key === "ArrowUp") {
            const prev = (index - 1 + menuItems.length) % menuItems.length;
            menuItems[prev].focus();
        } else if (e.key === "Escape") {
            menuList.classList.add("hidden");
            menuIcon.focus();
        } else if (e.key === "Enter") {
            item.click();
        }
    });
});







// 🔄 Dil menüsünü değiştir
const languageMenu = document.getElementById("languageMenu");
const languageDropdown = languageMenu.querySelector(".language-dropdown");
const languageOptions = languageDropdown.querySelectorAll(".language-option");

languageMenu.addEventListener("click", () => {
    languageDropdown.classList.toggle("hidden");
});

languageMenu.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
        languageDropdown.classList.remove("hidden");
        languageOptions[0].focus();
    }
});

languageOptions.forEach((opt, index) => {
    opt.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            const next = (index + 1) % languageOptions.length;
            languageOptions[next].focus();
        } else if (e.key === "ArrowUp") {
            const prev = (index - 1 + languageOptions.length) % languageOptions.length;
            languageOptions[prev].focus();
        } else if (e.key === "Escape") {
            languageDropdown.classList.add("hidden");
            languageMenu.focus();
        } else if (e.key === "Enter") {
            setLanguage(opt.dataset.lang);
            languageDropdown.classList.add("hidden");
        }
    });

    opt.addEventListener("click", () => {
        setLanguage(opt.dataset.lang);   function setLanguage(lang) {
    if (lang === 'en') {
        document.querySelector(".header").textContent = "📡 CTarcom - IPTV Channels";
        document.querySelector("#update-btn").textContent = "⬇️ Check for Update";
        document.querySelector(".btn[onclick='updateChannels()']").textContent = "🔄 Refresh Channels";
        document.querySelector("#fullscreenBtn").textContent = "⛶ Double-click to toggle fullscreen";
        document.getElementById("channelTitle").textContent = "Choose a channel to watch";

        // Paket etiketlerini düzenle
        const categories = {
            "sports": "🏟️ Sports",
            "arabic": "📡 Turkish",
            "entertainment": "🎭 Entertainment",
            "variety": "📺 Iptv",
            "world": "🌍 International",
            "all": "📢 All Channels"
        };

        updateCategoryLabels(categories);
    } else {
        document.querySelector(".header").textContent = "📡 Turis Tv, uydu kanalı operatörü";
        document.querySelector("#update-btn").textContent = "⬇️ Sürümü kontrol edin";
        document.querySelector(".btn[onclick='updateChannels()']").textContent = "🔄 Kanalları güncelle";
        document.querySelector("#fullscreenBtn").textContent = "⛶   Yakınlaştırmak veya uzaklaştırmak için çift tıklayın.";
        document.getElementById("channelTitle").textContent = "İzlemek için bir kanal seçin";

        const categories = {
            "sports": "📺 spor",
            "arabic": "📡 Türkçe",
            "entertainment": "🎭 eğlence",
            "variety": "📺 Iptv",
            "world": "🌍 Ülkeler",
            "all": "📢  Tümü "
        };

        updateCategoryLabels(categories);
    }
}

// Paket düğmelerinin adlarını güncelle
function updateCategoryLabels(newLabels) {
    const categoryButtons = document.querySelectorAll("#categoryList .btn");
    const keys = Object.keys(newLabels);
    categoryButtons.forEach((btn, index) => {
        btn.textContent = newLabels[keys[index]] || btn.textContent;
    });
}

      
        languageDropdown.classList.add("hidden");
    });
});


//Menüden Hakkında uygulama penceresini açın.
document.querySelectorAll(".menu-item").forEach((item) => {
    if (item.textContent.includes("etrafında") || item.textContent.includes("About")) {
        item.addEventListener("click", () => {
            document.getElementById("aboutModal").classList.remove("hidden");
            document.getElementById("aboutModal").focus();
        });

        item.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                document.getElementById("aboutModal").classList.remove("hidden");
                document.getElementById("aboutModal").focus();
            }
        });
    }
});



// إÇıkış düğmesiyle pencereyi kapatın veyaإ Escape
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAbout");

closeAbout.addEventListener("click", () => {
    aboutModal.classList.add("hidden");
});
closeAbout.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
        aboutModal.classList.add("hidden");
    }
});

aboutModal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        aboutModal.classList.add("hidden");
    }
});





        // Video kaydı

let mediaRecorder;
let recordedChunks = [];
let isRecording = false;
let recordBtn = document.getElementById("recordBtn");
let recordTimer = document.getElementById("recordTimer");
let recordStartTime;
let timerInterval = null;

recordBtn.addEventListener("click", () => {
    if (!isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
});

function startRecording() {
    const stream = video.captureStream();
    const audio = new AudioContext();

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(micStream => {
            const combined = new MediaStream([
                ...stream.getVideoTracks(),
                ...micStream.getAudioTracks()
            ]);

            mediaRecorder = new MediaRecorder(combined);
            recordedChunks = [];

            mediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) recordedChunks.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(recordedChunks, { type: "video/webm" });
                saveRecording(blob);
            };

            mediaRecorder.start();
            isRecording = true;

            recordBtn.textContent = "⏹️ Kaydı durdur";
            recordBtn.classList.add("recording");

            // إZamanlayıcıyı gösterإ
            recordStartTime = Date.now();
            recordTimer.classList.remove("hidden");
            updateTimer();
            timerInterval = setInterval(updateTimer, 1000);
        })
        .catch(err => {
            alert("⚠️ Mikrofona erişilemedi.");
            console.error(err);
        });
}

function stopRecording() {
    mediaRecorder.stop();
    isRecording = false;

    recordBtn.textContent = "⏺️ Kaydı başlat";
    recordBtn.classList.remove("recording");

    // إGeçici görünmezlikإ
    clearInterval(timerInterval);
    recordTimer.classList.add("hidden");
}

function updateTimer() {
    const diff = Date.now() - recordStartTime;
    const sec = Math.floor((diff / 1000) % 60).toString().padStart(2, "0");
    const min = Math.floor(diff / 60000).toString().padStart(2, "0");
    recordTimer.textContent = `${min}:${sec}`;
}

function saveRecording(blob) {
    if (window.cordova && cordova.file) {
        // حفظ داخل أندرويد
        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dir) {
            const filename = `channel_${Date.now()}.webm`;
            dir.getFile(filename, { create: true }, function (file) {
                file.createWriter(function (writer) {
                    writer.write(blob);
                    alert("✅ Videoyu cihaz hafızasına kaydedin.");
                });
            });
        });
    } else {
        // Tarayıcıya yerel kaydetme
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `channel_${Date.now()}.webm`;
        a.click();
    }
}
















  function handleExit() {
    if (confirm("Uygulamadan çıkmak istiyor musunuz  ?")) {
      if (window.cordova && navigator.app) {
        navigator.app.exitApp();
      } else if (navigator.device && navigator.device.exitApp) {
        navigator.device.exitApp();
      } else {
        alert("🚫 Tarayıcıdan çıkılamıyor. Sekmeyi manuel olarak kapatın.");
      }
    }
  }

  // destekler Cordova
  if (window.cordova) {
    document.addEventListener("deviceready", function () {
      document.getElementById("exitAppBtn").addEventListener("click", handleExit);
    }, false);
  } else {
    // Normal tarayıcı
    document.getElementById("exitAppBtn").addEventListener("click", handleExit);
  }














// ✅ Kayıt yapmadan önce Android'de mikrofonun geçerliliğini kontrol edin
function checkMicPermissionAndRecord() {
    if (window.cordova && cordova.plugins && cordova.plugins.diagnostic) {
        cordova.plugins.diagnostic.requestMicrophoneAuthorization(status => {
            if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED) {
                startRecording();
            } else {
                alert("🔒 Mikrofona izin verilmiyor. Lütfen ayarlardan izin verin.");
            }
        });
    } else {
        startRecording();
    }
}

recordBtn.addEventListener("click", () => {
    if (!isRecording) {
        checkMicPermissionAndRecord();
    } else {
        stopRecording();
    }
});