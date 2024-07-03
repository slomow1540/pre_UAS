$(document).ready(function() {
    $('#commentForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var commentText = $('#commentText').val().trim();
        
        if (commentText === '') {
            alert('Harap tuliskan komentar Anda.');
            return;
        }
        
        // Simulasi menambah komentar ke dalam daftar komentar
        var commentHTML = '<div class="comment"><p>' + commentText + '</p><div class="meta">Diposting pada: ' + getCurrentDateTime() + '</div></div>';
        $('#commentList').prepend(commentHTML);
        
        // Reset form setelah komentar ditambahkan
        $('#commentText').val('');
    });
    
    // Fungsi untuk mendapatkan tanggal dan waktu saat ini
    function getCurrentDateTime() {
        var now = new Date();
        var date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        var time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
        return date + ' ' + time;
    }
});