$(document).ready(function() {
  $('a[href^="http"]').attr('target', '_blank');

  $('.sg-pattern-body a[href^="https://github.com/phase2/phase2-brand-stylekit/blob/"]').css({
    'text-align': 'right',
    'display': 'block',
    'font-size': '0.85em'
  });
});
