//signup front-end.

//============switching buttons=========
const signup = document.querySelector('.signup');
const login = document.querySelector('.login');
const signupLogin = document.querySelector('.signup-login');
const loginSignupBord = document.querySelector('.login-signup-bord');
const loginbord = document.querySelector('.login-bord');
const signupbord = document.querySelector('.signup-bord');

function switchToLogin(){
  signup.classList.remove('active');
  login.classList.add('active');
  signupLogin.classList.add('checked');
  loginSignupBord.classList.add('checked');
  loginbord.classList.remove('active');
  signupbord.classList.add('active');

  signupEmail.value = '';
  signupUsername.value = '';
  signupPassword.value = '';
  signupConfirmPassword.value = '';
  Errmessage.innerText = '';
};
function switchToSignup(){
  signup.classList.add('active');
  login.classList.remove('active');
  signupLogin.classList.remove('checked');
  loginSignupBord.classList.remove('checked');
  loginbord.classList.add('active');
  signupbord.classList.remove('active');

  loginEmail.value = '';
  loginPassord.value = '';
  ErrLogmessage.innerText = '';
};

//========Auth route=========
const signupEmail = document.getElementById("signup-email");
const signupUsername = document.getElementById("signup-username");
const signupPassword = document.getElementById("signup-password");
const signupConfirmPassword = document.getElementById("signup-confirm-password");
const Errmessage = document.getElementById("error-message");
const ErrLogmessage = document.getElementById("errorlog-message");

const loginEmail = document.getElementById("login-email");
const loginPassord = document.getElementById("login-password");

function timeout(){ 
  setTimeout(function removeErr(){
  Errmessage.innerText = '';
  ErrLogmessage.innerText = '';
  }, 3000)
};
function signupBtn(){
  if (!signupEmail.value || !signupUsername.value || !signupPassword.value || !signupConfirmPassword.value){
    Errmessage.innerText = "Please fill all fields";
    timeout();
  } else if(signupPassword.value !== signupConfirmPassword.value){
    Errmessage.innerText = "Passwords mismatch";
    signupPassword.value = '';
    signupConfirmPassword.value = '';
    timeout();
  } else{
    switchToLogin();
  }
};
function loginBtn(){
  if (!loginEmail.value || !loginPassord.value){
    ErrLogmessage.innerText = "Please fill all fields!";
    timeout();
  }
};