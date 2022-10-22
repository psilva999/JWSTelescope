export function bitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.contato span');
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  })
}
