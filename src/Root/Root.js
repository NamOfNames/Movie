const DEFAULT_VALUE = "--";
const searchInput = document.getElementById("search-input");
const movieImage = document.querySelector(".movie-image");
const movieName = document.querySelector(".movie-name")

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
      console.log(types)
      movieImage.src = types || DEFAULT_VALUE;
      movieName.innerHTML = data.results[0].title


      // const {results} = data;
      // for (let i = 0; i < results.length; i++) {
      //   console.log(results[i])
      //   movieImage.src = results[i].image.url
      // }
    });
});
