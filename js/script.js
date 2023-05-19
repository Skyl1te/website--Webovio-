var fadeInEls = document.querySelectorAll('.scroll-page');

function fadeIn() {
  for (var i = 0; i < fadeInEls.length; i++) {
    var boundingClientRect = fadeInEls[i].getBoundingClientRect();
    if (boundingClientRect.top <= window.innerHeight * 0.75) { 
      fadeInEls[i].style.opacity = 1;
    }
  }
}

fadeIn();

window.addEventListener('scroll', function() {
  fadeIn();
});