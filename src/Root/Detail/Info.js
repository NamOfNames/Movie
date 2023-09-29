let id = localStorage.getItem("id_firm");
id_2 = id.replace("title", "");
id_3 = id_2.replace("//", "");
id_4 = id_3.replace("/", "");

const movieImage = document.querySelector(".movie-image");
const movieYear = document.querySelector(".movie-year");
const movieTitle = document.querySelector(".movie-title");
const movieTime = document.querySelector(".movie-running-time");
const imageBackground = document.querySelector(".background-image");
const movieRating = document.querySelector(".movie-rating");
const moviePlot = document.querySelector(".movie-plot");
const account = document.getElementById("account");
const login = document.getElementById("login");
const bookmarkMovie = document.querySelector(".bookmark");
const poster = null;
Bookmark_storage = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d1393cad79msh5498c9e4663e756p1e23a7jsnb5cb58b163fd",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

function output() {
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-details?tconst=${JSON.parse(
      id_4
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      movieTitle.innerHTML = data.title || DEFAULT_VALUE;
      movieYear.innerHTML = data.year || DEFAULT_VALUE;
      movieTime.innerHTML = data.runningTimeInMinutes || DEFAULT_VALUE;
      movieImage.src = data.image.url || DEFAULT_VALUE;
    });
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-plots?tconst=${JSON.parse(
      id_4
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      moviePlot.innerHTML = data.plots[0].text || DEFAULT_VALUE;
    });
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-ratings?tconst=${JSON.parse(
      id_4
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      movieRating.innerHTML = data.rating || DEFAULT_VALUE;
    });
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-genres?tconst=${JSON.parse(
      id_4
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      genre_num = data.length;
      for (let i = 0; i < genre_num; i++) {
        const genre = document.createElement("p");
        genre.id = i;
        genre.innerText = data[i];
        document.getElementById("genre").append(genre);
      }
    });
}

function moveInfo() {
  location.href = "./Info.html";
}

function Account_login() {
  key = JSON.parse(localStorage.getItem("Login"));
  if (key) {
    login.style = "display: none";
    account.style = "display: block";
  } else {
    login.style = "display: block";
    account.style = "display: none";
  }
}

function Account_logout() {
  localStorage.setItem("Login", false);
  location.href = "Info.html";
  Account_login();
}

bookmarkMovie.addEventListener("click", function onClikc() {
  key = JSON.parse(localStorage.getItem("Login"));
  if (key) {
    console.log(bookmarkMovie.style.cssText);
    if (
      bookmarkMovie.style.cssText == "fill: black;" ||
      bookmarkMovie.style.cssText == ""
    ) {
      bookmarkMovie.style.fill = "yellow";
    } else {
      bookmarkMovie.style.fill = "black";
    }
  } else {
    alert("Please log in to use the bookmark function");
  }
});

function clear_storage() {
  localStorage.clear();
}

function SaveBookmark(data) {
  var a = [];
  a = JSON.parse(localStorage.getItem("Bookmark")) || [];
  a.push(data);
  localStorage.setItem("Bookmark", JSON.stringify(a));
}
