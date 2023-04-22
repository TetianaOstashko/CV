document.addEventListener('DOMContentLoaded', function() {
  let photo = document.querySelector('.photo');
  let isLarge = false;
  photo.classList.remove('photo-animation');
  
  photo.addEventListener('click', function() {
    if (!isLarge) {
      photo.classList.add('photo-animation');
      isLarge = true;
    } else {
      photo.classList.remove('photo-animation');
      isLarge = false;
    }
  });
});

window.addEventListener('load', function() {
  document.addEventListener('keydown', function(event) {
    if (event.key.match(/^[a-z]$/)) {
      event.preventDefault();
      let letter = event.key.toUpperCase();
      let section = document.querySelector('h2 span.nav-letter[textContent="' + letter + '"]').parentNode;
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});  
