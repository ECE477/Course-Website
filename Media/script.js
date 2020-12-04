window.onload = function() {

	// Video
	var video = document.getElementById("video");
	var video2 = document.getElementById("video2");

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	var playButton2 = document.getElementById("play-pause2");
	var muteButton2 = document.getElementById("mute2");
	var fullScreenButton2 = document.getElementById("full-screen2");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

	var seekBar2 = document.getElementById("seek-bar2");
	var volumeBar2 = document.getElementById("volume-bar2");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
		}
	});
	playButton2.addEventListener("click", function() {
		if (video2.paused == true) {
			// Play the video
			video2.play();

			// Update the button text to 'Pause'
			playButton2.innerHTML = "Pause";
		} else {
			// Pause the video
			video2.pause();

			// Update the button text to 'Play'
			playButton2.innerHTML = "Play";
		}
	});


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.innerHTML = "Mute";
		}
	});
	muteButton2.addEventListener("click", function() {
		if (video2.muted == false) {
			// Mute the video
			video2.muted = true;

			// Update the button text
			muteButton2.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video2.muted = false;

			// Update the button text
			muteButton2.innerHTML = "Mute";
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});

	fullScreenButton2.addEventListener("click", function() {
		if (video2.requestFullscreen) {
			video2.requestFullscreen();
		} else if (video2.mozRequestFullScreen) {
			video2.mozRequestFullScreen(); // Firefox
		} else if (video2.webkitRequestFullscreen) {
			video2.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});
	seekBar2.addEventListener("change", function() {
		// Calculate the new time
		var time = video2.duration * (seekBar2.value / 100);

		// Update the video time
		video2.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});
	video2.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video2.duration) * video2.currentTime;

		// Update the slider value
		seekBar2.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});
	seekBar2.addEventListener("mousedown", function() {
		video2.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});
	seekBar2.addEventListener("mouseup", function() {
		video2.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
	volumeBar2.addEventListener("change", function() {
		// Update the video volume
		video2.volume = volumeBar2.value;
	});
}