const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScrnBtn = document.getElementById("jsFullScreen");

function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function handleVolumeClick() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

function exitFullScreen() {
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrnBtn.addEventListener("click", goFullScreen);
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function goFullScreen() {
    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
    }
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", exitFullScreen);
}

function init() {
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
    init();
}
