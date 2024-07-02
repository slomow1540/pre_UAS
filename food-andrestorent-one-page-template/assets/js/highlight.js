$(document).ready(function() {
    // Ambil elemen slider
    var slider = document.getElementById("monthSlider");
  
    // Atur event listener untuk mengupdate label bulan saat nilai slider berubah
    slider.oninput = function() {
      var monthLabels = $(".month-labels span");
      var index = slider.value - 1; // Ambil index bulan berdasarkan nilai slider
      monthLabels.removeClass("active"); // Hapus kelas active dari semua label
      monthLabels.eq(index).addClass("active"); // Tambahkan kelas active pada label bulan saat ini
    };
  
    // Inisialisasi untuk memastikan label bulan Januari aktif pada awalnya
    $(".month-labels span:first-child").addClass("active");
  });
  