var songsToAdd = [
  {
    "name": "Love Story",
    "artist": "Taylor Swift",
    "album": "Key",
    "url": "https://521dimensions.com/songs/Terrain-pglost.mp3",
    "cover_art_url": "https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc"
  },
  {
    "name": "Cruel Summer",
    "artist": "Taylor Swift ",
    "album": "Guidance",
    "url": "https://521dimensions.com/songs/Vorel-RussianCircles.mp3",
    "cover_art_url": "https://cdns-images.dzcdn.net/images/cover/6111c5ab9729c8eac47883e4e50e9cf8/500x500.jpg"
  },
  {
    "name": "Lover",
    "artist": "Taylor Swift",
    "album": "Die Digital",
    "url": "https://521dimensions.com/songs/IntroSweetGlory-Jimkata.mp3",
    "cover_art_url": "https://cdns-images.dzcdn.net/images/cover/6111c5ab9729c8eac47883e4e50e9cf8/500x500.jpg"
  },
  {
    "name": "You belong with me",
    "artist": "Taylor Swift ",
    "album": "We Are But Hunks of Wood Remixes",
    "url": "https://521dimensions.com/songs/Offcut6-LittlePeople.mp3",
    "cover_art_url": "https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc"
  },
  {
    "name": "I knew you were trouble",
    "artist": "Taylor Swift",
    "album": "Dusk To Dawn",
    "url": "https://521dimensions.com/songs/DuskToDawn-Emancipator.mp3",
    "cover_art_url": "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5"
  },
  {
    "name": "Bad Blood",
    "artist": "Taylor Swift",
    "album": "Soon It Will Be Cold Enough",
    "url": "https://521dimensions.com/songs/Anthem-Emancipator.mp3",
    "cover_art_url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png"
  }
];

Amplitude.init({
  "songs": [
    {
      "name": "Style",
      "artist": "Taylor Swift ",
      "album": "We Are to Answer",
      "url": "https://521dimensions.com/songs/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
      "cover_art_url": "https://cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/350x350.jpg"
    },
    {
      "name": "Blank Space",
      "artist": "Taylor Swift",
      "album": "Ask The Dust",
      "url": "https://521dimensions.com/songs/08 The Gun.mp3",
      "cover_art_url": "https://cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/350x350.jpg"
    },
    {
      "name": "Look what you made me do",
      "artist": "Taylor Swift",
      "album": "Anvil",
      "url": "https://521dimensions.com/songs/LORN - ANVIL.mp3",
      "cover_art_url": "https://media.newyorker.com/photos/599f41a4349dd46ec7f22efc/master/pass/Battan-Taylor-Swift-New-Single.jpg"
    },
    {
      "name": "Shake it off",
      "artist": "Taylor Swift",
      "album": "We Are to Answer",
      "url": "https://521dimensions.com/songs/ICameRunning-AncientAstronauts.mp3",
      "cover_art_url": "https://cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/350x350.jpg"
    },
    {
      "name": "Wildest Dreams",
      "artist": "Taylor Swift",
      "album": "Soon It Will Be Cold Enough",
      "url": "https://521dimensions.com/songs/FirstSnow-Emancipator.mp3",
      "cover_art_url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Taylor_Swift_-_Wildest_Dreams_%28Official_Single_Cover%29.png/220px-Taylor_Swift_-_Wildest_Dreams_%28Official_Single_Cover%29.png"
    }
  ]
});


/*
  Shows the playlist
*/
document.getElementsByClassName('show-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
  document.getElementById('white-player-playlist-container').style.display = "block";
});

/*
  Hides the playlist
*/
document.getElementsByClassName('close-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
  document.getElementById('white-player-playlist-container').style.display = "none";
});

/*
  Gets all of the add to playlist buttons so we can
  add some event listeners to actually add to playlist.
*/
var addToPlaylistButtons = document.getElementsByClassName('add-to-playlist-button');

for( var i = 0; i < addToPlaylistButtons.length; i++ ){
  /*
    Add an event listener to the add to playlist button.
  */
  addToPlaylistButtons[i].addEventListener('click', function(){
    var songToAddIndex = this.getAttribute('song-to-add');

    /*
      Adds the song to Amplitude, appends the song to the display,
      then rebinds all of the AmplitudeJS elements.
    */
    var newIndex = Amplitude.addSong( songsToAdd[ songToAddIndex ] );
    appendToSongDisplay( songsToAdd[ songToAddIndex ], newIndex );
    Amplitude.bindNewElements();

    /*
      Removes the container that contained the add to playlist button.
    */
    var songToAddRemove = document.querySelector('.song-to-add[song-to-add="'+songToAddIndex+'"]');
    songToAddRemove.parentNode.removeChild( songToAddRemove );
  });
}

/*
  Appends the song to the display.
*/
function appendToSongDisplay( song, index ){
  /*
    Grabs the playlist element we will be appending to.
  */
  var playlistElement = document.querySelector('.white-player-playlist');

  /*
    Creates the playlist song element
  */
  var playlistSong = document.createElement('div');
  playlistSong.setAttribute('class', 'white-player-playlist-song amplitude-song-container amplitude-play-pause');
  playlistSong.setAttribute('data-amplitude-song-index', index);

  /*
    Creates the playlist song image element
  */
  var playlistSongImg = document.createElement('img');
  playlistSongImg.setAttribute('src', song.cover_art_url);

  /*
    Creates the playlist song meta element
  */
  var playlistSongMeta = document.createElement('div');
  playlistSongMeta.setAttribute('class', 'playlist-song-meta');

  /*
    Creates the playlist song name element
  */
  var playlistSongName = document.createElement('span');
  playlistSongName.setAttribute('class', 'playlist-song-name');
  playlistSongName.innerHTML = song.name;

  /*
    Creates the playlist song artist album element
  */
  var playlistSongArtistAlbum = document.createElement('span');
  playlistSongArtistAlbum.setAttribute('class', 'playlist-song-artist');
  playlistSongArtistAlbum.innerHTML = song.artist+' &bull; '+song.album;

  /*
    Appends the name and artist album to the playlist song meta.
  */
  playlistSongMeta.appendChild( playlistSongName );

  /*
    Appends the song image and meta to the song element
  */
  playlistSong.appendChild( playlistSongImg );
  playlistSong.appendChild( playlistSongMeta );

  /*
    Appends the song element to the playlist
  */
  playlistElement.appendChild( playlistSong );
}