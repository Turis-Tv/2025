window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "14 Year Recovery Celebrastion",
      "artist": "Prawesh B.",
      "album": "Birthday Celebration",
      "url": "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3", 
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "19 Year Recovery Celebrastion",
      "artist": "Kedar R.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/19 Years of Recovery Celebrastion (KedarR.).m4a", 
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    
    {
      "name": "2 Year Recovery Celebrastion",
      "artist": "Mahiva L..",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/2 Years of Recovery Celebration (Mahiva L.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "2 Year Recovery Celebrastion",
      "artist": "Manish R.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/2 Years of Recovery Celebration (Manish R.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "20 Year Recovery Celebrastion",
      "artist": "Sumit D.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/20 Years of Recovery Celebration (Sumit D.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
     "name": "Speaker Topic Meeting",
      "artist": "Yashoda R.",
      "album": "self worth & service",
      "url": "speakers Recodings/2023 service day speakers(Yashoda R.self worth & service).mp3",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "21 Year Recovery Celebrastion",
      "artist": "Kumar C.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/21 Years of Recovery Celebration (Kumar C.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "22 Year Recovery Celebrastion ",
      "artist": "Pradip P.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/22 Years of Recovery Celebrastion (Pradip P.).mp3",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     {
      "name": "3 Year Recovery Celebrastion ",
      "artist": "Sirsak k.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/3 Years of Recovery Celebration (Sirsak k.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "34 Year Recovery Celebrastion ",
      "artist": "Prasanna S.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/34 Years of Recovery Celebrastion (Prasanna S.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "8 Year Recovery Celebrastion ",
      "artist": "Uttam P.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/8 Years of Recovery Celebration (Uttam P.).mp3",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    
    {
      "name": "Speakers Topic Meeting ",
      "artist": "Buddha M.",
      "album": "Recover & Relaps ",
      "url": "speakers Recodings/Speakers Topic Meeting  (Buddha M. Recover & Relaps ).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
 {
      "name": "Speakers Topic Meeting ",
      "artist": "Prajal B.",
      "album": "Step 1,2,3",
      "url": "speakers Recodings/Speakers Topic Meeting  (Prajal B. Step 1,2,3 ).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
      "name": "Speakers Topic Meeting",
      "artist": "Umang U.",
      "album": "whos is an Addict",
      "url": "speakers Recodings/Speakers Topic Meeting  (Umag U. whos is an Addict ).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
     "name": "Speakers Topic Meeting",
      "artist": "Bhim D.",
      "album": "History Of ONMG",
      "url": "speakers Recodings/Speakers Topic Meeting (Bhim D. History Of ONMG).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     {
     "name": "Speakers Topic Meeting",
      "artist": "Bijay P.",
      "album": "Autonomy",
      "url": "speakers Recodings/Speakers Topic Meeting (Bijay P. Autonomy).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     {
     "name": "Speakers Topic Meeting",
      "artist": "Bikash G.",
      "album": "Giving It Away",
      "url": "speakers Recodings/Speakers Topic Meeting (Bikash G. Giving It Away).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
 {
     "name": "Speakers Topic Meeting",
      "artist": "Dhan P.",
      "album": "Sponsorship",
      "url": "speakers Recodings/Speakers Topic Meeting (Dhan P.Sponsorship).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
     "name": "Speakers Topic Meeting",
      "artist": "Ganga G.",
      "album": "Chapter 8 We Do Recover",
      "url": "speakers Recodings/Speakers Topic Meeting (Ganga G. Chapter 8 We Do Recover).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
      {
     "name": "Speakers Topic Meeting ",
      "artist": "Gopal L.",
      "album": "Tradition Six",
      "url": "speakers Recodings/Speakers Topic Meeting (Gopal L.Tradition Six).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     {
     "name": "Speakers Topic Meeting ",
      "artist": "Nirmal ",
      "album": "Step-7",
      "url": "speakers Recodings/Speakers Topic Meeting (Nirmal Step-7).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
   {
     "name": "Speakers Topic Meeting",
      "artist": "Pradip P. ",
      "album": "69 world unity day & 8th anniversaryof ONMG",
      "url": "speakers Recodings/Speakers Topic Meeting (Pradip P. 69 world unity day & 8th anniversaryof ONMG).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     {
     "name": "Speakers Topic Meeting",
      "artist": "Niraj G",
      "album": "Step Twelve",
      "url": "speakers Recodings/Speakers Topic Meeting(Niraj G UK Step Twelve ).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
     "name": "Speakers Topic Meeting",
      "artist": "Oman G.",
      "album": "6th Sponsorship Day",
      "url": "speakers Recodings/Speakers Topic Meeting-Sponsorship Day  (Oman G. What Does Sponsee do ).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    {
     "name": "Gopal L Chair ",
      "artist": "Kumar C.",
      "album": "6th Sponsorship day Interaction",
      "url": "speakers Recodings/Sponsorship day Interaction.m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     {
     "name": "22 Year Recovery Celebrastion",
      "artist": "Avilekh C.",
      "album": "Birthday Celebration",
      "url": "speakers Recodings/22 Years of Recovery Celebrastion (Avilekh S.).m4a",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    
     {
     "name": "Tradition-6",
      "artist": "Hem Dhan P.",
      "album": "Speakers Topic Meeting ",
      "url": "https://docs.google.com/uc?export=download&id=1OPDIlBvbQSqfJJkAZRb4THnAbGksQpsJ",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    
     {
     "name": "Step-Five",
      "artist": "Nisshan G.",
      "album": "Speakers Topic Meeting ",
      "url": "https://docs.google.com/uc?export=download&id=12Tsqe2zqjo9pBWPuE_B9qo6k8SmAGVMz",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
    
    {
     "name": "Test",
      "artist": "Test.",
      "album": "Test ",
      "url": "https://drive.google.com/file/d/1bPUp0Y2MfucnCv5IabXM7ZWM7wRUyIxh/preview",
      "cover_art_url": "https://www.onlinenepalimeeting.org/Untitled.png"
    },
     
    
   
  ]
});