
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdbu9NpxPUFnsA_lvHCP_g2eMhKzIkSiu7QZwOv_YrWdlFFMuA/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})



