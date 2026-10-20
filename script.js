
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usernameInput = document.querySelector(
            'input[name="username"], input[type="text"]'
        );
        const passwordInput = document.querySelector(
            'input[name="password"], input[type="password"]'
        );

        if (!usernameInput || !passwordInput) {
            alert("Form login tidak ditemukan. Periksa index.html.");
            return;
        }

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value;

        // Login admin/laboran
        if (username === "admin" && password === "admin123") {
            alert("Login admin berhasil!");
            window.location.href = "laboran.html";
        }

        // Login siswa
        else if (username === "siswa" && password === "siswa123") {
            alert("Login siswa berhasil!");
            window.location.href = "dashboard.html";
        }

        // Akun tidak cocok
        else {
            alert("Username atau password salah!");
        }
    });
});
