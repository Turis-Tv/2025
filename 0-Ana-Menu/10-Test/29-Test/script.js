// قائمة القنوات: قنوات beIN Sports و SSC
const channels = [
    // قنوات beIN Sports
    { name: "beIN Sports 1 HD", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/48", image: "https://img.kooora.com/?i=o%2fh%2f1%2f201%2fbein-sports-hd-1.png" },
    { name: "beIN Sports 2 HD", url: "http://vlue.life:80/816745222020/181252287918/483541", image: "https://img.kooora.com/?i=o%2fh%2f1%2f202%2fbein-sports-hd-1.png" },
    { name: "beIN Sports 3 HD", url: "http://vlue.life:80/816745222020/181252287918/483550", image: "https://img.kooora.com/?i=o%2fh%2f1%2f203%2fbein-sports-hd-1.png" },
    { name: "beIN Sports 4 HD", url: "http://vlue.life:80/816745222020/181252287918/483557", image: "https://img.kooora.com/?i=o%2fh%2f1%2f204%2fbein-sports-hd-1.png" },
    { name: "beIN Sports 5 HD", url: "http://vlue.life:80/816745222020/181252287918/483561", image: "https://img.kooora.com/?i=o%2fh%2f1%2f205%2fbein-sports-hd-1.png" },
    { name: "beIN Sports 6 HD", url: "http://vlue.life:80/816745222020/181252287918/483565", image: "https://img.kooora.com/?i=o%2fh%2f1%2f206%2fbein-sports-hd-1.png" },
    { name: "beIN Sports Premium 1", url: "http://vlue.life:80/816745222020/181252287918/483569", image: "https://cdn.livesoccertv.com/images/channels/thumbnails/bein-sports-arabia-9-hd.png" },
    { name: "beIN Sports Premium 2", url: "https://example.com/beinp2", image: "https://cdn.livesoccertv.com/images/channels/thumbnails/bein-sports-arabia-8-hd.png" },
    { name: "beIN Sports News", url: "http://vlue.life:80/816745222020/181252287918/483541", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqw-U0ABTrTlyUx0G9seK4g6y-S7H0k0y_xBs6ydP8_w&s" },
    { name: "beIN Sports Max 1", url: "http://vlue.life:80/816745222020/181252287918/483582", image: "https://img.kooora.com/?i=o%2fh%2f1%2f654%2fbein-sports-max-1.png" },
    { name: "beIN Sports Max 2", url: "http://vlue.life:80/816745222020/181252287918/483583", image: "https://img.kooora.com/?i=o%2fh%2f1%2f896%2fbein-sports-xtra-1.png" },

    // قنوات SSC
    { name: "SSC 1 HD", url: "http://vlue.life:80/816745222020/181252287918/483828", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC 2 HD", url: "http://vlue.life:80/816745222020/181252287918/483830", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC 3 HD", url: "http://vlue.life:80/816745222020/181252287918/483831", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC 4 HD", url: "http://vlue.life:80/816745222020/181252287918/483832", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC 5 HD", url: "http://vlue.life:80/816745222020/181252287918/483834", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC EXTRA 1 HD", url: "http://vlue.life:80/816745222020/181252287918/483836", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC EXTRA 2 HD", url: "http://vlue.life:80/816745222020/181252287918/483839", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },
    { name: "SSC EXTRA 3 HD", url: "http://vlue.life:80/816745222020/181252287918/483843", image: "https://img.kooora.com/?i=o%2fh%2f1%2f921%2fssc1-hd-1.png" },

    // قنوات كرة القدم العربية من مختلف الدول
    { name: "فلسطين الرياضية", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/360709", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiegsFV9vVVUnG3Annj7qUCniFZdrcHdhgvxAZZTO_Oo6OcaR5VRHAzrK299C868Sk5DUS5CGC4mgoVt6RFtxNQ2pT-hiJsdmpqfI_MCEOTqzpqu9hkbIegCQWwx7VtwoFGI1dKiV5vegU/s477/%25D9%2585%25D8%25B4%25D8%25A7%25D9%2587%25D8%25AF%25D8%25A9+%25D9%2582%25D9%2586%25D8%25A7%25D8%25A9+%25D9%2581%25D9%2584%25D8%25B3%25D8%25B7%25D9%258A%25D9%2586+%25D8%25A7%25D9%2584%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A9+%25D8%25A8%25D8%25AB+%25D9%2585%25D8%25A8%25D8%25A7%25D8%25B4%25D8%25B1+Palestine+sports.webp" },
    { name: "الأردن الرياضية", url: "http://vlue.life:80/816745222020/181252287918/69215", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_1Ih2UjYTFglJOX7NO58zAhLJ-jR5Pk2d9sD5nlqdTDYw_MvscISUyEgVA6qR_snjy9a3V012TC_HJZR6W9gErtWqZ0lQo1xfOqPp_RQ" },
    { name:  "ليبيا الرياضية", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/112529", image: "https://tlfaz.com/wp-content/uploads/2023/03/Libya-Sports-Tv.png" },
    { name: "OnTime Sports", url: "https://d.alkoora.live/albaplayer/on-time-sport-1/", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyuQb3OwBcNFTHjqcc57sAul1oSYXlCGByJIzZ4Qs5HHv3yf4UNbMEZ5UVninQXt0sXuqlIRrhHj776BOTdQn-7lLZUlxZRyemZ-BBqqloZZqxCHQ2wmdhvemE28NJ9jRgyxObUeKAVduvXezU0oSJOo8NqramMDSSib9gheDWCme2JFFIhB4mALS/s16000/1.jpg" },
    { name: "OnTime Sports 2", url: "http://vlue.life:80/816745222020/181252287918/69201", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyuQb3OwBcNFTHjqcc57sAul1oSYXlCGByJIzZ4Qs5HHv3yf4UNbMEZ5UVninQXt0sXuqlIRrhHj776BOTdQn-7lLZUlxZRyemZ-BBqqloZZqxCHQ2wmdhvemE28NJ9jRgyxObUeKAVduvXezU0oSJOo8NqramMDSSib9gheDWCme2JFFIhB4mALS/s16000/1.jpg" },
    { name: "KSA Sports 1", url: "http://vlue.life:80/816745222020/181252287918/658928", image: "https://img.kooora.com/?i=01%2fef4_yfjwoamdbmn.jpg" },
    { name: "KSA Sports 2", url: "http://vlue.life:80/816745222020/181252287918/658932", image: "https://img.kooora.com/?i=01%2fef4_yfjwoamdbmn.jpg" },
    { name: "العراق الرياضية", url: "http://vlue.life:80/816745222020/181252287918/362195", image: "https://tlfaz.com/wp-content/uploads/2023/04/iraqia-sport.png" },
    { name: "الكويت الرياضية", url: "http://vlue.life:80/816745222020/181252287918/362218", image: "https://www.matnnews.com/UploadCache/libfiles/18/5/600x338o/491.png" },
    { name: "الإمارات الرياضية", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/15131", image: "https://www.dubaisports.ae/content/dam/Common/brands1/dubaisports.png" }
];

// إضافة القنوات إلى الصفحة
const channelContainer = document.getElementById('channel-container');
channels.forEach(channel => {
    const channelCard = document.createElement('div');
    channelCard.classList.add('channel-card');
    channelCard.innerHTML = `
        <img src="${channel.image}" alt="${channel.name}">
        <button onclick="openChannel('${channel.url}')">${channel.name}</button>
    `;
    channelContainer.appendChild(channelCard);
});

// فتح القناة في مشغل مدمج
function openChannel(url) {
    const playerModal = document.getElementById('player-modal');
    const channelPlayer = document.getElementById('channel-player');
    playerModal.style.display = 'block';
  channelPlayer.src = url
}

// إغلاق نافذة المشغل المدمج
document.getElementById('close-modal').onclick = function() {
    const playerModal = document.getElementById('player-modal');
    const channelPlayer = document.getElementById('channel-player');
    playerModal.style.display = 'none';    channelPlayer.src = ''; // إيقاف القناة عند الإغلاق
};

// مشاركة التطبيق
function shareApp() {
    const text = 'اكتشف أفضل قنوات كرة القدم على هذا التطبيق!';
    if (navigator.share) {
        navigator.share({
            title: 'تطبيق مشاهدة قنوات كرة القدم',
            text: text,
            url: window.location.href
        }).then(() => console.log('تم مشاركة التطبيق')).catch(err => console.log('خطأ في المشاركة: ', err));
    } else {
        alert('مشاركة التطبيق غير مدعومة في متصفحك.');
    }
}