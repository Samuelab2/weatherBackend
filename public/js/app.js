const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)  => {
  e.preventDefault()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  const { value } = search
  fetch(`/weather?address=${value}`)
  .then(resp => resp.json())
  .then(({ error, location, forecast }) => {
    if(error) {
      return messageOne.textContent = error
    }
    messageOne.textContent = location
    messageTwo.textContent = forecast
  })
  .catch(err => messageOne.textContent = err)
})