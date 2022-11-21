export function faq(e) {
  const handleFaq = document.querySelectorAll('.faq dt'),
        arrayFaq = [...handleFaq],
        arrayContent = [...document.querySelectorAll(".faq dd")]

  console.log(e.target, e.target.parentElement)

  if (e.target.classList.contains('medidas') || e.target.parentElement.classList.contains('medidas')) 
    handleContent(0)

  else if (e.target.classList.contains('location') || e.target.parentElement.classList.contains('location')) 
    handleContent(1)

  if (e.target.classList.contains('launch') || e.target.parentElement.classList.contains('launch')) 
    handleContent(2)

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
}