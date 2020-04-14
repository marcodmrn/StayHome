import actionM1 from "../movies/actionM1.mp4";
import actionM2 from "../movies/actionM2.mp4";

const movies = document.getElementsByClassName("movie");
const video = document.querySelector(".video");
const modal = document.querySelector(".modalPlayer");
const nonModal1 = document.querySelector(".nonModal1");
const nonModal2 = document.querySelector(".nonModal2");
const nonModal3 = document.querySelector(".nonModal3");
const body = document.querySelector("body");
const slider = document.querySelector(".trending__slider");

for (var i = 0; i < movies.length; i++) {
  movies[i].addEventListener("click", function () {
    var movieID = event.target.getAttribute("data-movie");
    console.log(movieID);

    switch (movieID) {
      case "actionM1":
        openPlayer(actionM1);
        break;
      case "actionM2":
        openPlayer(actionM2);
        break;
      default:
        console.log("Error");
    }
  });
}

function openPlayer(movieURL) {
  modal.style.display = "block";
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  nonModal1.style.display = "none";
  nonModal2.style.display = "none";
  nonModal3.style.display = "none";
  console.log(movieURL);
  video.setAttribute("src", movieURL);
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

// hover
// for (var i = 0; i < movies.length; i++) {
//   movies[i].addEventListener("mouseover", function () {
//     if (event.target.tagName == "DIV") {
//       event.target.firstElementChild.style.opacity = 1;
//       event.target.style.opacity = 0.3;
//     } else {
//       event.target.parentElement.style.opacity = 0.3;
//       event.target.style.opacity = 1;
//     }
//   });
// }

// for (var i = 0; i < movies.length; i++) {
//   movies[i].addEventListener("mouseout", function () {
//     event.target.style.opacity = 1;
//     event.target.firstElementChild.style.opacity = 0;
//   });
// }
