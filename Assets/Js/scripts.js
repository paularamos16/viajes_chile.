// Tootips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('#quienes-somos', {
    duration: 2500,
    delay: 300
});

// Cambio de color al navbar:

window.addEventListener('scroll', function() {
  
  const scrollPosition = window.scrollY;


  const navbar = document.getElementById('naavbarr');

  if (scrollPosition > 400) {
    navbar.classList.add('navbar-color-change');
  } else {
    navbar.classList.remove('navbar-color-change');
  }
});


document.querySelector('.btn[data-bs-toggle="popover"]').addEventListener('click', function(e) {
  e.preventDefault();
});


$(document).ready(function(){
  $('[data-bs-toggle="popover"]').popover().on('shown.bs.popover', function(){
    var _this = this;
    setTimeout(function(){
      $(_this).popover('hide');
    }, 1600);
  });
});