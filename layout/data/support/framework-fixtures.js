document.documentElement.classList.add('fixture-js-ready');

document.addEventListener('DOMContentLoaded', function () {
  var meters = document.querySelectorAll('[data-fixture-width]');
  for (var i = 0; i < meters.length; i++) {
    meters[i].style.width = meters[i].getAttribute('data-fixture-width');
  }
});
