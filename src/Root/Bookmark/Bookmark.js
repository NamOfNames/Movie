const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d1393cad79msh5498c9e4663e756p1e23a7jsnb5cb58b163fd",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

bookmarkMovie = JSON.parse(localStorage.getItem("Bookmark"));

function Output_Bookmark() {
  for (i = 0; i < bookmarkMovie.length; i++) {
    if (bookmarkMovie[i] != null) {
      id = bookmarkMovie[i].replace("title", "");
      id_2 = id.replace("//", "");
      id = id_2.replace("/", "");
      fetch(
        `https://imdb8.p.rapidapi.com/title/get-details?tconst=${JSON.parse(
          id
        )}&limit=25&region=US`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
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
        });
    }
  }
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
