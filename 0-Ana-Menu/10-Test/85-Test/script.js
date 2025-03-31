//<![CDATA[
Amplitude.init({"songs": [/*]]>*/
    
    {name: "Pegasus Fantasy", artist: "Mauren",url:"https://drive.google.com/uc?export=download&id=0B_iYLIn2GEFSdGxvWkluWndrWVU", cover_art_url: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d0/b6/53/d0b65393-44fb-9848-768b-16c0ecdbb6ea/artwork.jpg/268x0w.jpg"}
    
    , {name: "Come Sweet Death", artist: "Mauren",url: "https://docs.google.com/uc?export=download&id=1XkNJUYXcC197fiixOa8Vh_XeCO9w38F-", cover_art_url: "https://pm1.narvii.com/5987/b96ca2a581c3b96305c23842e5b0b793d67c1aaa_00.jpg"}
    
    /*<![CDATA[*/], "volume": 100});

document.getElementById('song-played-progress').addEventListener('click', function( e ){var offset = this.getBoundingClientRect();var x = e.pageX - offset.left; Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );});//]]>