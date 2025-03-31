Amplitude.init({
  "songs": [
    {
      "name": "Offcut #6",
      "artist": "Little People",
      "album": "We Are But Hunks of Wood Remixes",
      "url": "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
      "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
    },
    {
      "name": "Dusk To Dawn",
      "artist": "Emancipator",
      "album": "Dusk To Dawn",
      "url": "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
      "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
    }
  ]
});

document.getElementById('song-played-progress-1').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 0 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-2').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 1 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});