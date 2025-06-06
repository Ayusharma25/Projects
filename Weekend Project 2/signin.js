const mobile = document.getElementById("mobile");
const signinButton = document.getElementById('signin-button');

const signin = (e) => {
    e.preventDefault();
    const mobileStored = sessionStorage.getItem("mobile");
    if (mobileStored === mobile.value) {
        window.location.assign("./index.html");
    } else {
        alert("Invalid mobile number. Please sign up first.");
    }
}

signinButton.addEventListener('click', (e) => {signin(e)});