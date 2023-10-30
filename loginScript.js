document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    
    if (password !== confirmPassword) {
        alert("Konfirmasi kata sandi tidak cocok. Silakan coba lagi.");
        return;
    }


    window.location.href = 'login.html';
});


document.querySelectorAll('.toggle-password svg').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.parentElement.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    });
});