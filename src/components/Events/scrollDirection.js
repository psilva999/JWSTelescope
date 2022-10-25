
let scrollPos = 0

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header-fixo'),
        li = document.querySelector('header ul li:nth-child(2)')
  
  if (window.scrollY >= 34 && !header.classList.contains('journey')) {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
      header.style.animation = 'show-header .6s linear forwards'
      li.classList.remove("hide")
    }
      
    else if (header.classList.contains("handle-menu")) {
      header.style.animation = 'hide-header .6s linear forwards'

      if (!li.classList.contains('hide'))
        li.classList.add("hide")
    }
    
    scrollPos = (document.body.getBoundingClientRect()).top
  }
})