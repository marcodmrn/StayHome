const movies = document.getElementsByClassName("movie");

for (var i = 0; i < movies.length; i++) {
  movies[i].addEventListener("click", function () {
    var movieURL = event.target.getAttribute("data-movie");
    openPlayer(movieURL);
  });
}

function openPlayer(url) {
  location.replace("player.html");
}
