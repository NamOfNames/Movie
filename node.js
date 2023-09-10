const DEFAULT_VALUE = "--";
const searchInput = document.getElementById("search-input");
const movieImage = document.querySelector(".movie-image");

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
        types.push(data.results[0].image.url);
      }
	  movieImage.src = (types) || DEFAULT_VALUE
    });
});