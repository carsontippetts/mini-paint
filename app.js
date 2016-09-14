
$(document).ready(function() {

  var color = 'white';
  var colors = 'white green red blue yellow';

$('.box').on('mouseover', function() {
  $(this).addClass(colors);
})

$('.box').on('dblclick', function() {
  $(this).removeClass(colors);
})

  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
})

$('#white').on('click', function() {
      color = 'white';
})

$('#red').on('click', function() {
    color = "red";
})

$('#blue').on('click', function() {
  color = 'blue';
})

$('#green').on('click', function() {
  color = 'green';
})

$('#yellow').on('click', function() {
  color = 'yellow';
})


})
