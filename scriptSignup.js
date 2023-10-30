document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('konfirmasiPassword');
    var registerButton = document.getElementById('masuk');

    function validateInputs() {
        var username = usernameInput.value;
        var email = emailInput.value;
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        // Validasi password minimal 6 karakter dan cocok dengan konfirmasi password
        var isPasswordValid = password.length >= 6 && password === confirmPassword;

        if (username !== '' && email !== '' && isPasswordValid) {
            registerButton.disabled = false; // Mengizinkan tombol daftar jika semua valid
        } else {
            registerButton.disabled = true; // Menonaktifkan tombol daftar jika validasi belum lengkap
        }
    }

    // Memantau setiap kali input berubah
    usernameInput.addEventListener('input', validateInputs);
    emailInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);
    confirmPasswordInput.addEventListener('input', validateInputs);

    // Memanggil fungsi validasi pada awalnya untuk memastikan keadaan awal
    validateInputs();

    // Menambahkan event click pada tombol "Daftar"
    registerButton.addEventListener('click', function(event) {
        event.preventDefault();

        var username = usernameInput.value;
        var email = emailInput.value;
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        if (username !== '' && email !== '' && password.length >= 6 && password === confirmPassword) {
            // Lakukan tindakan yang diinginkan setelah validasi terpenuhi
            console.log('Username: ' + username);
            console.log('Email: ' + email);
            console.log('Password: ' + password);
            console.log('Konfirmasi Password: ' + confirmPassword);

        }
    });
});
