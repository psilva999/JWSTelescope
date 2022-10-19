
let scrollPos = 0

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header-fixo')
  
  if (window.scrollY >= 34 && !header.classList.contains('journey')) {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
      header.style.animation = 'show-header .6s linear forwards'
    }
      
    else if (header.classList.contains("handle-menu")) {
      header.style.animation = 'hide-header .6s linear forwards'
    }
    
    scrollPos = (document.body.getBoundingClientRect()).top
  }
})