function showTotalMark() {
  let firstName = document.getElementById("InputFirstName").value;
  let lastName = document.getElementById("InputLastName").value;
  let email = document.getElementById("InputEmail").value;
  let phone = document.getElementById("InputPhone").value;
  let info = document.getElementById("infotext").value;

  let check = 1;

  if (firstName == "") {
    document.getElementById("firstnamewrong").innerHTML = "First Name Empty";
    check = 0;
  } else {
    document.getElementById("firstnamewrong").innerHTML = "";
  }

  if (lastName == "") {
    document.getElementById("lasttNameWrong").innerHTML = "Last Name Empty";
    check = 0;
  } else {
    document.getElementById("lasttNameWrong").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("emailwrong").innerHTML = "Email Empty";
    check = 0;
  } else {
    document.getElementById("emailwrong").innerHTML = "";
  }

  if (phone == "") {
    document.getElementById("phoneWrong").innerHTML = "Phone Number Empty";
    check = 0;
  } else {
    document.getElementById("phoneWrong").innerHTML = "";
  }

  if (info == "") {
    document.getElementById("wrongifo").innerHTML = "Info Empty";
    check = 0;
  } else {
    document.getElementById("wrongifo").innerHTML = "";
  }

  if (check == 1) {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", info);
  }

  return false;
}
