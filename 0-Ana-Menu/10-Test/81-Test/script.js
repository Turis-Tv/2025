var songsToAdd = [
  {
    "name": "Alemcisin",
    "artist": "Ahmet Ayverdi",
    "album": "Ahmet Ayverdi",
    "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-alemcisin.mp3",
    "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
  },
  {
    "name": "Bitirdin Beni",
    "artist": "Ahmet Ayverdi",
    "album": "Ahmet Ayverdi",
    "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054142.mp3",
    "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
  },
  {
    "name": "Emret Güzelim",
    "artist": "Ahmet Ayverdi",
    "album": "Ahmet Ayverdi",
    "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054143.mp3",
    "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
  },
  {
    "name": "Kul Feryadı",
    "artist": "Ahmet Ayverdi",
    "album": "Ahmet Ayverdi",
    "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054144.mp3",
    "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
  },
  {
    "name": "Nasıl Aşık Olmam Sana",
    "artist": "Ahmet Ayverdi",
    "album": "Ahmet Ayverdi",
    "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054145.mp3",
    "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
  },
  {
    "name": "Sen Yanarsın Ben Yanarım",
    "artist": "Ahmet Ayverdi",
    "album": "Ahmet Ayverdi",
    "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054146.mp3",
    "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
  }

  
  
  
  
  
  
  
  
  
];

Amplitude.init({
  "songs": [
    {
      "name": "♫ Alemcisin",
      "artist": "Ahmet Ayverdi",
      "album": "Ahmet Ayverdi",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-alemcisin.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "♫  Sev Yeter",
      "artist": "Ahmet Ayverdi",
      "album": "Ahmet Ayverdi",
      "url": "https://cdn.muzikmp3indir.com/mp3_files/b6d61d4f562162f97e20c42fb1ed97d9.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "♫  Geceler",
      "artist": "Ahmet Ayverdi",
      "album": "Ahmet Ayverdi",
      "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054178.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "♫  Acıların Kadını",
      "artist": "Ahmet Ayverdi",
      "album": "Ahmet Ayverdi",
      "url": "https://cdn.muzikmp3indir.com/mp3_files/4523433fe1c6431e45d8b5a910eba9c4.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "♫  Seveceksen Gel",
      "artist": "Ahmet Ayverdi",
      "album": "Ahmet Ayverdi",
      "url": "https://audios.tmgrup.com.tr/724_dinle/songs/S_054170.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
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
  playlistSongMeta.appendChild( playlistSongArtistAlbum );

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