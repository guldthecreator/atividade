
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAQK2yABuwHr8IziIHp0_xzO5khNpOCx0",
  authDomain: "sustains.firebaseapp.com",
  databaseURL: "https://sustains-default-rtdb.firebaseio.com",
  projectId: "sustains",
  storageBucket: "sustains.firebasestorage.app",
  messagingSenderId: "1059923109818",
  appId: "1:1059923109818:web:1f0b7324e2ce11ee96df83",
  measurementId: "G-XF7XP04PHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Utility Functions
function showPage(pageId) {
  // Hide all containers
  document.querySelectorAll('.container').forEach(container => {
    container.style.display = 'none';
  });
  // Show the selected container
  document.getElementById(pageId).style.display = 'block';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  document.getElementById('lengthCheck').classList.toggle('valid', hasLength);
  document.getElementById('upperCheck').classList.toggle('valid', hasUpper);
  document.getElementById('numberCheck').classList.toggle('valid', hasNumber);
  document.getElementById('specialCheck').classList.toggle('valid', hasSpecial);
  
  return hasLength && hasUpper && hasNumber && hasSpecial;
}

// Event Listeners
document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('recoveryEmail').value;
  const errorElement = document.getElementById('recoveryEmailError');
  const successElement = document.getElementById('recoverySuccess');
  
  if (!validateEmail(email)) {
    errorElement.style.display = 'block';
    successElement.style.display = 'none';
    return;
  }
  
  errorElement.style.display = 'none';
  successElement.style.display = 'block';
  
  setTimeout(() => {
    showPage('loginPage');
  }, 2000);
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
});
  let hasError = false;
  
  if (name.length < 3) {
    document.getElementById('nameError').style.display = 'block';
    hasError(error =>{
        console.log('mensagem de erro: ${error}')
    });
};

function showPage(pageId) {
  const pages = document.querySelectorAll('.container');
  pages.forEach(page => {
      page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  showPage('loginPage'); // Começar na página de login
});

function handleLogin(event) {
  event.preventDefault();
  // Adicione sua lógica de login aqui
  alert('Login realizado com sucesso!');
}

function handleForgotPassword(event) {
  event.preventDefault();
  const email = document.getElementById('recoveryEmail').value;
  if (validateEmail(email)) {
      document.getElementById('recoverySuccess').style.display = 'block';
      document.getElementById('recoveryEmailError').style.display = 'none';
  } else {
      document.getElementById('recoveryEmailError').style.display = 'block';
      document.getElementById('recoverySuccess').style.display = 'none';
  }
}

function handleRegister(event) {
  event.preventDefault();
  // Adicione sua lógica de registro aqui
  alert('Conta criada com sucesso!');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}