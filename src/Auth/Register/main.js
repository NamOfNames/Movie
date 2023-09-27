let inputName = document.getElementById("name_input");
let inputEmail = document.getElementById("email_input");
let inputPassword = document.getElementById("password_input");
let inputConfirmPassword = document.getElementById("confirm_password_input");

let errorNameNoti = document.getElementById("error_name_noti");
let errorEmailNoti = document.getElementById("error_email_noti");
let errorPasswordNoti = document.getElementById("error_password_noti");
let ConfirmPasswordNoti = document.getElementById("confirm_password_noti");

Info_storage = [];

function validation() {
  let valueName = inputName.value;
  let valueEmail = inputEmail.value;
  let valuePassword = inputPassword.value;
  let valueConfirmPassword = inputConfirmPassword.value;
  var atposition = valueEmail.indexOf("@");
  var dotposition = valueEmail.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= valueEmail.length
  ) {
    errorEmailNoti.style = "color: yellow; display: block";
  }

  if (valueName == "") {
    errorNameNoti.innerHTML = "Chưa Nhập Vào Họ và tên";
    errorNameNoti.style = "color: yellow; display: block";
  } else {
    errorNameNoti.style = "display: none";
  }

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
  } else {
    errorEmailNoti.style = "display: none"; // nếu những trường hợp trên đã đúng thì text error sẽ ẩn đi
  }

  if (valuePassword == "") {
    errorPasswordNoti.innerHTML = "Chưa Nhập Vào Password";
    errorPasswordNoti.style = "color: yellow; display: block";
  } else {
    errorPasswordNoti.style = "display: none";
  }

  if (valueConfirmPassword == "" || valuePassword != valueConfirmPassword) {
    ConfirmPasswordNoti.innerHTML = "Mật khẩu không giống nhau";
    ConfirmPasswordNoti.style = "color: yellow; display: block";
  } else {
    ConfirmPasswordNoti.style = "display: none";
  }

  if (
    (valueName != "") &
    (valueEmail != "") &
    (valuePassword == valueConfirmPassword)
  ) {
    console.log("YES SIR");
    Info_storage.push(valueEmail, valuePassword);
    console.log(Info_storage);
    localStorage.setItem("Email", Info_storage);
  }
}
