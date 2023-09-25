const searchInput = document.getElementById("search-input");
const movieImage = document.querySelector(".movie-image");
const movieList = document.getElementById("movies-list");

const url = "https://imdb8.p.rapidapi.com/title/find?q=spiderman";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "83fcb7fadfmshe81b9904851bb6dp18240bjsne87fa9e95105",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

function clearAll() {
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
}

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
        let images = document.createElement("img");
        let titles = document.createElement("button");
        let list = document.createElement("div");
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
      }
    });
});

function moveInfo() {
  location.href = "./Info.html";
}
