const video = document.querySelector(".video");
const volumeUp = document.querySelector(".volume-up");
const play = document.querySelector(".play");
const volumeDown = document.querySelector(".volume-down");
const forward = document.querySelector(".forward");
const backOff = document.querySelector(".backOff");
const bar = document.querySelector(".bar");

volumeDown.addEventListener("click", () => {
  if (video.volume - 0.1 <= 0) {
    video.volume = 0;
  } else {
    video.volume -= 0.1;
  }
  console.log(video.volume);
});

volumeUp.addEventListener("click", () => {
  if (video.volume + 0.1 >= 1) {
    video.volume = 1;
  } else {
    video.volume += 0.1;
  }
  console.log(video.volume);
});
play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    console.log("bla");
  } else {
    video.pause();
  }
});

forward.addEventListener("click", () => {
  video.currentTime += 10;
});
backOff.addEventListener("click", () => {
  video.currentTime -= 10;
});

// video.addEventListener("timeupdate", () => {
//   const progress = video.currentTime / video.duration;
//   bar.style.transform = "scaleX(" + progress + ")";
// });

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
