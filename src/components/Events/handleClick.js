export function faq() {
  const handleFaq = document.querySelectorAll('.faq dt'),
        arrayFaq = [...handleFaq],
        arrayContent = [...document.querySelectorAll(".faq dd")]

  handleFaq.forEach(dt => {
    dt.addEventListener("click", () => {
      if (dt.classList.contains('medidas')) 
        handleContent(0)

      else if (dt.classList.contains('location'))
        handleContent(1)

      else if (dt.classList.contains('launch'))
        handleContent(2)
    })

    function handleContent(e) {
      if (!arrayFaq[e].classList.contains('active')) {
        arrayFaq[e].classList.add("active")
        arrayContent[e].classList.add('active')
      }
      
      else {
        arrayFaq[e].classList.remove("active")
        arrayContent[e].classList.remove('active')
      }
    }

  })
}