export function highLighter() {
  const backgroundAnimated = document.querySelectorAll(".background-detail"),
        arrayBackgroundDetail = [...backgroundAnimated]

  backgroundAnimated.forEach(detail => {
    if (detail.classList.contains('l-b'))
      handleBackground(0,'rgba(19,73,150,0)','rgba(19,73,150,.2)')

    else if (detail.classList.contains('l-b-2'))
      handleBackground(1,'rgba(19,73,150,0)','rgba(19,73,150,.2)')

    else if (detail.classList.contains('n-b'))
      handleBackground(2,'rgba(19,73,150,0)','#134996')

    else if (detail.classList.contains('n-y'))
      handleBackground(3,'rgba(19,73,150,0)','#FDA916')

    else if (detail.classList.contains('m-g'))
      handleBackground(4,'rgba(19,73,150,0)','#CFCFCF')

    else if (detail.classList.contains('n-b-2'))
      handleBackground(5,'rgba(19,73,150,0)','#134996')

    else if (detail.classList.contains('n-y-2'))
      handleBackground(6,'rgba(19,73,150,0)','#FDA916')

    else if (detail.classList.contains('m-g-2'))
      handleBackground(7,'rgba(19,73,150,0)','#CFCFCF')
  })

  function handleBackground(e, background1, background2) {
    let showBackgroundAnimated = window.innerHeight - 100,
        showTop = arrayBackgroundDetail[e].getBoundingClientRect().top

    if (showTop < showBackgroundAnimated && !arrayBackgroundDetail[e].classList.contains('active')) {
      arrayBackgroundDetail[e].classList.add("active")
      animation(e, background1, background2)

      if (arrayBackgroundDetail[e].classList.contains('n-b') || arrayBackgroundDetail[e].classList.contains('n-b-2'))   
        changeColor(e)
    }
  }

  function animation(e, background1, background2) {
    let transparent = 98,
        mainColor = 100,
        destacaBackground = setInterval(() => {
          transparentMainColor(e, background1, background2)
        }, 15)
      
    function transparentMainColor(e, background1, background2) {
      transparent--
      mainColor--
      
      arrayBackgroundDetail[e].style.background = 
      `linear-gradient(283deg,
        ${ background1 } ${ transparent }%, 
        ${ background2 } ${ mainColor }%)`

      if (transparent === 0 && mainColor === 0) {
        clearInterval(destacaBackground)
        arrayBackgroundDetail[e].style.background = 
        `linear-gradient(283deg,
        ${ background1 } 0%, 
        ${ background2 } 0%)`
      }

    }
  }

  function changeColor(e) {
    arrayBackgroundDetail[e].style.color = '#E9E8E8'
  }
}

export function highLighterHistory() {
  const backgroundAnimated = document.querySelectorAll(".background-detail-history"),
        arrayBackgroundDetail = [...backgroundAnimated]

  backgroundAnimated.forEach(detail => {
    if (detail.classList.contains('n-b-1'))
      handleBackground(0,'rgba(19,73,150,0)','#134996')

    else if (detail.classList.contains('n-b-2'))
      handleBackground(1,'rgba(19,73,150,0)','#134996')

    else if (detail.classList.contains('n-b-3'))
      handleBackground(2,'rgba(19,73,150,0)','#134996')

    else if (detail.classList.contains('n-b-4'))
      handleBackground(3,'rgba(19,73,150,0)','#134996')

    else if (detail.classList.contains('n-b-5'))
      handleBackground(4,'rgba(19,73,150,0)','#134996')
  })

  function handleBackground(e, background1, background2) {
    let showBackgroundAnimated = window.innerHeight - 100,
        showTop = arrayBackgroundDetail[e].getBoundingClientRect().top

    if (showTop < showBackgroundAnimated && !arrayBackgroundDetail[e].classList.contains('active')) {
      arrayBackgroundDetail[e].classList.add("active")
      animation(e, background1, background2)

      if (arrayBackgroundDetail[e].classList.contains('n-b') || arrayBackgroundDetail[e].classList.contains('n-b-2'))   
        changeColor(e)
    }
  }

  function animation(e, background1, background2) {
    let transparent = 98,
        mainColor = 100,
        destacaBackground = setInterval(() => {
          transparentMainColor(e, background1, background2)
        }, 15)
      
    function transparentMainColor(e, background1, background2) {
      transparent--
      mainColor--
      
      arrayBackgroundDetail[e].style.background = 
      `linear-gradient(283deg,
        ${ background1 } ${ transparent }%, 
        ${ background2 } ${ mainColor }%)`

      if (transparent === 0 && mainColor === 0) {
        clearInterval(destacaBackground)
        arrayBackgroundDetail[e].style.background = 
        `linear-gradient(283deg,
        ${ background1 } 0%, 
        ${ background2 } 0%)`
      }

    }
  }

  function changeColor(e) {
    arrayBackgroundDetail[e].style.color = '#E9E8E8'
  }
}