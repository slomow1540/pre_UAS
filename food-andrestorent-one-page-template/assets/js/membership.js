$(document).ready(function() {
    // Clear stored username and password on page load
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Function to check subscription status
    function checkSubscription() {
        
        let subscription = document.getElementById("subscriptionnnstatuss").textContent;
        if (subscription === 'monthly') {
            $('#subscription-status').text('Langganan Anda: Bulanan - $10 /// diskon makanan 5% di checkout');
            $(".langgananyangkerendah").text(5)
        } else if (subscription === 'yearly') {
            $('#subscription-status').text('Langganan Anda: Tahunan - $100 /// diskon makanan 10% di checkout');
            $(".langgananyangkerendah").text(10)
        } else {
            $('#subscription-status').text('Anda belum berlangganan.');
        }
    }

    // Check subscription status on page load
    checkSubscription();

    // Click event to show login form
    $('#show-login').click(function(e) {
        e.preventDefault();
        $('.form-container').removeClass('active');
        $('#login-form').addClass('active');
    });

    // Click event to show registration form
    $('#show-register').click(function(e) {
        e.preventDefault();
        $('.form-container').removeClass('active');
        $('#membership-form').addClass('active');
    });

    // Form submission for registration
    $('#register-form').submit(function(e) {
        e.preventDefault();
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Pendaftaran berhasil!');
        $('.form-container').removeClass('active');
        $('#login-form').addClass('active');
        $('#subscription-status').text('Anda belum berlangganan.');
    });

    // Form submission for login
    $('#login-form').submit(function(e) {
        e.preventDefault();
        let username = $('#login-username').val();
        let password = $('#login-password').val();
        let storedUsername = localStorage.getItem('username');
        let storedPassword = localStorage.getItem('password');

        if (storedUsername === null) {
            alert('Username tidak ditemukan!');
        } else if (username === storedUsername && password === storedPassword) {
            $('.form-container').removeClass('active');
            $('#dashboard').addClass('active');
            $('#member-name').text(username);
            checkSubscription(); // Update subscription status
        } else {
            alert('Username atau password salah!');
        }
    });

    // Logout button click event
    $('#logout').click(function() {
        $('.form-container').removeClass('active');
        $('#dashboard').removeClass('active');
        $('#login-form').addClass('active');
    });

    // Subscribe button click event
    $('#subscribe').click(function() {
        $('.form-container').removeClass('active');
        $('#subscription-form').addClass('active');
    });

    // Form submission for subscription
    $('#subscribe-form').submit(function(e) {
        e.preventDefault();
        let subscriptionType = $('#subscription-type').val();
        //subscriptionType
        document.getElementById("subscriptionnnstatuss").innerHTML=subscriptionType;
        if (subscriptionType === 'monthly') {
            alert('Anda berhasil berlangganan Bulanan - $10!');
        } else if (subscriptionType === 'yearly') {
            alert('Anda berhasil berlangganan Tahunan - $100!');
        }
        $('.form-container').removeClass('active');
        $('#dashboard').addClass('active');
        checkSubscription(); // Update subscription status
    });

    // Cancel subscription button click event
    $('#cancel-subscription').click(function() {
        $('.form-container').removeClass('active');
        $('#dashboard').addClass('active');
    });
});