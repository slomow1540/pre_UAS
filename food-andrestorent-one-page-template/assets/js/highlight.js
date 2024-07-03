$(document).ready(function() {
  var $slider = $("#monthSlider");
  var $valueSlider = $(".value-slider");
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  $slider.on("input", function() {
      var index = $slider.val() - 1; 
      var $monthLabels = $(".month-labels span");
      $monthLabels.removeClass("active");
      $monthLabels.eq(index).addClass("active");
      $valueSlider.text(months[index]);
      
      $(".month-image").hide();
      $(".month-" + (index + 1)).show();
  });

  $(".month-labels span:first-child").addClass("active");
  $(".month-1").show();
});
