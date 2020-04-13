import actionM1 from "../movies/actionM1.mp4";
import actionM2 from "../movies/actionM2.mp4";

const movies = document.getElementsByClassName("movie");
const video = document.querySelector(".video");
const modal = document.querySelector(".modalPlayer");
const nonModal = document.querySelector(".nonModal");
const body = document.querySelector("body");

for (var i = 0; i < movies.length; i++) {
  movies[i].addEventListener("click", function () {
    var movieN = event.target.getAttribute("data-movie");
    console.log(movieN);

    switch (movieN) {
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
  // var urlQuery = encodeURIComponent("");
  modal.style.display = "block";
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  nonModal.style.display = "none";
  console.log(movieURL);
  video.setAttribute("src", movieURL);
}
