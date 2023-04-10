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