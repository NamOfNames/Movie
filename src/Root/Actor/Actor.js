const searchInput = document.getElementById("search-input");
const acotImage = document.querySelector(".movie-image");
const actorList = document.getElementById("movies-list");
const poster = null;

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
        const images = document.createElement("img");
        const name = document.createElement("button");
        const list = document.createElement("div");
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
        movieID.options
      }
    });
});
