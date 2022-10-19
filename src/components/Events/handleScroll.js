import Jws from '../../assets/imgs/1-home/1-background-jws.jpg'
import Montagem from '../../assets/imgs/1-home/3-montagem.jpg'

export function changeImage() {
  const background = document.querySelector('.background-jws')

  if (window.scrollY >= 1000) background.src = Montagem

  else background.src = Jws
}

export function handleTop() {
  const scrollTop = document.querySelector('.volta-pro-topo'),
        subscribe = document.querySelector(".subscribe")

  if (window.scrollY === 0) {
    scrollTop.classList.remove('active')
    subscribe.classList.remove("active")
  }

  else if (window.scrollY >= 420 && !scrollTop.classList.contains("active") && !subscribe.classList.contains("active")) {
    scrollTop.classList.add('active')
    subscribe.classList.add("active")
  }
}

export function handleHeader() {
  const header = document.querySelector('.header-fixo'),
        logo = document.querySelector(".header-fixo .logo")

  if (window.scrollY >= 34) {
    if (!header.classList.contains("fixed")) {

      let handleMenu = setInterval(hideMenu, 1000),
          tempo = 3

      header.classList.add('fixed')
      header.classList.add("journey")

      header.style.animation = 'small-header .1s linear forwards'
      logo.style.animation = 'small-logo .3s linear forwards'

      function hideMenu() {
        tempo--

        if (tempo === 0) {
          if (header.classList.contains('fixed')) {
            header.style.animation = 'hide-header .6s linear forwards'
          }
          
          header.classList.add("handle-menu")
          header.classList.remove("journey")

          clearInterval(handleMenu)
        }
      }

    }
  }

  else {
    header.classList.remove('fixed')
    header.classList.remove('journey')
    header.classList.remove('handle-menu')

    header.style.animation = 'large-header .1s linear forwards'
    logo.style.animation = 'large-logo .2s linear forwards'
  }
}
