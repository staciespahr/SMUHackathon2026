import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello World</h1>
    <img src="/earth.png" alt="Earth" width="200" />
    <div class="card">
      <button id="spinButton" type="button">PUSH to spin the earth</button>
    </div>
  </div>
`

const button = document.querySelector<HTMLButtonElement>('#spinButton')!

// Make it red
button.style.backgroundColor = 'green'
button.style.color = 'white'
button.style.fontWeight = 'bold'
button.style.border = 'none'
button.style.padding = '10px 20px'
button.style.borderRadius = '8px'
button.style.cursor = 'pointer'

button.addEventListener('click', () => {
  button.classList.add('spin')
  alert('I’m dizzy!')
})