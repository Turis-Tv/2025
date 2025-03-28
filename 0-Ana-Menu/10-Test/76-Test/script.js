var mainContainer=document.getElementById('main-container');
var musicPlayer=document.getElementById('music-player');
var musicPlaylist=document.getElementById('music-playlist');

{/* <div class="player-section">
<audio id="play-audio" src="https://mp3kulisi.mobi/indir/seyda-karadeniz/vefa-2011/seyda-karadeniz-eyvah-ogul.mp3"></audio>
<img class="player-cover-image" src="https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg"/>

<div id="progress-wrapper">
    <div id="progress">    </div>
</div>
//----------------
<div id="button-wrapper">
    <i class="fas fa-random"></i>
    <i class="fas fa-step-backward"></i>
    <!-- <i class="far fa-play-circle"></i> -->
    <i class="far fa-pause-circle"></i>
    <i class="fas fa-step-forward"></i>
    <i class="fas fa-history"></i>
</div>
<h1>Music Track</h1>
</div> */}

function createMusicPlayer(obj,i){
    var playerSection = document.createElement('div');
    playerSection.className="player-section";

    var audioPlay=document.createElement('audio');
    audioPlay.id="play-audio";
    audioPlay.src= obj.file;
    playerSection.appendChild(audioPlay);

    var playerCoverImage= document.createElement('img');
    playerCoverImage.src=obj.albumCover;
    playerCoverImage.className="player-cover-image";
    playerSection.appendChild(playerCoverImage);
    //------------------------------progress
    var progressWrapper=document.createElement('div');
    progressWrapper.id="progress-wrapper";
    var progress=document.createElement('div');
    progress.id="progress";
    progressWrapper.appendChild(progress);
    playerSection.appendChild(progressWrapper);

//     <div id="button-wrapper">
//     <i class="fas fa-random"></i>
//     <i class="fas fa-step-backward"></i>
//     <!-- <i class="far fa-play-circle"></i> -->
//     <i class="far fa-pause-circle pause-button"></i>
//     <i class="fas fa-step-forward"></i>
//     <i class="fas fa-history"></i>
// </div>
var buttonWrapper=document.createElement('div');
buttonWrapper.id="button-wrapper";


var randomBtn=document.createElement('i');
randomBtn.className="fas fa-random";
buttonWrapper.appendChild(randomBtn);

randomBtn.onclick=function(){
    var randomSrc= Math.floor((Math.random() * responseArray.length) + 1);
        if (i == 00 || i < responseArray.length) {
            i = randomSrc;
            handleForwordBackword([i]);
        }
        // i = randomSrc;
        //     handleForwordBackword([i]);
}

//------------------------------------backword function--
// musicplayer.js:83 Uncaught TypeError: Cannot read property 'file' of undefined
//     at handleForwordBackword (musicplayer.js:83)
//     at HTMLElement.stepBackward.onclick (musicplayer.js:122)
//if use this
// i--;
//     handleForwordBackword([i]);

var stepBackward=document.createElement('i');
stepBackward.className="fas fa-step-backward";
buttonWrapper.appendChild(stepBackward);
stepBackward.onclick=function(){
    if (i > 0 && i < responseArray.length - 1) {  
        console.log(responseArray[i]);
        i--
        handleForwordBackword([i])
    } else {
        i = responseArray.length - 1;
        handleForwordBackword([i])
    }
    
}
//----------------------------------------play button----
var playBtn=document.createElement('i');
playBtn.className="far fa-play-circle";
buttonWrapper.appendChild(playBtn);

playBtn.onclick=function(){
    audioPlay.play();
    audioPlay.ontimeupdate= function(){
        var progressPercentage = (audioPlay.currentTime / audioPlay.duration) * 100;
            progress.style.width = progressPercentage + '%';
    }
}
//------------------------------------------pause button---
var pauseBtn=document.createElement('i');
pauseBtn.className="far fa-pause-circle";
pauseBtn.classList.add('pause-button');
buttonWrapper.appendChild(pauseBtn);

pauseBtn.onclick=function(){
    audioPlay.pause();
}


function handleForwordBackword(){
    audioPlay.src="https://mp3kulisi.mobi/indir/seyda-karadeniz/vefa-2011/seyda-karadeniz-eyvah-ogul.mp3";
    audioPlay.src=responseArray[i].file;
    audioPlay.currentTime = 0;
    playerCoverImage.src="";
    playerCoverImage.src= responseArray[i].albumCover;
    trackName.innerHTML="";
    trackName.innerHTML=responseArray[i].track;

    audioPlay.play();
    audioPlay.ontimeupdate= function(){
        var progressPercentage = (audioPlay.currentTime / audioPlay.duration) * 100;
            progress.style.width = progressPercentage + '%';
    }

}

var forwardBtn=document.createElement('i');
forwardBtn.className="fas fa-step-forward";
buttonWrapper.appendChild(forwardBtn);

forwardBtn.onclick=function(){
    if(i< responseArray.length-1){
        i++;
        handleForwordBackword([i]);
    }else{
        i=0;
        handleForwordBackword([i]);
    }
}
// if(audioPlay.currentTime==audioPlay.duration){
//     i=i+1;
//     handleForwordBackword([i]);
// }

var repeatBtn=document.createElement('i');
repeatBtn.className="fas fa-history";
buttonWrapper.appendChild(repeatBtn);
repeatBtn.onclick=function(){
    audioPlay.currentTime=0;
    audioPlay.loop=true;
}

playerSection.appendChild(buttonWrapper);
musicPlayer.appendChild(playerSection);

var trackName=document.createElement('h1');
trackName.innerHTML=obj.track;
// trackName.classsName="track-name";
playerSection.appendChild(trackName);

return playerSection;

}

var responseArray
var xhttp=new XMLHttpRequest();
apiEndpoint="https://raw.githubusercontent.com/Turis-Tv/Application/refs/heads/main/playlist.txt";
xhttp.open( "GET",apiEndpoint,true);
xhttp.onreadystatechange=function(){
    if(this.readyState===4){
        // console.log(this.responseText);
        responseArray=JSON.parse(this.responseText);
        console.log(responseArray);
        for(i=0; i<responseArray.length;i++){
            musicPlaylist.appendChild(createPlaylistItems(responseArray[i],i));

        }
        musicPlayer.appendChild(createMusicPlayer(responseArray[0],0));
    }
}
xhttp.send();

{/* <div class="playlist"> 
            <img class="playlist-album-cover" src="https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg" />
            <div>
                <h3>Track</h3>
                <p>Artist</p>
            </div>  
        </div> */}

function createPlaylistItems(obj,pos){
 var playlistItems=document.createElement('div');
 playlistItems.className="playlist";
 //----------------------
 playlistItems.onclick=function(){
    musicPlayer.innerHTML="";
    // console.log(musicPlayer.innerHTML);
    musicPlayer.appendChild(createMusicPlayer(responseArray[pos],pos));
    var playSong=document.getElementById('play-audio');
    playSong.play();
    var progress=document.getElementById('progress');
    playSong.ontimeupdate=function(){
        var progressPercentage = (playSong.currentTime / playSong.duration) * 100;
            progress.style.width = progressPercentage + '%';
    }
 }

 var playlistAlbumCover=document.createElement('img');
 playlistAlbumCover.className="playlist-album-cover";
 playlistAlbumCover.src= obj.albumCover;
 playlistItems.appendChild(playlistAlbumCover);
var sectionDiv=document.createElement('div');
var track=document.createElement('h3');
track.innerHTML=obj.track;
sectionDiv.appendChild(track);
var artist=document.createElement('h4');
artist.innerHTML=obj.artist;
sectionDiv.appendChild(artist);
playlistItems.appendChild(sectionDiv);

return playlistItems;

}