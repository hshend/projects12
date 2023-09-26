
$(document).ready(function() {
  $('#content').mouseenter(function() {
    var currentLanguage = $('#content').text();

    if (currentLanguage === 'welcom to the web site') {
      $('#content').text('مرحبا بك في موقعنا');
    } else {
      $('#content').text('welcom to the web site');
    }
  });

  $('#content').mouseleave(function() {
    var currentLanguage = $('#content').text();

    if (currentLanguage === ' welcom to the web site') {
      $('#content').text(' welcom to the web site');
    } else {
      $('#content').text('مرحبا بك في موقعنا');
    }
  });
});