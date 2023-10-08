const searchInput = document.getElementById("search-input");
const movieImage = document.querySelector(".movie-image");
const movieList = document.getElementById("movies-list");
const account = document.getElementById("account");
const login = document.getElementById("login");
const poster = null;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "83fcb7fadfmshe81b9904851bb6dp18240bjsne87fa9e95105",
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
      console.log(data);
      movieList.innerHTML = "";
      WatchMovie = [];
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].name !== undefined) {
          WatchMovie.push(data.results[i]);
        }
      }
      for (let i = 0; i < WatchMovie.length; i++) {
        const images = document.createElement("img");
        const titles = document.createElement("button");
        const list = document.createElement("a");
        list.id = i;
        titles.id = WatchMovie[i].name;
        titles.innerText = WatchMovie[i]["name"];
        images.src = WatchMovie[i].image.url;
        titles.classList.add("poster-titles");
        images.classList.add("poster-images");
        list.classList.add("poster");
        document.getElementById("movies-list").append(list);
        document.getElementById([i]).append(images);
        document.getElementById([i]).append(titles);
        movieID = document.getElementById(WatchMovie[i].id);
        let link = document.getElementById([i]);
        link.addEventListener("click", () => {
          let id = JSON.stringify(WatchMovie[i].id);
          localStorage.setItem("name_firm", id);
          link.href = "../ActorDetail/AcDetail.html";
        });
      }
    });
});

function moveInfo() {
  location.href = "./Info.html";
  target = "_blank";
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
