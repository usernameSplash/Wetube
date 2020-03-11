const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumnBtn = document.getElementById("jsVolumeButton");
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

function handleVolumnClick() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumnBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        videoPlayer.muted = true;
        volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

function goFullScreen() {
    videoContainer.webkitRequestFullscreen();
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrnBtn.removeEventListener("click", goFullScreen);
    // eslint-disable-next-line no-use-before-define
    fullScrnBtn.addEventListener("click", exitFullScreen);
}

function exitFullScreen() {
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrnBtn.addEventListener("click", goFullScreen);
    fullScrnBtn.removeEventListener("click", exitFullScreen);
    document.webkitExitFullscreen();
}

function init() {
    playBtn.addEventListener("click", handlePlayClick);
    volumnBtn.addEventListener("click", handleVolumnClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
    init();
}
