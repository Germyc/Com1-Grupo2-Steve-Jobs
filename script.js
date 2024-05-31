document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    document.getElementById('login-link').addEventListener('click', function () {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });
    
    document.getElementById('register-link').addEventListener('click', function () {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });
});

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.classList.toggle('active');
    registerForm.classList.toggle('active');
}
