// قائمة القنوات
const channels = [
    // قنوات beIN Sports
    { name: "beIN Sports 1", url: "http://example.com/bein1", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports 2", url: "http://example.com/bein2", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports 3", url: "http://example.com/bein3", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports 4", url: "http://example.com/bein4", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports 5", url: "http://example.com/bein5", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    // قنوات beIN Sports Max
    { name: "beIN Sports Max 1", url: "http://example.com/beinmax1", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports Max 2", url: "http://example.com/beinmax2", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports Max 3", url: "http://example.com/beinmax3", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },
    { name: "beIN Sports Max 4", url: "http://example.com/beinmax4", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    // قنوات SSC
    { name: "SSC Sports 1", url: "http://example.com/ssc1", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },
    { name: "SSC Sports 2", url: "http://example.com/ssc2", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },
    { name: "SSC Sports 3", url: "http://example.com/ssc3", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },
    { name: "SSC Sports 4", url: "http://example.com/ssc4", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },

    // قنوات SSC Extra
    { name: "SSC Extra 1", url: "http://example.com/ssc_extra1", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },
    { name: "SSC Extra 2", url: "http://example.com/ssc_extra2", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },
    { name: "SSC Extra 3", url: "http://example.com/ssc_extra3", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },
    { name: "SSC Extra 4", url: "http://example.com/ssc_extra4", image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },

    // قنوات رياضية عربية
    { name: "فلسطين الرياضية", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/360709", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiegsFV9vVVUnG3Annj7qUCniFZdrcHdhgvxAZZTO_Oo6OcaR5VRHAzrK299C868Sk5DUS5CGC4mgoVt6RFtxNQ2pT-hiJsdmpqfI_MCEOTqzpqu9hkbIegCQWwx7VtwoFGI1dKiV5vegU/s477/%25D9%2585%25D8%25B4%25D8%25A7%25D9%2587%25D8%25AF%25D8%25A9+%25D9%2582%25D9%2586%25D8%25A7%25D8%25A9+%25D9%2581%25D9%2584%25D8%25B3%25D8%25B7%25D9%258A%25D9%2586+%25D8%25A7%25D9%2584%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A9+%25D8%25A8%25D8%25AB+%25D9%2585%25D8%25A8%25D8%25A7%25D8%25B4%25D8%25B1+Palestine+sports.webp" },
    { name: "الأردن الرياضية", url: "http://vlue.life:80/816745222020/181252287918/69215", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_1Ih2UjYTFglJOX7NO58zAhLJ-jR5Pk2d9sD5nlqdTDYw_MvscISUyEgVA6qR_snjy9a3V012TC_HJZR6W9gErtWqZ0lQo1xfOqPp_RQ" },
    { name: "ليبيا الرياضية", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/112529", image: "https://tlfaz.com/wp-content/uploads/2023/03/Libya-Sports-Tv.png" },
    { name: "OnTime Sports", url: "http://vlue.life:80/816745222020/181252287918/69200", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyuQb3OwBcNFTHjqcc57sAul1oSYXlCGByJIzZ4Qs5HHv3yf4UNbMEZ5UVninQXt0sXuqlIRrhHj776BOTdQn-7lLZUlxZRyemZ-BBqqloZZqxCHQ2wmdhvemE28NJ9jRgyxObUeKAVduvXezU0oSJOo8NqramMDSSib9gheDWCme2JFFIhB4mALS/s16000/1.jpg" },
    { name: "OnTime Sports 2", url: "http://vlue.life:80/816745222020/181252287918/69201", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyuQb3OwBcNFTHjqcc57sAul1oSYXlCGByJIzZ4Qs5HHv3yf4UNbMEZ5UVninQXt0sXuqlIRrhHj776BOTdQn-7lLZUlxZRyemZ-BBqqloZZqxCHQ2wmdhvemE28NJ9jRgyxObUeKAVduvXezU0oSJOo8NqramMDSSib9gheDWCme2JFFIhB4mALS/s16000/1.jpg" },
    { name: "KSA Sports 1", url: "http://vlue.life:80/816745222020/181252287918/658928", image: "https://img.kooora.com/?i=01%2fef4_yfjwoamdbmn.jpg" },
    { name: "KSA Sports 2", url: "http://vlue.life:80/816745222020/181252287918/658932", image: "https://img.kooora.com/?i=01%2fef4_yfjwoamdbmn.jpg" },
    { name: "العراق الرياضية", url: "http://vlue.life:80/816745222020/181252287918/362195", image: "https://tlfaz.com/wp-content/uploads/2023/04/iraqia-sport.png" },
    { name: "الكويت الرياضية", url: "http://vlue.life:80/816745222020/181252287918/362218", image: "https://www.matnnews.com/UploadCache/libfiles/18/5/600x338o/491.png" },
    { name: "الإمارات الرياضية", url: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/15131", image: "https://www.dubaisports.ae/content/dam/Common/brands1/dubaisports.png" }
];

    { name: "beIN Sports 1", id: 11, image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    { name: "beIN Sports 2", id: 12, image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    { name: "beIN Sports 3", id: 13, image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    { name: "beIN Sports 4", id: 14, image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    { name: "beIN Sports 5", id: 15, image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BeIN_Sports_logo.png" },

    // قنوات SSC Sports

    { name: "SSC Sports 1", id: 16, image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },

    { name: "SSC Sports 2", id: 17, image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },

    { name: "SSC Sports 3", id: 18, image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },

    { name: "SSC Sports 4", id: 19, image: "https://www.alkhaleej.ae/sites/default/files/styles/social_share/public/ssc-logo.jpg" },

    // قنوات رياضية عربية

    { name: "فلسطين الرياضية", id: 1, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiegsFV9vVVUnG3Annj7qUCniFZdrcHdhgvxAZZTO_Oo6OcaR5VRHAzrK299C868Sk5DUS5CGC4mgoVt6RFtxNQ2pT-hiJsdmpqfI_MCEOTqzpqu9hkbIegCQWwx7VtwoFGI1dKiV5vegU/s477/%25D9%2585%25D8%25B4%25D8%25A7%25D9%2587%25D8%25AF%25D8%25A9+%25D9%2582%25D9%2586%25D8%25A7%25D8%25A9+%25D9%2581%25D9%2584%25D8%25B3%25D8%25B7%25D9%258A%25D9%2586+%25D8%25A7%25D9%2584%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A9+%25D8%25A8%25D8%25AB+%25D9%2585%25D8%25A8%25D8%25A7%25D8%25B4%25D8%25B1+Palestine+sports.webp" },

    { name: "الأردن الرياضية", id: 2, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_1Ih2UjYTFglJOX7NO58zAhLJ-jR5Pk2d9sD5nlqdTDYw_MvscISUyEgVA6qR_snjy9a3V012TC_HJZR6W9gErtWqZ0lQo1xfOqPp_RQ" },

    { name: "ليبيا الرياضية", id: 3, image: "https://tlfaz.com/wp-content/uploads/2023/03/Libya-Sports-Tv.png" },

    { name: "OnTime Sports", id: 4, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyuQb3OwBcNFTHjqcc57sAul1oSYXlCGByJIzZ4Qs5HHv3yf4UNbMEZ5UVninQXt0sXuqlIRrhHj776BOTdQn-7lLZUlxZRyemZ-BBqqloZZqxCHQ2wmdhvemE28NJ9jRgyxObUeKAVduvXezU0oSJOo8NqramMDSSib9gheDWCme2JFFIhB4mALS/s16000/1.jpg" },

    { name: "OnTime Sports 2", id: 5, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyuQb3OwBcNFTHjqcc57sAul1oSYXlCGByJIzZ4Qs5HHv3yf4UNbMEZ5UVninQXt0sXuqlIRrhHj776BOTdQn-7lLZUlxZRyemZ-BBqqloZZqxCHQ2wmdhvemE28NJ9jRgyxObUeKAVduvXezU0oSJOo8NqramMDSSib9gheDWCme2JFFIhB4mALS/s16000/1.jpg" }

];

// قاموس الروابط المخفية

const channelLinks = {

    1: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/360709",

    2: "http://vlue.life:80/816745222020/181252287918/69215",

    3: "http://dmbdvuw.mmastertv.xyz:80/2967392206/2818536224/112529",

    4: "http://vlue.life:80/816745222020/181252287918/69200",

    5: "http://vlue.life:80/816745222020/181252287918/69201",

    11: "http://vlue.life:80/816745222020/181252287918/69001",

    12: "http://vlue.life:80/816745222020/181252287918/69002",

    13: "http://vlue.life:80/816745222020/181252287918/69003",

    14: "http://vlue.life:80/816745222020/181252287918/69004",

    15: "http://vlue.life:80/816745222020/181252287918/69005",

    100: "http://dmbdvuw.mmastertv.xyz:80/816745222020/181252287918/66000",

    101: "http://dmbdvuw.mmastertv.xyz:80/816745222020/181252287918/66001",

    102: "http://dmbdvuw.mmastertv.xyz:80/816745222020/181252287918/66002",

    103: "http://dmbdvuw.mmastertv.xyz:80/816745222020/181252287918/66003",

    200: "http://vlue.life:80/816745222020/181252287918/67001",

    201: "http://vlue.life:80/816745222020/181252287918/67002",

    202: "http://vlue.life:80/816745222020/181252287918/67003",

    203: "http://vlue.life:80/816745222020/181252287918/67004"

};