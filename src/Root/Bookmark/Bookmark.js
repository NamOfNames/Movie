const MovieBookmark = document.getElementById("bookmark-list");

bookmarkMovie = JSON.parse(localStorage.getItem("Bookmark"));

bookmarkMovieID = [];
bookmarkMovieTitle = [];
bookmarkMovieImage = [];

function Output_Bookmark() {
  for (i = 0; i < bookmarkMovie.length; i++) {
    const images = document.createElement("img");
    const titles = document.createElement("button");
    const list = document.createElement("a");
    list.id = i;
    titles.id = bookmarkMovie[i][0];
    titles.innerText = bookmarkMovie[i][1][0];
    images.src = bookmarkMovie[i][1][1];
    titles.classList.add("poster-titles");
    images.classList.add("poster-images");
    list.classList.add("poster");
    document.getElementById("bookmark-list").append(list);
    document.getElementById([i]).append(images);
    document.getElementById([i]).append(titles);
    num = parseInt(bookmarkMovie[i]);
    let link = document.getElementById([i]);
    link.addEventListener("click", () => {
      let id = JSON.stringify(titles.id);
      localStorage.setItem("id_firm", titles.id);
      link.href = "/src/Root/Detail/Info.html";
    });
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
  location.href = "Bookmark.html";
  Account_login();
}
