// const firstName = document.getElementById("first-name");


// firstName.addEventListener("input", (event) => {
//     if (firstName.validity.typeMismatch) {
//       firstName.setCustomValidity("I am expecting an e-mail address!");
//       firstName.reportValidity();
//     } else {
//       firstName.setCustomValidity("");
//     }
//   });

//   function myCode() {
//     if (firstName = "") {
//        return alert("Fill the form properly")
//     }
//   }

const nameErr = document.getElementById("name-error")

function validateForm() {
      if (nameErr == "" && nameErr.search(/[^A-Za-z\s]/) != -1) {
            return document.getElementById("name-error").innerHTML = "First Name cannot be empty."
            return false
      }
}