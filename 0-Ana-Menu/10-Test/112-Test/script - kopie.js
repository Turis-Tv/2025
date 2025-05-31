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
        "all": "📢 Tüm kanallar"
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


// ريموت كنترول - تنقل بالأسهم
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


// تعقب حركة المستخدم لإظهار القوائم مجددًا
function setupUserInteractionEvents() {
    const resetUI = () => showUI();
    ["mousemove", "touchstart", "keydown"].forEach(evt => {
        document.addEventListener(evt, resetUI);
    });
}


// التشغيل/الإيقاف عند النقر على الفيديو
function setupVideoClick() {
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// تكبير المشغل بالكامل عند النقر المزدوج
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



// تغيير نمط الجسم عند دخول/الخروج من وضع ملء الشاشة
function setupFullscreenClassToggle() {
    document.addEventListener("fullscreenchange", () => {
        document.body.classList.toggle("fullscreen-mode", !!document.fullscreenElement);
    });
}



const versionFileUrl = "https://raw.githubusercontent.com/mohammedxp2024/tv-channels/main/version.json";
const currentVersion = "1.1.2"; // هذا هو إصدار التطبيق الحالي

async function checkForUpdate(manualCheck = false) {
    try {
        const response = await fetch(versionFileUrl);
        const data = await response.json();
        const latestVersion = data.version;

        if (latestVersion !== currentVersion) {
            if (confirm(`🔔 يتوفر تحديث جديد (${latestVersion})! هل تريد تحميله الآن؟`)) {
                // غير الرابط أدناه إلى رابط ملف APK في GitHub Releases
                window.location.href = "https://github.com/mohammedxp2024/tv-channels/releases/latest/download/app-debug.apk";
            }
        } else if (manualCheck) {
            alert("✅ لديك أحدث إصدار من التطبيق!");
        }
    } catch (error) {
        alert("❌ حدث خطأ أثناء التحقق من التحديث، حاول مرة أخرى لاحقًا.");
        console.error("خطأ:", error);
    }
}


// ربط الزر بالتحقق من التحديث
document.getElementById("update-btn").addEventListener("click", function (e) {
    e.preventDefault();
    checkForUpdate(true);
});

// ربط الزر بالتحديث عند النقر عليه
document.getElementById("update-btn").addEventListener("click", function (event) {
    event.preventDefault(); // منع الرابط من الانتقال إلى صفحة أخرى
    console.log("تم الضغط على زر التحديث"); // إضافة سجل لتأكيد النقر على الزر
    checkForUpdate(true); // تشغيل التحقق يدويًا عند النقر على الرابط
});

// تحقق من التحديث عند دخول التطبيق فقط إذا كان هناك تحديث
document.addEventListener("DOMContentLoaded", function() {
    console.log("تم تحميل الصفحة"); // إضافة سجل لتأكيد تحميل الصفحة
    checkForUpdate(); // تشغيل التحقق تلقائيًا عند تحميل الصفحة فقط إذا كان هناك تحديث جديد
});

// ✅ تحميل القنوات عند تشغيل التطبيق
updateChannels();
// عند تحميل الصفحة
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
            console.log("يسار");
            break;
        case 38: // Up arrow
            console.log("فوك");
            break;
        case 39: // Right arrow
            console.log("يمين");
            break;
        case 40: // Down arrow
            console.log("جوه");
            break;
        case 13: // OK or Enter
            console.log("اختيار");
            break;
        default:
            console.log("زر غير معروف: " + e.keyCode);
    }
});











// 🔧 منيو التحكم العلوي
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");

// تبديل عرض المنيو عند الضغط على الأيقونة
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// دعم التحكم بالكيبورد للمنيو
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







// 🔄 تبديل قائمة اللغة
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

        // تعديل تسميات الباقات
        const categories = {
            "sports": "🏟️ Sports",
            "arabic": "📡 Arabic",
            "entertainment": "🎭 Entertainment",
            "variety": "📺 Variety",
            "world": "🌍 International",
            "all": "📢 All Channels"
        };

        updateCategoryLabels(categories);
    } else {
        document.querySelector(".header").textContent = "📡 محمد ستاركوم   مشغل القنوات الفضائية";
        document.querySelector("#update-btn").textContent = "⬇️ تحقق من الاصدار";
        document.querySelector(".btn[onclick='updateChannels()']").textContent = "🔄 تحديث القنوات";
        document.querySelector("#fullscreenBtn").textContent = "⛶   للتكبير والتصغير النقر مزدوج";
        document.getElementById("channelTitle").textContent = "اختر قناة للمشاهدة";

        const categories = {
            "sports": "📺 رياضة",
            "arabic": "📡 عربية",
            "entertainment": "🎭 ترفيه",
            "variety": "📺 منوعة",
            "world": "🌍 دول",
            "all": "📢 جميع القنوات"
        };

        updateCategoryLabels(categories);
    }
}

// تحديث أسماء أزرار الباقات
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


// فتح نافذة حول التطبيق من المنيو
document.querySelectorAll(".menu-item").forEach((item) => {
    if (item.textContent.includes("حول") || item.textContent.includes("About")) {
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



// إغلاق النافذة بزر الخروج أو Escape
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





        // تسجيل الفيديو

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

            recordBtn.textContent = "⏹️ إيقاف التسجيل";
            recordBtn.classList.add("recording");

            // إظهار المؤقت
            recordStartTime = Date.now();
            recordTimer.classList.remove("hidden");
            updateTimer();
            timerInterval = setInterval(updateTimer, 1000);
        })
        .catch(err => {
            alert("⚠️ تعذر الوصول إلى المايكروفون.");
            console.error(err);
        });
}

function stopRecording() {
    mediaRecorder.stop();
    isRecording = false;

    recordBtn.textContent = "⏺️ بدء التسجيل";
    recordBtn.classList.remove("recording");

    // إخفاء المؤقت
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
                    alert("✅ تم حفظ الفيديو في ذاكرة الجهاز.");
                });
            });
        });
    } else {
        // حفظ محلي للمتصفح
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `channel_${Date.now()}.webm`;
        a.click();
    }
}
















  function handleExit() {
    if (confirm("هل تريد الخروج من التطبيق؟")) {
      if (window.cordova && navigator.app) {
        navigator.app.exitApp();
      } else if (navigator.device && navigator.device.exitApp) {
        navigator.device.exitApp();
      } else {
        alert("🚫 لا يمكن الخروج من المتصفح. أغلق التبويب يدويًا.");
      }
    }
  }

  // يدعم Cordova
  if (window.cordova) {
    document.addEventListener("deviceready", function () {
      document.getElementById("exitAppBtn").addEventListener("click", handleExit);
    }, false);
  } else {
    // متصفح عادي
    document.getElementById("exitAppBtn").addEventListener("click", handleExit);
  }














// ✅ التحقق من صلاحية المايك على أندرويد قبل التسجيل
function checkMicPermissionAndRecord() {
    if (window.cordova && cordova.plugins && cordova.plugins.diagnostic) {
        cordova.plugins.diagnostic.requestMicrophoneAuthorization(status => {
            if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED) {
                startRecording();
            } else {
                alert("🔒 لم يتم السماح بالمايكروفون. يرجى منحه الإذن من الإعدادات.");
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