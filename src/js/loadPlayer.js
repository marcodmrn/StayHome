const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const load = urlParams.get("load");
const movieURL = urlParams.get("movieURL");
var wrapper = document.querySelector(".wrapper");
wrapper.innerHTML =
  '<video autoplay class="video"><source src="' +
  movieURL +
  '" type="video/mp4" /> Please update your browser.</video>';
var video = document.querySelector(".video");
video.load();
video.play();
