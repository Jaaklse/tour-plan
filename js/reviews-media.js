var image = document.querySelector('.packages__image--big');
console.log(image)
var infoBig = document.querySelector('.packages-info--big');
var roomBig = document.querySelector('.packages-info__room--big');

window.addEventListener('resize', function () {
  if (window.innerWidth <= 409) {
    image.classList.remove('packages__image--big');
    image.classList.add('packages__image--basic');
    infoBig.classList.remove('packages-info--big');
    infoBig.classList.add('packages-info--basic');
    roomBig.classList.remove('packages-info__room--big');
    roomBig.classList.add('packages-info__room--basic');
  } else {
    image.classList.remove('packages__image--basic');
    image.classList.add('packages__image--big');
    infoBig.classList.remove('packages-info--basic');
    infoBig.classList.add('packages-info--big');
    roomBig.classList.remove('packages-info__room--basic');
    roomBig.classList.add('packages-info__room--big');
  }
});