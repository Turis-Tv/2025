let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if( theme == 'dark' ){
    document.documentElement.classList.add('dark')
}

document.getElementById('dark-mode-toggle').addEventListener('click', function(){
   document.documentElement.classList.toggle('dark')
});



document.getElementById('song-saved').addEventListener('click', function(){
	document.getElementById('song-saved').classList.toggle('saved');
});


Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "callbacks": {
        timeupdate: function(){
            let percentage = Amplitude.getSongPlayedPercentage();

            if( isNaN( percentage ) ){
                percentage = 0;
            }

            /**
             * Massive Help from: https://nikitahl.com/style-range-input-css
             */
            let slider = document.getElementById('song-percentage-played');
            slider.style.backgroundSize = percentage + '% 100%';
        }
    },
    "songs": [
		{
			"name": "First Snow",
			"artist": "Emancipator",
			"album": "Soon It Will Be Cold Enough",
			"url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
		},
		{
			"name": "Intro / Sweet Glory",
			"artist": "Jimkata",
			"album": "Die Digital",
			"url": "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
		},
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
		},
		{
			"name": "Anthem",
			"artist": "Emancipator",
			"album": "Soon It Will Be Cold Enough",
			"url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
		}
    ]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};