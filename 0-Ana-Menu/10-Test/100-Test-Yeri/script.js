const loginForm = document.getElementById('loginForm');
const messageContainer = document.getElementById('messageContainer');
const modeSwitchBtn = document.getElementById('modeSwitchBtn');
let darkModeEnabled = true;

modeSwitchBtn.addEventListener('click', function() {
    const body = document.body;
    darkModeEnabled = !darkModeEnabled;
    
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
        modeSwitchBtn.textContent = 'Aydınlık Mod';
    } else {
        body.classList.remove('dark-mode');
        modeSwitchBtn.textContent = 'Karanlık Mod';
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simülasyon: Kullanıcı adı ve şifre kontrolü
    if (username === 'Turis' && password === '2430') {
        showMessage('success', 'Başarılı giriş! Yönlendiriliyorsunuz...');
        setTimeout(() => {
            // Başarılı giriş durumunda burada yönlendirme veya başka işlemler yapılabilir
            window.location.href = '../index.html'; // Örnek: Dashboard sayfasına yönlendirme
        }, 2000); // 2 saniye bekletme süresi ekledik (simülasyon amaçlı)
    } else if (username === '' || password === '') {
        showMessage('error', 'Lütfen kullanıcı adı ve şifreyi girin.');
    } else {
        showMessage('error', 'Kullanıcı adı veya şifre hatalı. Tekrar deneyin.');
    }
});

function showMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageContainer.innerHTML = '';
    messageContainer.appendChild(messageDiv);
}
const loginTitle = document.getElementById('loginTitle');

loginTitle.addEventListener('mouseover', function() {
    loginTitle.style.color = '#ff4d4d'; // Metin üzerine gelindiğinde renk değişimi
});

loginTitle.addEventListener('mouseout', function() {
    loginTitle.style.color = ''; // Fare metinden çıkınca renk geri döner
});

// Duyuru mesajını göstermek için JavaScript kodu
window.onload = function() {
    const announcement = document.getElementById('announcement');
    announcement.style.display = 'block'; // Sayfa yüklendiğinde duyuru mesajını göster

    // Opsiyonel: Kullanıcı tıkladığında duyuruyu kapatmak için
    announcement.addEventListener('click', function() {
        announcement.style.display = 'none';
    });
};
document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    showRegisterForm();
});

function showRegisterForm() {
    // Kayıt formunu göstermek için gerekli işlemler
    //alert('Kayıt formunu göstermek için JavaScript kodunu ekleyebilirsiniz.');
}

document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleRegisterForm();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    registerUser();
});

function toggleRegisterForm() {
    var registerFormContainer = document.getElementById('registerFormContainer');
    registerFormContainer.style.display = registerFormContainer.style.display === 'none' ? 'flex' : 'none';
}

function registerUser() {
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Burada kullanıcıyı kaydetmek için gerekli işlemleri yapabilirsiniz
    // Örneğin, bir API çağrısı yaparak kullanıcıyı sunucuya kaydedebilirsiniz

    alert('Kullanıcı kaydedildi:\nKullanıcı Adı: ' + username + '\nŞifre: ' + password);

    // Kayıt işlemi başarılı olduktan sonra formu kapatın
    toggleRegisterForm();
}

// Kayıtlı kullanıcıları tutmak için bir dizi oluşturalım (gerçek bir uygulamada bu bir veritabanı olacaktır)
var registeredUsers = [
    { username: 'kullanici1', password: 'sifre1' },
    { username: 'kullanici2', password: 'sifre2' }
];

// Giriş formunu dinleyelim
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kullanıcıyı doğrulayalım
    var authenticatedUser = authenticateUser(username, password);

    if (authenticatedUser) {
        // Başarılı giriş işlemi
        displayMessage('success', 'Başarıyla giriş yapıldı.');

        // YouTube yönlendirmesi burada yapılabilir
        window.location.href = 'https://www.youtube.com/';

        // İsterseniz kullanıcı bilgilerini saklayabilir veya başka işlemler yapabilirsiniz
    } else {
        // Hatalı giriş işlemi
        displayMessage('error', 'Kullanıcı adı veya şifre hatalı.');
    }
});

function authenticateUser(username, password) {
    // Kayıtlı kullanıcıları kontrol edelim
    for (var i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].username === username && registeredUsers[i].password === password) {
            return true; // Kullanıcı doğrulandı
        }
    }
    return false; // Kullanıcı bulunamadı veya şifre hatalı
}

function displayMessage(type, message) {
    var messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = '<div class="' + type + '-message">' + message + '</div>';
}

// script.js dosyasında

document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleRegisterForm(true);
});

document.getElementById('closeRegisterBtn').addEventListener('click', function(event) {
    event.preventDefault();
    toggleRegisterForm(false);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    registerUser();
});

function toggleRegisterForm(show) {
    var registerFormContainer = document.getElementById('registerFormContainer');
    if (show) {
        registerFormContainer.style.display = 'flex';
    } else {
        registerFormContainer.style.display = 'none';
    }
}

function registerUser() {
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Burada kullanıcıyı kaydetmek için gerekli işlemleri yapabilirsiniz
    // Örneğin, bir API çağrısı yaparak kullanıcıyı sunucuya kaydedebilirsiniz

    alert('Kullanıcı kaydedildi:\nKullanıcı Adı: ' + username + '\nŞifre: ' + password);

    // Kayıt işlemi başarılı olduktan sonra formu kapatın
    toggleRegisterForm(false);
}

// Copy ve Paste İşlemlerini Engelle
document.addEventListener('copy', function(e) {
    e.preventDefault();
    Swal.fire({
        icon: 'warning',
        title: 'Copy İşlemi Engellendi',
        text: 'Lütfen metni elle yazarak yapıştırın.',
        confirmButtonText: 'Tamam'
    });
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
    Swal.fire({
        icon: 'warning',
        title: 'Cut İşlemi Engellendi',
        text: 'Lütfen metni elle yazarak yapıştırın.',
        confirmButtonText: 'Tamam'
    });
});

document.addEventListener('paste', function(e) {
    e.preventDefault();
    Swal.fire({
        icon: 'warning',
        title: 'Paste İşlemi Engellendi',
        text: 'Lütfen metni elle yazarak yapıştırın.',
        confirmButtonText: 'Tamam'
    });
});