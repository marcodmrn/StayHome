import soundOn from "../img/sound.svg";
import soundOff from "../img/mute.svg";
import playIcon from "../img/play.svg";
import pauseIcon from "../img/pause.svg";

const video = document.querySelector(".video");
// const volumeUp = document.querySelector(".volume-up");
const play = document.querySelector(".play");
// const volumeDown = document.querySelector(".volume-down");
const forward = document.querySelector(".forward");
const backOff = document.querySelector(".backOff");
const sound = document.querySelector(".sound");
const volume = document.querySelector(".volume");
const progress = document.querySelector(".progress");
const screen = document.querySelector(".screen");
const modalP = document.querySelector(".modalPlayer");

// volumeDown.addEventListener("click", () => {
//   if (video.volume - 0.1 <= 0) {
//     video.volume = 0;
//   } else {
//     video.volume -= 0.1;
//   }
//   volume.value = video.volume * 100;
//   console.log(video.volume);
// });

// volumeUp.addEventListener("click", () => {
//   if (video.volume + 0.1 >= 1) {
//     video.volume = 1;
//   } else {
//     video.volume += 0.1;
//   }
//   volume.value = video.volume * 100;
//   console.log(video.volume);
// });
play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    play.innerHTML = "<img src=" + pauseIcon + " alt='pause video' />";
  } else {
    video.pause();
    play.innerHTML = "<img src=" + playIcon + " alt='play video' />";
  }
});

forward.addEventListener("click", () => {
  video.currentTime += 10;
});
backOff.addEventListener("click", () => {
  video.currentTime -= 10;
});

// comprhension de code
/* var progress = 0;
function move() {
  if (progress == 0) {
    progress = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
} */

// progress

video.addEventListener("timeupdate", function () {
  progress.value = video.currentTime / video.duration;
});

// sound mute/unmute

sound.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    sound.innerHTML = "<img src=" + soundOn + " alt='unmute volume' />";
  } else {
    video.muted = true;
    sound.innerHTML = "<img src=" + soundOff + " alt='mute volume' />";
  }
});

// function setvolume() {
//   video.volume = volume.value / 100;
// }

// sound controll through sound bar

volume.addEventListener("input", function () {
  video.volume = volume.value / 100;
  if (volume.value == 0) {
    sound.innerHTML = "<img src=" + soundOff + " alt='mute volume' />";
  } else {
    sound.innerHTML = "<img src=" + soundOn + " alt='unmute volume' />";
  }
});

screen.addEventListener("click", function () {
  if (modalP.requestFullscreen()) {
    //need to fix that
  } else {
    modalP.requestFullscreen();
  }
});
