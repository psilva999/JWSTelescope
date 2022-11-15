export function handleAllScreenAlbum(e) {
  const allScreenProduct = document.querySelector(".all-screen-product"),
        allScreenImage = document.querySelectorAll('.all-screen-product article img'),

        arrayFullImages = [...allScreenImage],
        arrayProduct = [...document.querySelectorAll('.product img')]

  let arrayPosition = arrayProduct.indexOf(e.target)

  if (!allScreenProduct.classList.contains("active")) {
    allScreenImage.forEach(img => img.classList.remove("active"))
    arrayFullImages[arrayPosition].classList.add('active')

    allScreenProduct.classList.add("active")
    allScreenProduct.style.animation = 'opacity-one .2s linear forwards'
  }

  else if (e.target.id === 'all-screen-product' || e.target.id === 'close-product') {
    allScreenProduct.style.animation = 'opacity-zero .1s linear forwards'

    let tempo = 1,
        container = setInterval(countdown, 100)

    function countdown() {
      tempo--

      if (tempo === 0) {
        allScreenProduct.classList.remove('active')
        clearInterval(container)
      }
    }

  }
}

export function nextImageAlbum() {
  const allScreenImage = document.querySelectorAll('.all-screen-product article img'),
        arrayFullImages = [...allScreenImage],
        activeImage = document.querySelector('.all-screen-product article img.active')

  let arrayPosition = Number(arrayFullImages.indexOf(activeImage)),
      position = arrayPosition + 1

  activeImage.classList.remove('active')
  
  if (position === 4) 
    arrayFullImages[0].classList.add('active')

  else 
    arrayFullImages[position].classList.add('active')
}

export function prevImageAlbum() {
  const allScreenImage = document.querySelectorAll('.all-screen-product article img'),
        arrayFullImages = [...allScreenImage],
        activeImage = document.querySelector('.all-screen-product article img.active')

  let arrayPosition = Number(arrayFullImages.indexOf(activeImage)),
      position = arrayPosition - 1

  activeImage.classList.remove('active')
  
  if (position === -1) 
    arrayFullImages[3].classList.add('active')

  else 
    arrayFullImages[position].classList.add('active')
}
