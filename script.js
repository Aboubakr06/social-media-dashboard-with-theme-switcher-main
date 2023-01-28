let EmailInp = document.querySelector(".email__input");
let ValidBtn = document.querySelector(".valid");
let ValidMsg = document.querySelector(".valid-msg");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

ValidBtn.addEventListener("click", function () {
    checkEmail()
});

function checkEmail() {
    if (!EmailInp.value.match(mailformat)) {
        EmailInp.style.border = "1px solid red";
        ValidMsg.style.color = "red";
        ValidMsg.innerHTML = "Please enter a valid email address";
        
    } else {
        EmailInp.style.border = "";
        EmailInp.value = ""
        ValidMsg.style.color = "green";
        ValidMsg.innerHTML = "Success! Please check your email";
    }
}
