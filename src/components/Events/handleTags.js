export function bitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.contato span');
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  })
}

export function handleMoreInfo() {
  const container = document.querySelector('.infos-languages ul')

  if (!container.classList.contains("active")) {
    document.documentElement.style.setProperty('--value', "block")
    container.style.display = 'flex'
    container.classList.add('active')
  }

  else if (container.classList.contains("active")) {
    document.documentElement.style.setProperty('--value', "none")
    container.style.display = 'none'
    container.classList.remove('active')
  }
}

export function closeMenuFromOutside(e) {
  const container = document.querySelector('.infos-languages ul')

  if (e.target.id !== 'more-about' && e.target.id !== 'more-about img:first-child' && e.target.id !== 'more-about p' && e.target.id !== 'more-about img:last-child') {
    document.documentElement.style.setProperty('--value', "none")
    container.style.display = 'none'
    container.classList.remove('active')
  }
}

export function maxTotal() {
  let li = document.querySelector('.total li'),
      total = Number(li.textContent)

  if (li.textContent === '3') li.textContent = 3

  else li.textContent = total + 1
}

export function minTotal() {
  let li = document.querySelector('.total li'),
      total = Number(li.textContent)

  if (li.textContent === '1') li.textContent = 1

  else li.textContent = total - 1
}
