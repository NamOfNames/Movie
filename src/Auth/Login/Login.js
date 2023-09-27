let inputEmail = document.getElementById("email_input");
let inputPassword = document.getElementById("password_input");

let errorEmailNoti = document.getElementById("error_email_noti");
let errorPasswordNoti = document.getElementById("error_password_noti");
let errorNoti = document.getElementById("error_noti");

function validation() {
  let valueEmail = inputEmail.value;
  let valuePassword = inputPassword.value;

  if (valueEmail == "") {
    // check giá trị nhập vào của email có hay không
    errorEmailNoti.innerHTML = "Chưa Nhập Vào Email"; // thay đổi text của error
    errorEmailNoti.style = "color: yellow; display: block"; //thay đổi style của error
  } else if (!valueEmail.includes("@")) {
    // check email có dấu @ hay không
    errorEmailNoti.innerHTML = "Email không đúng định dạng";
    errorEmailNoti.style = "color: yellow; display: block";
  } else if (!valueEmail.includes(".")) {
    errorEmailNoti.innerHTML = "Email không đúng định dạng";
    errorEmailNoti.style = "color: yellow; display: block";
  } else if (valueEmail.includes("@") & valueEmail.includes(".")) {
    errorEmailNoti.style = "display:none";
  } else if (valuePassword == "") {
    errorPasswordNoti.innerHTML = "Chưa Nhập Vào Password";
    errorPasswordNoti.style = "color: yellow; display: block";
  } else {
    let linkHome = document.getElementById("linkHome");
    linkHome.href = "../index.html";
  }
  if ((valueEmail != "") & (valuePassword != "")) {
    let retEmail = JSON.parse(localStorage.getItem("Email"));
    let retPassword = JSON.parse(localStorage.getItem("Password"));
    storage_num = retEmail.length;
    for (let i = 0; i < storage_num; i++) {
      if ((valueEmail == retEmail[i]) & (valuePassword == retPassword[i])) {
        Login();
      }
    }
  }
}

function Login() {
  localStorage.setItem("Login", true);
  let linkHome = document.getElementById("linkHome");
  linkHome.href = "/src/Root/index.html";
}
