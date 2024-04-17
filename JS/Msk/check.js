document.addEventListener('DOMContentLoaded', function() {
    // Periksa status login saat halaman dimuat
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn || isAdminLoggedIn !== 'true') {
        // Jika pengguna tidak login sebagai admin, redirect kembali ke halaman login
        window.location.href = 'login.html';
    }


    // System Logout
            const logoutBtn = document.getElementById('logoutBtn');
            
            logoutBtn.addEventListener('click', function() {
                // Hapus status login saat tombol logout ditekan
                localStorage.removeItem('isAdminLoggedIn');
                
                // Redirect kembali ke halaman login
                window.location.href = 'login.html';
            });
        
});
