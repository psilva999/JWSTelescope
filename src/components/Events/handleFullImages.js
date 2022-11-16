export function openScreenAlbum(e) {
  const arrayContainer = [...document.querySelectorAll('.container-images')],
        arrayAlbum = [...document.querySelectorAll('.container-images img')],

        arrayFullScreenAlbum = [...document.querySelectorAll(".fullscreen-image")],
        fullImages = document.querySelectorAll('.fullscreen-image article img'),
        arrayFullAlbum = [...fullImages]

  let containerPosition = Number(arrayContainer.indexOf(e.target.parentNode)),
      imgPosition = Number(arrayAlbum.indexOf(e.target))

  if (!arrayFullScreenAlbum[containerPosition].classList.contains("active")) {
    fullImages.forEach(img => img.classList.remove("active"))

    if (containerPosition === 0) 
      arrayFullAlbum[imgPosition].classList.add("active")

    if (containerPosition === 1) 
      arrayFullAlbum[imgPosition].classList.add("active")

    if (containerPosition === 2) 
      arrayFullAlbum[imgPosition].classList.add("active")

    arrayFullScreenAlbum[containerPosition].classList.add("active")
    arrayFullScreenAlbum[containerPosition].style.animation = 'opacity-one .2s linear forwards'
  }
}

export function closeScreenAlbum(e) {
  const fullScreenAlbum = document.querySelector(".fullscreen-image.active")

  if (e.target.id === 'fullscreen-image' || e.target.id === 'close') {
    fullScreenAlbum.style.animation = 'opacity-zero .1s linear forwards'

    let tempo = 1,
        container = setInterval(countdown, 100)

    function countdown() {
      tempo--

      if (tempo === 0) {
        fullScreenAlbum.classList.remove("active")
        clearInterval(container)
      }
    }
  }
}

export function nextImageAlbum() {
  const arrayFullScreenAlbum = [...document.querySelectorAll(".fullscreen-image")],
        fullImages = document.querySelectorAll('.fullscreen-image article img'),

        arrayFullAlbum = [...fullImages],
        activeImage = document.querySelector('.fullscreen-image article img.active')

  let arrayPosition = Number(arrayFullAlbum.indexOf(activeImage)),
      position = arrayPosition + 1

  activeImage.classList.remove('active')

  if (arrayFullScreenAlbum[0].classList.contains("active")) {
    if (position === 4) 
      arrayFullAlbum[0].classList.add('active')

    else 
      arrayFullAlbum[position].classList.add('active')
  }

  if (arrayFullScreenAlbum[1].classList.contains("active")) {
    if (position === 8) 
      arrayFullAlbum[4].classList.add('active')

    else 
      arrayFullAlbum[position].classList.add('active')
  }

  if (arrayFullScreenAlbum[2].classList.contains("active")) {
    if (position === 12) 
      arrayFullAlbum[8].classList.add('active')

    else 
      arrayFullAlbum[position].classList.add('active')
  }
}

export function prevImageAlbum() {
  const arrayFullScreenAlbum = [...document.querySelectorAll(".fullscreen-image")],
        fullImages = document.querySelectorAll('.fullscreen-image article img'),

        arrayFullAlbum = [...fullImages],
        activeImage = document.querySelector('.fullscreen-image article img.active')

  let arrayPosition = Number(arrayFullAlbum.indexOf(activeImage)),
      position = arrayPosition - 1

  activeImage.classList.remove('active')

  if (arrayFullScreenAlbum[0].classList.contains("active")) {
    if (position === -1) 
      arrayFullAlbum[3].classList.add('active')

    else 
      arrayFullAlbum[position].classList.add('active')
  }

  if (arrayFullScreenAlbum[1].classList.contains("active")) {
    if (position === 3) 
      arrayFullAlbum[7].classList.add('active')

    else 
      arrayFullAlbum[position].classList.add('active')
  }

  if (arrayFullScreenAlbum[2].classList.contains("active")) {
    if (position === 7) 
      arrayFullAlbum[11].classList.add('active')

    else 
      arrayFullAlbum[position].classList.add('active')
  }
}
