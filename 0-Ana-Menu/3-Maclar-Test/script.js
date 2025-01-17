document.addEventListener('DOMContentLoaded', () => {
    const correctCode = '1234';
    const popup = document.querySelector('.popup');
    const activationScreen = document.querySelector('.activation-screen');
    const mainContainer = document.querySelector('.container');
    const activationInput = document.getElementById('activation-code');
    const activateButton = document.getElementById('activate-button');
    const errorMessage = document.getElementById('error-message');
    const max1 = document.getElementById('max1');
    const max2 = document.getElementById('max2');
    const max3 = document.getElementById('max1');
    const max4 = document.getElementById('max2');
    const videoPlayer = document.getElementById('video-player');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const fullscreenButton = document.getElementById('fullscreen');
    const languageSwitch = document.getElementById('language-switch');

    // Hoş geldiniz mesajını görüntüleyin ve ardından etkinleştirme ekranına gidin
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
        activationScreen.style.display = 'flex';
    }, 3000);

    // Etkinleştirme kodunu doğrulayın
    activateButton.addEventListener('click', () => {
        if (activationInput.value === correctCode) {
            activationScreen.style.display = 'none';
            mainContainer.style.display = 'block';
            loadChannel('https://www.youtube.com/watch?v=mZnIcxdZCO0'); // Kanalı otomatik olarak oynat
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Kanalı video oynatıcıya yükleyin
    const loadChannel = (url) => {
        videoPlayer.innerHTML = `<iframe allowfullscreen='true' src='${url}'></iframe>`;
    };

    // Basıldığında kanalı oynat
    max1.addEventListener('click', () => {
        loadChannel('https://www.youtube.com/watch?v=mZnIcxdZCO0');
    });
    max2.addEventListener('click', () => {
        loadChannel('https://www.youtube.com/watch?v=mZnIcxdZCO0');
    });
    max3.addEventListener('click', () => {
        loadChannel('https://www.youtube.com/watch?v=mZnIcxdZCO0');
    });
    max4.addEventListener('click', () => {
        loadChannel('https://www.youtube.com/watch?v=mZnIcxdZCO0');
    });

    // Video ses düzeyini kontrol etme
    zoomInButton.addEventListener('click', () => {
        videoPlayer.style.transform = 'scale(1.2)';
    });
    zoomOutButton.addEventListener('click', () => {
        videoPlayer.style.transform = 'scale(1)';
    });

    // Videoyu tam ekran modunda oynatın
    fullscreenButton.addEventListener('click', () => {
        const iframeElement = videoPlayer.querySelector('iframe');
        if (iframeElement.requestFullscreen) {
            iframeElement.requestFullscreen();
        } else if (iframeElement.mozRequestFullScreen) { // Firefox
            iframeElement.mozRequestFullScreen();
        } else if (iframeElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            iframeElement.webkitRequestFullscreen();
        } else if (iframeElement.msRequestFullscreen) { // IE/Edge
            iframeElement.msRequestFullscreen();
        }
    });

    // Dili değiştir
    languageSwitch.addEventListener('click', () => {
        if (languageSwitch.textContent === 'Enlish') {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            languageSwitch.textContent = 'Türkçe';
            popup.querySelector('h1').textContent = 'Welcome to Football Match Watching App';
            activationScreen.querySelector('h1').textContent = 'Enter Activation Code';
            activationInput.placeholder = 'Enter Activation Code';
            activateButton.textContent = 'Enter';
            errorMessage.textContent = 'Invalid activation code. Try again.';
            max1.textContent = 'Bein Sport Max 1';
            max2.textContent = 'Bein Sport Max 2';
            zoomInButton.textContent = 'Zoom In';
            zoomOutButton.textContent = 'Zoom Out';
            fullscreenButton.textContent = 'Fullscreen';
        } else {
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            languageSwitch.textContent = 'Türkçe';
            popup.querySelector('h1').textContent = 'Futbol maçlarını izlemek için uygulamaya hoş geldiniz';
            activationScreen.querySelector('h1').textContent = 'Aktivasyon kodunu girin';
            activationInput.placeholder = 'Aktivasyon kodunu girin';
            activateButton.textContent = 'giriş';
            errorMessage.textContent = 'Etkinleştirme kodu geçersiz. Tekrar deneyin';
            max1.textContent = 'Bein Sport Max 1';
            max2.textContent = 'Bein Sport Max 2';
            zoomInButton.textContent = 'Yakınlaştır';
            zoomOutButton.textContent = 'Küçült';
            fullscreenButton.textContent = 'Tam ekran';
        }
    });
});