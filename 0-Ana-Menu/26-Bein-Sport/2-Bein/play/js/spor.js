      	var url_string = window.location.href;
var url = new URL(url_string);
var cid = url.searchParams.get("id"); 
document.write(" <iframe  id='frame' name='frame' src='https://saraydorf.de/spor/player/webplayer/?s=https://bcovlive-a.akamaihd.net/"+cid+"/eu-central-1/6415845530001/playlist.m3u8' width='100%'  height='100%' frameborder='0' allowfullscreen scrolling='no'></iframe>");