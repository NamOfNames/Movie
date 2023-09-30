const MovieBookmark = document.getElementById("bookmark-list");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d93534d06fmshde2150e51c0bfebp1e76a5jsn9d6cfe389f06",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

bookmarkMovie = JSON.parse(localStorage.getItem("Bookmark"));

let ImageData = [];
let TitleData = [];
let Store = [];

function Output_Bookmark(callback) {
  for (i = 0; i < bookmarkMovie.length; i++) {
    id = bookmarkMovie[i].replace("title", "");
    id = id.replace("//", "");
    id = id.replace("/", "");
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-details?tconst=${JSON.parse(id)}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        MovieBookmark.innerHTML = "";
        ImageData.push(data.image.url);
        TitleData.push(data.title);
        for (let i = 0; i < TitleData.length; i++) {
          const images = document.createElement("img");
          const titles = document.createElement("button");
          const list = document.createElement("a");
          list.id = i;
          titles.id = JSON.parse(id);
          titles.innerText = TitleData[i];
          images.src = ImageData[i];
          titles.classList.add("poster-titles");
          images.classList.add("poster-images");
          list.classList.add("poster");
          document.getElementById("bookmark-list").append(list);
          document.getElementById([i]).append(images);
          document.getElementById([i]).append(titles);
        }
      });
  }
  // movieID = document.getElementById(types[i].id);
  // let link = document.getElementById([i]);
  // link.addEventListener("click", () => {
  //   let id = JSON.stringify(types[i].id);
  //   localStorage.setItem("id_firm", id);
  //   link.href = "../Root/Detail/Info.html";
  // });
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
