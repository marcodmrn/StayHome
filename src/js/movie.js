import actionM1 from "../movies/actionM1.mp4";
import actionM2 from "../movies/actionM2.mp4";
import actionM3 from "../movies/actionM3.mp4";
import actionM4 from "../movies/actionM4.mp4";
import actionM5 from "../movies/actionM5.mp4";
import comedyM1 from "../movies/comedyM1.mp4";
import comedyM2 from "../movies/comedyM2.mp4";
import comedyM3 from "../movies/comedyM3.mp4";
// import comedyM4 from "../movies/comedyM4.mp4";
// import comedyM5 from "../movies/comedyM5.mp4";
import dramaM1 from "../movies/dramaM1.mp4";
import dramaM2 from "../movies/dramaM2.mp4";
// import dramaM3 from "../movies/dramaM3.mp4";
// import dramaM4 from "../movies/dramaM4.mp4";
// import dramaM5 from "../movies/dramaM5.mp4";
import horrorM1 from "../movies/horrorM1.mp4";
import horrorM2 from "../movies/horrorM2.mp4";
import horrorM3 from "../movies/horrorM3.mp4";
// import horrorM4 from "../movies/horrorM4.mp4";
// import horrorM5 from "../movies/horrorM5.mp4";
import romanceM1 from "../movies/romanceM1.mp4";
import romanceM2 from "../movies/romanceM2.mp4";
// import romanceM3 from "../movies/romanceM3.mp4";
// import romanceM4 from "../movies/romanceM4.mp4";
// import romanceM5 from "../movies/romanceM5.mp4";
import thrillerM1 from "../movies/thrillerM1.mp4";
import thrillerM2 from "../movies/thrillerM2.mp4";
import thrillerM3 from "../movies/thrillerM3.mp4";
// import thrillerM4 from "../movies/thrillerM4.mp4";
// import thrillerM5 from "../movies/thrillerM5.mp4";

const movies = document.getElementsByClassName("movie");
const video = document.querySelector(".video");
const modal = document.querySelector(".modalPlayer");
const nonModal1 = document.querySelector(".nonModal1");
const nonModal2 = document.querySelector(".nonModal2");
const nonModal3 = document.querySelector(".nonModal3");
const body = document.querySelector("body");
const slider = document.querySelector(".trending__slider");
const title = document.querySelector(".player__title");

for (var i = 0; i < movies.length; i++) {
  movies[i].addEventListener("click", function () {
    var movieID = event.target.getAttribute("data-movie");
    var movieN = event.target.getAttribute("data-movie-name");
    console.log(movieID);

    switch (movieID) {
      case "actionM1":
        openPlayer(actionM1, movieN);
        break;
      case "actionM2":
        openPlayer(actionM2, movieN);
        break;
      case "actionM3":
        openPlayer(actionM3, movieN);
        break;
      case "actionM4":
        openPlayer(actionM4, movieN);
        break;
      case "actionM5":
        openPlayer(actionM5, movieN);
        break;
      case "comedyM1":
        openPlayer(comedyM1, movieN);
        break;
      case "comedyM2":
        openPlayer(comedyM2, movieN);
        break;
      case "comedyM3":
        openPlayer(comedyM3, movieN);
        break;
      case "comedyM4":
        openPlayer(comedyM4, movieN);
        break;
      case "comedyM5":
        openPlayer(comedyM5, movieN);
        break;
      case "dramaM1":
        openPlayer(dramaM1, movieN);
        break;
      case "dramaM2":
        openPlayer(dramaM2, movieN);
        break;
      case "dramaM3":
        openPlayer(dramaM3, movieN);
        break;
      case "dramaM4":
        openPlayer(dramaM4, movieN);
        break;
      case "dramaM5":
        openPlayer(dramaM5, movieN);
        break;
      case "horrorM1":
        openPlayer(horrorM1, movieN);
        break;
      case "horrorM2":
        openPlayer(horrorM2, movieN);
        break;
      case "horrorM3":
        openPlayer(horrorM3, movieN);
        break;
      case "horrorM4":
        openPlayer(horrorM4, movieN);
        break;
      case "horrorM5":
        openPlayer(horrorM5, movieN);
        break;
      case "romanceM1":
        openPlayer(romanceM1, movieN);
        break;
      case "romanceM2":
        openPlayer(romanceM2, movieN);
        break;
      case "romanceM3":
        openPlayer(romanceM3, movieN);
        break;
      case "romanceM4":
        openPlayer(romanceM4, movieN);
        break;
      case "romanceM5":
        openPlayer(romanceM5, movieN);
        break;
      case "thrillerM1":
        openPlayer(thrillerM1, movieN);
        break;
      case "thrillerM2":
        openPlayer(thrillerM2, movieN);
        break;
      case "thrillerM3":
        openPlayer(thrillerM3, movieN);
        break;
      case "thrillerM4":
        openPlayer(thrillerM4, movieN);
        break;
      case "thrillerM5":
        openPlayer(thrillerM5, movieN);
        break;

      //
      default:
        console.log("Error");
    }
  });
}

function openPlayer(movieURL, movieN) {
  modal.style.display = "block";
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  nonModal1.style.display = "none";
  nonModal2.style.display = "none";
  nonModal3.style.display = "none";
  console.log(movieURL);
  video.setAttribute("src", movieURL);
  title.innerHTML = movieN;
  video.load();
  video.play();
}

var margin = -1080;
setInterval(function () {
  slider.style.marginLeft = margin + "px";
  console.log(margin);
  margin -= 1080;
  if (margin == -4320) {
    margin = 0;
  }
  // .animate({ marginLeft: "-1080px" }, 800, function () {
  //   this.css({ marginLeft: 0 }).find("li:last").after(this.find("li:first"));
  // });
}, 3500);
