let inputName = document.getElementById("name_input");
let inputEmail = document.getElementById("email_input");
let inputPassword = document.getElementById("password_input");
let inputConfirmPassword = document.getElementById("confirm_password_input");

let errorNameNoti = document.getElementById("error_name_noti");
let errorEmailNoti = document.getElementById("error_email_noti");
let errorPasswordNoti = document.getElementById("error_password_noti");
let ConfirmPasswordNoti = document.getElementById("confirm_password_noti");

function validation() {
  let valueName = inputName.value;
  let valueEmail = inputEmail.value;
  let valuePassword = inputPassword.value;
  let valueConfirmPassword = inputConfirmPassword.value;

  if (valueName == "") {
    errorNameNoti.innerHTML = "Chưa Nhập Vào Họ và tên";
    errorNameNoti.style = "color: red; display: block";
  } else {
    errorNameNoti.style = "display: none";
  }

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
  } else {
    errorEmailNoti.style = "display: none"; // nếu những trường hợp trên đã đúng thì text error sẽ ẩn đi
  }

  if (valuePassword == "") {
    errorPasswordNoti.innerHTML = "Chưa Nhập Vào Password";
    errorPasswordNoti.style = "color: red; display: block";
  } else {
    errorPasswordNoti.style = "display: none";
  }

  if (valueConfirmPassword == "") {
    ConfirmPasswordNoti.innerHTML = "Mật khẩu không giống nhau";
    ConfirmPasswordNoti.style = "color: red; display: block";
  } else if (valuePassword != valueConfirmPassword) {
    ConfirmPasswordNoti.innerHTML = "Mật khẩu không giống nhau";
    ConfirmPasswordNoti.style = "color: red; display: block";
  } else if (valuePassword == valueConfirmPassword) {
    ConfirmPasswordNoti.innerHTML = "Mật khẩu giống nhau";
    ConfirmPasswordNoti.style = "color: green; display: block";
  } else {
    ConfirmPasswordNoti.style = "display: none";
  }
}
