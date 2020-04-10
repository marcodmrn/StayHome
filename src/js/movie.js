const movies = document.getElementsByClassName("movie");

for (var i = 0; i < movies.length; i++) {
  movies[i].addEventListener("click", function () {
    var movieURL = event.target.getAttribute("data-movie");
    openPlayer(movieURL);
  });
}

function openPlayer(movieURL) {
  // var urlQuery = encodeURIComponent("");
  location.replace("player.html?movieURL=" + movieURL + "&load=true");
}
