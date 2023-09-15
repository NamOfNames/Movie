const DEFAULT_VALUE = "--";
const searchInput = document.getElementById("search-input");
const movieImage = document.querySelector(".movie-image");
const movieList = document.getElementById("movies-list");
const node = document.createNodeIterato;

const url = "https://imdb8.p.rapidapi.com/title/find?q=spiderman";
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
      console.log(data.results);
      types = [];
      length = data.results.length;
      for (let i = 0; i < length; i++) {
        if (data.results[i].titleType == "movie") {
          types.push(data.results[i]);
        }
      }
      console.log(types);
      console.log(types[0].title);
      for (let i = 0; i < types.length; i++) {
        let images = document.createElement("img");
        let titles = document.createElement("p");
        images.id = i;
        titles.id = i;
        titles.innerText = types[i]["title"];
        images.src = types[i].image.url;
        titles.classList.add("title-name");
        images.classList.add("images");
        document.getElementById("movies-ilst").append(images);
        document.getElementById("movies-list").append(titles);
      }
    });
});
