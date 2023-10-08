let name_id = localStorage.getItem("name_firm");
name_id = name_id.replace("name", "");
name_id = name_id.replace("//", "");
name_id = name_id.replace("/", "");

const DEFAULT_VALUE = "";
const actorImage = document.querySelector(".actor-image");
const actorBirthDate = document.querySelector(".birthdate");
const actorBirthPlace = document.querySelector(".birthplace");
const actorName = document.querySelector(".actor-name");
const actorGender = document.querySelector(".actor-gender");
const actorHeight = document.querySelector(".actor-height");
const actorBio = document.querySelector(".bio");
const account = document.getElementById("account");
const login = document.getElementById("login");
const bookmarkMovie = document.querySelector(".bookmark");
const Storage_1 = [];
const Storage_2 = [];
const FinalStorage = [];
const poster = null;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "83fcb7fadfmshe81b9904851bb6dp18240bjsne87fa9e95105",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

function output() {
  fetch(
    `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${JSON.parse(name_id)}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      actorImage.src = data.image.url;
      actorName.innerHTML = data.name;
      actorBirthDate.innerHTML = data.birthDate;
      actorBirthPlace.innerHTML = data.birthPlace;
      actorGender.innerHTML = data.gender;
      actorHeight.innerHTML = data.heightCentimeters;
      actorBio.innerHTML = data.miniBios[0].text;
    });
}

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
  location.href = "Info.html";
  Account_login();
}
