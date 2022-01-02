const loginBtn = document.getElementById("login-btn");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const authAlert = document.querySelector(".auth-alert");


// User Autentication
loginBtn.addEventListener("click", function () {
  const getUserEmail = userEmail.value;
  const getUserPassword = userPassword.value;

  if (getUserEmail == "GuestUser" && getUserPassword == "dcash123") {
    window.location.href = "bank.html";
    console.log("User is valid");
  } else {
    authAlert.style.display = "block";
  }
});

// Get User Diposit input Value

function getDipositAmount() {
  const userDipositAmount = document.getElementById("diposit-amount");
  const showDipositAmount = document.getElementById("show-diposit");
  const showBalanceAmount = document.getElementById("show-balance");
  // Empty case condition
  if (userDipositAmount.value !== "") {
    const parseUserDipositAmount = parseInt(userDipositAmount.value);
    const parseDipositAmount = parseInt(showDipositAmount.textContent);
    console.log(parseDipositAmount);
    showDipositAmount.textContent = parseDipositAmount + parseUserDipositAmount;
    const parseBalanceAmount = parseInt(showBalanceAmount.textContent);
    showBalanceAmount.textContent = parseBalanceAmount + parseUserDipositAmount;
    userDipositAmount.value = "";
    const toastLive = document.getElementById("diposit-toast");
    const toast = new bootstrap.Toast(toastLive);
    toast.show();
  } else {
    const toastLive = document.getElementById("warning-toast");
    const toast = new bootstrap.Toast(toastLive);
    toast.show();
  }
}

// Get User Withdraw input Value

function getWithdrawAmount() {
  const userWithdrawAmount = document.getElementById("withdraw-amount");
  const showWithdrawAmount = document.getElementById("show-withdraw");
  const showBalanceAmount = document.getElementById("show-balance");

  // Empty case condition
  if (userWithdrawAmount.value !== "") {
    const parseUserDipositAmount = parseInt(userWithdrawAmount.value);
    const parseDipositAmount = parseInt(showWithdrawAmount.textContent);
    showWithdrawAmount.textContent =
      parseDipositAmount + parseUserDipositAmount;
    const parseBalanceAmount = parseInt(showBalanceAmount.textContent);
    showBalanceAmount.textContent = parseBalanceAmount - parseUserDipositAmount;
    userWithdrawAmount.value = "";
    const toastLive = document.getElementById("withdraw-toast");
    const toast = new bootstrap.Toast(toastLive);
    toast.show();
  } else {
    const toastLive = document.getElementById("warning-toast");
    const toast = new bootstrap.Toast(toastLive);
    toast.show();
  }
}
