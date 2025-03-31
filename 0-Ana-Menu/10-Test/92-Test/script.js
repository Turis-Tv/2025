/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName("bandcamp-link");

for (var i = 0; i < bandcampLinks.length; i++) {
	bandcampLinks[i].addEventListener("click", function (e) {
		e.stopPropagation();
	});
}

let songElements = document.getElementsByClassName("song");

for (var i = 0; i < songElements.length; i++) {
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener("mouseover", function () {
		this.style.backgroundColor = "#00A0FF";

		this.querySelectorAll(".song-meta-data .song-title")[0].style.color =
			"#FFFFFF";
		this.querySelectorAll(".song-meta-data .song-artist")[0].style.color =
			"#FFFFFF";

		if (!this.classList.contains("amplitude-active-song-container")) {
			this.querySelectorAll(".play-button-container")[0].style.display = "block";
		}

		this.querySelectorAll("img.bandcamp-grey")[0].style.display = "none";
		this.querySelectorAll("img.bandcamp-white")[0].style.display = "block";
		this.querySelectorAll(".song-duration")[0].style.color = "#FFFFFF";
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener("mouseout", function () {
		this.style.backgroundColor = "#FFFFFF";
		this.querySelectorAll(".song-meta-data .song-title")[0].style.color =
			"#272726";
		this.querySelectorAll(".song-meta-data .song-artist")[0].style.color =
			"#607D8B";
		this.querySelectorAll(".play-button-container")[0].style.display = "none";
		this.querySelectorAll("img.bandcamp-grey")[0].style.display = "block";
		this.querySelectorAll("img.bandcamp-white")[0].style.display = "none";
		this.querySelectorAll(".song-duration")[0].style.color = "#607D8B";
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener("click", function () {
		this.querySelectorAll(".play-button-container")[0].style.display = "none";
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	songs: [
		{
			name: "A New Level",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319289/Audio/Music/Official%20Live%20101%20proof/1_-_A_New_Level_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Walk",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319287/Audio/Music/Official%20Live%20101%20proof/2_-_Walk_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Becoming",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319283/Audio/Music/Official%20Live%20101%20proof/3_-_Becoming_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "5 Minutes Alone",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319286/Audio/Music/Official%20Live%20101%20proof/4_-_5_Minutes_Alone_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Sandblasted Skin",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319284/Audio/Music/Official%20Live%20101%20proof/5_-_Sandblasted_Skin_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Suicide Note Pt. 2",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319274/Audio/Music/Official%20Live%20101%20proof/6_-_Su_cide_Note_Pt._2_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "War Nerve",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319255/Audio/Music/Official%20Live%20101%20proof/7_-_War_Nerve_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Strength Beyond Strength",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319262/Audio/Music/Official%20Live%20101%20proof/8_-_Strength_Beyond_Strength_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Domination Hollow",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319273/Audio/Music/Official%20Live%20101%20proof/9_-_Domination_Hollow_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "This Love",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319269/Audio/Music/Official%20Live%20101%20proof/10_-_This_Love_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "I'm Broken",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319263/Audio/Music/Official%20Live%20101%20proof/11_-_Im_Broken_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Cowboys From Hell",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319240/Audio/Music/Official%20Live%20101%20proof/12_-_Cowboys_From_Hell_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Cemetery Gates",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319258/Audio/Music/Official%20Live%20101%20proof/13_-_Cemetery_Gates_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Fucking Hostile",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319248/Audio/Music/Official%20Live%20101%20proof/14_-_Hostile_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "Where You Come From",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319261/Audio/Music/Official%20Live%20101%20proof/15_-_Where_You_Come_From_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "I Can't Hide",
			artist: "Pantera",
			album: "Official Live - 101 Proof",
			url:
				"https://res.cloudinary.com/foxygames/video/upload/v1608319240/Audio/Music/Official%20Live%20101%20proof/16_-_I_Cant_Hide_-_Official_Live_-_101_Proof.mp3"
		},
		{
			name: "BBC Radio 4 Extra",
			artist: "unknown",
			album: "Unknown",
			url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4extra_mf_p",
			live: true
		}
	],
	delay: 0000,
	callbacks: {
		play: function () {
			document.getElementById("album-art").style.visibility = "hidden";
			document.getElementById("large-visualization").style.visibility = "visible";
		},

		pause: function () {
			document.getElementById("album-art").style.visibility = "visible";
			document.getElementById("large-visualization").style.visibility = "hidden";
		}
	},
	waveforms: {
		sample_rate: 50
	}
});
document.getElementById("large-visualization").style.height =
	document.getElementById("album-art").offsetWidth + "px";