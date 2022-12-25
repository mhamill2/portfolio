$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  });
});

// Smooth scroll for links with hashes
$('a.smooth-scroll').click(function (event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top
        },
        1000,
        function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          }
        }
      );
    }
  }
});

$('#contact-form').on('submit', function (event) {
  event.preventDefault();
  var data = {
    name: $('input[name="name"]').val(),
    subject: $('input[name="Subject"]').val(),
    replyto: $('input[name="_replyto"]').val(),
    message: $('textarea[name="message"]').val()
  };

  if (!data.name || !data.subject || !data.replyto || !data.message) {
    return false;
  }

  $.ajax({
    url: 'https://formspree.io/f/xyylylpl',
    method: 'POST',
    data: data,
    dataType: 'json'
  });

  $('.alert-success').addClass('alert-success-show');
  $('#contact-form').trigger('reset');
  return false;
});
