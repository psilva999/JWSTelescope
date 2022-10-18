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
