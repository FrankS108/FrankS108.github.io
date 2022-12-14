const btn = document.getElementById('button');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('message');

console.log(inputMessage)

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_u4a5ln8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      inputName.value = '';
      inputEmail.value = '';
      inputMessage.value = '';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});