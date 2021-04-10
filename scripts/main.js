// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll').click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});

$('#contact-form-submit').on('click', function () {
  var data = {
    name: $('input[name="name"]').val(),
    subject: $('input[name="Subject"]').val(),
    replyto: $('input[name="_replyto"]').val(),
    message: $('textarea[name="message"]').val(),
  };

  Object.keys(data).forEach(function (key) {
    if (data[key] == '') return false;
  });

  $.ajax({
    url: 'https://formspree.io/f/xyylylpl',
    method: 'POST',
    data: data,
    dataType: 'json',
  });

  $('.alert-success').addClass('alert-success-show');
  $('#contact-form').trigger('reset');
  return false;
});
