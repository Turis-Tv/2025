let player = document.getElementById("player");


function channelUCV(){
    player.setAttribute('src','https://rudo.video/live/ucvtv2');
}
function channelTVMas(){
    player.setAttribute('src','https://mdstrm.com/live-stream/5c0e8b19e4c87f3f2d3e6a59?jsapi=true&loop=false&autoplay=true&controls=true&player=5c0e87c403a35601ebcffcf4&access_token=FLKY2GFWDawvuNPbOSp4AgTDVTN5bUhMhJbDNTySSNm6ElTQoAw8Jbiz8IhPqpxxvidUQFQCc1p');
}

function channelMeganoticias(){
    player.setAttribute('src','https://tv-trt1.medya.trt.com.tr/master_720.m3u8');
}
function channel24h(){
    player.setAttribute('src','https://www.youtube.com/embed/sjQsjgBt03I?autoplay=1&controls=0');
}
function channelTVN(){
    player.setAttribute('src','https://mdstrm.com/live-stream/57a498c4d7b86d600e5461cb?jsapi=true&autoplay=true&controls=true&volume=100&player=57f40bb4dc5b9f3075c49cfe&access_token=mcuTxzaw1yrrt7wiZkWe88tX8IYWkvfDzISudFAc40qaRXhks5nvY8vBgyb1lEuDkxuAoaldn0z&custom.preroll=sz%3D640x480%26iu%3D%2F317342475%2Ftvn_portada_prerroll%26impl%3Ds%26gdfp_req%3D1%26env%3Dvp%26output%3Dxml_vast3%26unviewed_position_start%3D1%26url%3D%5Breferrer%5D%26description_url%3Dhttps%3A%2F%2Ftoken.tvn.cl%26correlator%3D%5Btimestamp%5D&custom.overlay=sz%3D640x480%26iu%3D%2F317342475%2Ftvn_portada_overlay%26impl%3Ds%26gdfp_req%3D1%26env%3Dvp%26output%3Dxml_vast3%26unviewed_position_start%3D1%26url%3D%5Breferrer_url%5D%26description_url%3Dhttps%3A%2F%2Ftoken.tvn.cl%26correlator%3D%5Btimestamp%5D');
}
function channelCHV(){
    player.setAttribute('src','https://mdstrm.com/live-stream/5c928b7f6d6f41084bdae898?jsapi=true&autoplay=true&access_token=JcN8YgzZc0mWmXaR3LUL9Wrdw6kqxj1D8jKUJgOid4AfBXd5378NgPpVus7qtoAVhgwVFaGaO45&custom.categoria_prontus=senal-online&custom.dfpLanguage=es&custom.dfpCountry=cl&custom.dfpShowName=senal-online&custom.dfpVidId=&custom.dfpURLEncoded=https%3A%2F%2Fwww.chilevision.cl%2Fsenal-online&custom.dfpRandomNumber=8774707083&custom.origen=chilevision&custom.iu=%2F99911224%2Fchilevision%2Flive%2Fsenal-online%2Flive&custom.app=false&custom.cust_params=sect%253Dlive%2526sub%253Dsenal-online%2526show%253Dsenal-online%2526videotype%253Dlive%2526cat%253Dlive%2526vidid%253D%2526site%253Dchilevision%2526app%253Dfalse%2526theme%253Dge&custom.amp=false&custom.appname=');
}
function channelTrece(){
    player.setAttribute('src','https://mdstrm.com/live-stream/5f2d60b6e6e8357a6a4d8b4d?access_token=y6DYHyoii6nhkverf0qKhShA8KYVr2EVyfSaLWzdwP5ZNovAIdKaTUVJ6qLABiDd0u8SOkuKc1e&autoplay=true');
}

function channelTtrece(){
    player.setAttribute('src','https://www.youtube.com/embed/aqPIiyPI10c?autoplay=1&controls=0');
}

function channelTvEducaChile(){
    player.setAttribute('src','https://mdstrm.com/live-stream/5aaabe9e2c56420918184c6d?jsapi=true&autoplay=true&controls=true&volume=100&player=57f40bb4dc5b9f3075c49cfe&access_token=&mse=true&custom.preroll=&custom.overlay=');
}


var item = document.getElementById("video");
var live = document.getElementById("live");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{
   live.setAttribute("style", "opacity:0;")
}

function func1()
{  
    live.setAttribute("style", "opacity:1;")
}

window.onload = () => {
    const player9 = document.getElementById('player-9')
    player9.setAttribute('src','https://www.youtube.com/embed/JYC0kvUlVXo?autoplay=1');
}