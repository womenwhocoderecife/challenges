const colors = ['pink', 'purple', 'blue']

const btn = document.getElementById('button')
const color = document.querySelector('.color')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
  const radomNumber = Math.floor(Math.random() * colors.length)
  container.style.backgroundColor = colors[radomNumber]
  color.textContent = colors[radomNumber]
})
