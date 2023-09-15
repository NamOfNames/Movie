let inputEmail = document.getElementById("email_input");
let inputPassword = document.getElementById("password_input");

let errorEmailNoti = document.getElementById("error_email_noti");
let errorPasswordNoti = document.getElementById("error_password_noti");

function validation() {
  let valueEmail = inputEmail.value;
  let valuePassword = inputPassword.value;

  if (valueEmail == "") {
    // check giá trị nhập vào của email có hay không
    errorEmailNoti.innerHTML = "Chưa Nhập Vào Email"; // thay đổi text của error
    errorEmailNoti.style = "color: red; display: block"; //thay đổi style của error
  } else if (!valueEmail.includes("@")) {
    // check email có dấu @ hay không
    errorEmailNoti.innerHTML = "Email không đúng định dạng";
    errorEmailNoti.style = "color: red; display: block";
  } else if (!valueEmail.includes(".")) {
    errorEmailNoti.innerHTML = "Email không đúng định dạng";
    errorEmailNoti.style = "color: red; display: block";
  } else if (valueEmail.includes("@") & valueEmail.includes(".")) {
    errorEmailNoti.style = "display:none";
  } else if (valuePassword == "") {
    errorPasswordNoti.innerHTML = "Chưa Nhập Vào Password";
    errorPasswordNoti.style = "color: red; display: block";
  } else {
    let linkHome = document.getElementById("linkHome");
    linkHome.href = "../index.html";
  }
}
