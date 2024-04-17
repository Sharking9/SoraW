document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Bandingkan dengan data login admin yang tersimpan
    if (username === 'admin' && password === '123') {
        alert('Login berhasil!');
        // Simpan status login
        localStorage.setItem('isAdminLoggedIn', 'true');
        window.location.href = 'dashboard.html'; // Redirect ke halaman dashboard
    } else {
        alert('Username atau password salah!');
    }
});
