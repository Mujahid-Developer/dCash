const loginBtn = document.getElementById("login-btn");
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const authAlert = document.querySelector('.auth-alert')

loginBtn.addEventListener('click', function(){
    const getUserEmail = userEmail.value;
    const getUserPassword = userPassword.value;

    if (getUserEmail == "GuestUser" && getUserPassword == "dcash123") {
        window.location.href='bank.html'
      console.log("User is valid");
    } else {
      authAlert.style.display = 'block';
    }
})