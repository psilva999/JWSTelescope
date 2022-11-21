export function handleMenuLiActive(e) {
  removeActive()
  
  e.target.classList.add('active')
}

export function handleLiHistory() {
  window.scrollTo(0,0)
  console.log(window.scrollY)
  removeActive()
  const truce = document.querySelector('.truce').classList.add("active")

  if (!truce.classList.contains('active')) 
    truce.classList.add('active')
}

export function removeActive() {
  document.querySelectorAll('.menu .fire').forEach(li => li.classList.remove("active"))
  document.querySelector('.truce').classList.remove("active")
  document.querySelector('.subscribe').classList.remove("active")
}
