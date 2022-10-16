import Jws from '../../assets/imgs/1-home/1-background-jws.jpg'
import Montagem from '../../assets/imgs/1-home/3-montagem.jpg'

export function changeImage() {
  const background = document.querySelector('.background-jws')

  if (window.scrollY >= 1000) background.src = Montagem

  else background.src = Jws
}