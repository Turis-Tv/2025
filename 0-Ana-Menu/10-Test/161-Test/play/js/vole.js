      	var url_string = window.location.href;
var url = new URL(url_string);
var cid = url.searchParams.get("id"); 
document.write(" <iframe  id='frame' name='frame' src='https://dengetv53.live/channel?id="+cid+"' width='100%'  height='100%' frameborder='0' allowfullscreen scrolling='no' sandbox='none-popups allow-scripts allow-same-origin'></iframe>");



