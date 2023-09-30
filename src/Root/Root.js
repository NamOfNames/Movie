const searchInput = document.getElementById("search-input");
const movieImage = document.querySelector(".movie-image");
const movieList = document.getElementById("movies-list");
const account = document.getElementById("account");
const login = document.getElementById("login");
const poster = null;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d93534d06fmshde2150e51c0bfebp1e76a5jsn9d6cfe389f06",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

searchInput.addEventListener("change", (event) => {
  fetch(
    `https://imdb8.p.rapidapi.com/title/find?q=${event.target.value}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      movieList.innerHTML = "";
      types = [];
      length = data.results.length;
      for (let i = 0; i < length; i++) {
        if (data.results[i].titleType == "movie") {
          types.push(data.results[i]);
        }
      }
      for (let i = 0; i < types.length; i++) {
        const images = document.createElement("img");
        const titles = document.createElement("button");
        const list = document.createElement("a");
        list.id = i;
        titles.id = types[i].id;
        titles.innerText = types[i]["title"];
        images.src = types[i].image.url;
        titles.classList.add("poster-titles");
        images.classList.add("poster-images");
        list.classList.add("poster");
        document.getElementById("movies-list").append(list);
        document.getElementById([i]).append(images);
        document.getElementById([i]).append(titles);
        movieID = document.getElementById(types[i].id);
        let link = document.getElementById([i]);
        link.addEventListener("click", () => {
          let id = JSON.stringify(types[i].id);
          localStorage.setItem("id_firm", id);
          link.href = "../Root/Detail/Info.html";
        });
      }
    });
});

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
  location.href = "index.html";
  Account_login();
}
