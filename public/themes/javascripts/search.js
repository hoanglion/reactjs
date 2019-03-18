$(function () {
    //Initialize Select2 Elements
    $('.select2').select2();
});
$(document).ajaxStart(function () {
    Pace.restart()
  });