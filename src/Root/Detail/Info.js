let id = localStorage.getItem("id_firm");
id = id.replace("title", "");
id = id.replace("//", "");
id = id.replace("/", "");

const DEFAULT_VALUE = "";
const movieImage = document.querySelector(".movie-image");
const movieType = document.querySelector(".movie-type");
const movieYear = document.querySelector(".movie-year");
const movieTitle = document.querySelector(".movie-title");
const movieTime = document.querySelector(".movie-running-time");
const imageBackground = document.querySelector(".background-image");
const movieRating = document.querySelector(".movie-rating");
const moviePlot = document.querySelector(".movie-plot");
const account = document.getElementById("account");
const login = document.getElementById("login");
const bookmarkMovie = document.querySelector(".bookmark");
const Storage_1 = [];
const Storage_2 = [];
const FinalStorage = [];
const poster = null;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "83fcb7fadfmshe81b9904851bb6dp18240bjsne87fa9e95105",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

function output() {
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-details?tconst=${JSON.parse(
      id
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      movieTitle.innerHTML = data.title || DEFAULT_VALUE;
      movieYear.innerHTML = data.year || DEFAULT_VALUE;
      movieTime.innerHTML = data.runningTimeInMinutes || DEFAULT_VALUE;
      movieType.innerHTML = data.titleType;
      movieImage.src = data.image.url || DEFAULT_VALUE;
      Storage_1.push(id);
      Storage_2.push(data.title);
      Storage_2.push(data.image.url);
      FinalStorage.push(Storage_1);
      FinalStorage.push(Storage_2);
    });
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-plots?tconst=${JSON.parse(
      id
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      moviePlot.innerHTML = data.plots[0].text || DEFAULT_VALUE;
    });
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-ratings?tconst=${JSON.parse(
      id
    )}&limit=25&region=US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      movieRating.innerHTML = data.rating || DEFAULT_VALUE;
    });
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-genres?tconst=${JSON.parse(
      id
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
    if (
      bookmarkMovie.style.cssText == "fill: black;" ||
      bookmarkMovie.style.cssText == ""
    ) {
      bookmarkMovie.style.fill = "yellow";
      SaveBookmark(FinalStorage);
    } else {
      bookmarkMovie.style.fill = "black";
      DeleteBookmark(FinalStorage);
    }
  } else {
    alert("Please log in to use the bookmark function");
  }
});

function clear_storage() {
  localStorage.removeItem("Bookmark");
}

function SaveBookmark(data) {
  var a = [];
  a = JSON.parse(localStorage.getItem("Bookmark")) || [];
  a.push(data);
  localStorage.setItem("Bookmark", JSON.stringify(a));
}

function DeleteBookmark(data) {
  var a = [];
  a = JSON.parse(localStorage.getItem("Bookmark")) || [];
  for (let i = 0; i < a.length; i++) {
    if (data == a[i]) {
      a.pop(i);
    }
  }
  localStorage.setItem("Bookmark", JSON.stringify(a));
}

function Bookmark() {
  flag = false;
  bookmark_movies = JSON.parse(localStorage.getItem("Bookmark"));
  for (let i = 0; i < bookmark_movies.length; i++) {
    if (id == bookmark_movies[i][0][0]) {
      flag = true;
    }
  }
  if (flag) {
    bookmarkMovie.style.fill = "yellow";
  } else {
    bookmarkMovie.style.fill = "black";
  }
}
