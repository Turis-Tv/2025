const channels = {
    news: [
        { name: "Turis", src: "http://vps-e2e15dc8.vps.ovh.net/mp4s/promotv.m3u8", img: "link_to_logo" },
        { name: "2M", src: "https://tlfaz.com/Tv-Channel/2m-maroc/?embed_media_shr=1", img: "link_to_logo" },
        { name: "المغربية", src: "https://tlfaz.com/Tv-Channel/almaghribia/?embed_media_shr=1", img: "link_to_logo" },
        { name: "ميدي 1", src: "https://tlfaz.com/Tv-Channel/medi1/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الجزيرة", src: "https://tlfaz.com/Tv-Channel/al-jazeera/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الجزيرة مباشر", src: "https://tlfaz.com/Tv-Channel/al-jazeera-mubasher/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الجزيرة الوثائقية", src: "https://tlfaz.com/Tv-Channel/al-jazeera-documentary/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الجزيرة الوثائقية", src: "https://tlfaz.com/Tv-Channel/al-jazeera-documentary/?embed_media_shr=1", img: "link_to_logo" }
    ],
    sports: [
        { name: "الرياضية", src: "https://tlfaz.com/Tv-Channel/arryadia/?embed_media_shr=1", img: "link_to_logo" },
        { name: "beIN Sports 1", src: "https://tlfaz.com/Tv-Channel/bein-sports-1/?embed_media_shr=1", img: "link_to_logo" },
        { name: "beIN Sports 2", src: "https://tlfaz.com/Tv-Channel/bein-sports-2/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الهداف", src: "https://tlfaz.com/Tv-Channel/el-heddaf/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الجزائرية 3", src: "https://tlfaz.com/Tv-Channel/algerie-tv3/?embed_media_shr=1", img: "link_to_logo" },
        { name: "ليبيا الرياضية", src: "https://tlfaz.com/Tv-Channel/libya-sports-tv/?embed_media_shr=1", img: "link_to_logo" },
        { name: "Algerie TV1", src: "https://tlfaz.com/Tv-Channel/algerie-tv1/?embed_media_shr=1", img: "link_to_logo" }
    ],
    entertainment: [
        { name: "شدى", src: "https://tlfaz.com/Tv-Channel/chada/?embed_media_shr=1", img: "link_to_logo" },
        { name: "MBC 4", src: "https://tlfaz.com/Tv-Channel/mbc4/?embed_media_shr=1", img: "link_to_logo" },
        { name: "تلفزيون المغرب", src: "https://tlfaz.com/Tv-Channel/tele-maroc/?embed_media_shr=1", img: "link_to_logo" },
        { name: "تونسنا", src: "https://tlfaz.com/Tv-Channel/tunisna/?embed_media_shr=1", img: "link_to_logo" },
        { name: "نسمة", src: "https://tlfaz.com/Tv-Channel/nessma/?embed_media_shr=1", img: "link_to_logo" },
        { name: "مزاييك FM", src: "https://tlfaz.com/Tv-Channel/mosaique-fm/?embed_media_shr=1", img: "link_to_logo" },
        { name: "سميرة TV", src: "https://tlfaz.com/Tv-Channel/samira-tv/?embed_media_shr=1", img: "link_to_logo" },
        { name: "تلفزة", src: "https://tlfaz.com/Tv-Channel/telvza/?embed_media_shr=1", img: "link_to_logo" }
    ],
    kids: [
        { name: "Cartoon Network Arabic", src: "https://tlfaz.com/Tv-Channel/cartoon-network-arabic/?embed_media_shr=1", img: "link_to_logo" },
        { name: "Spacetoon", src: "https://tlfaz.com/Tv-Channel/spacetoon/?embed_media_shr=1", img: "link_to_logo" },
        { name: "براعم", src: "https://tlfaz.com/Tv-Channel/baraem/?embed_media_shr=1", img: "link_to_logo" },
        { name: "ماجد", src: "https://tlfaz.com/Tv-Channel/majid/?embed_media_shr=1", img: "link_to_logo" },
        { name: "أطفال ومواهب", src: "https://tlfaz.com/Tv-Channel/atfal-mawaheb/?embed_media_shr=1", img: "link_to_logo" }
    ],
    religious: [
        { name: "السادسة", src: "https://tlfaz.com/Tv-Channel/assadissa/?embed_media_shr=1", img: "link_to_logo" },
        { name: "الرسول", src: "https://tlfaz.com/Tv-Channel/al-rassoul/?embed_media_shr=1", img: "link_to_logo" },
        { name: "مكة", src: "https://tlfaz.com/Tv-Channel/makkah-tv/?embed_media_shr=1", img: "link_to_logo" },
        { name: "القرآن الكريم", src: "https://tlfaz.com/Tv-Channel/al-quran-al-kareem/?embed_media_shr=1", img: "link_to_logo" },
        { name: "السنة النبوية", src: "https://tlfaz.com/Tv-Channel/al-sunnah-al-nabawiyah/?embed_media_shr=1", img: "link_to_logo" },
        { name: "نورا الشام", src: "https://tlfaz.com/Tv-Channel/nour-elsham/?embed_media_shr=1", img: "link_to_logo" },
        { name: "قناة الرحمة", src: "https://tlfaz.com/Tv-Channel/al-rahma/?embed_media_shr=1", img: "link_to_logo" }
    ],
    others: [
        { name: "تلفزيون الجزائري 1", src: "https://tlfaz.com/Tv-Channel/algerie-tv1/?embed_media_shr=1", img: "link_to_logo" },
        { name: "تلفزيون الفجر", src: "https://tlfaz.com/Tv-Channel/el-fadjer/?embed_media_shr=1", img: "link_to_logo" },
        { name: "تلفزيون الحدث", src: "https://tlfaz.com/Tv-Channel/el-heddaf/?embed_media_shr=1", img: "link_to_logo" },
        { name: "تلفزيون النصر", src: "https://tlfaz.com/Tv-Channel/el-nasr/?embed_media_shr=1", img: "link_to_logo" }
    ]
};

function showCategory(category) {
    const channelsDiv = document.getElementById('channels');
    channelsDiv.innerHTML = '';
    channels[category].forEach(channel => {
        const button = document.createElement('button');
        button.innerHTML = `<img src="${channel.img}" alt="${channel.name} Logo">${channel.name}`;
        button.onclick = () => playChannel(channel.src);
        channelsDiv.appendChild(button);
    });
}

function playChannel(source) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = source;
}