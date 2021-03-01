let order;
let inputs = table.getElementsByTagName('input');
function order_yes() {
  for (let input of inputs) {
    console.log( input.name + ': ' + input.value );
  }
}
  document.getElementById('order').addEventListener('click', order_yes);

function sendEmail() { 
  Email.send({ 
    Host: 'smtp.gmail.com', 
    Username: 'sender@email_address.com', 
    Password: 'Enter your password', 
    To: 'smakoliki.zt@ukr.net', 
    From: 'sender@email_address.com', 
    Subject: 'Sending Email using javascript', 
    Body: 'Well that was easy!!', 
  }) 
  .then(function (message) { 
    console.log('mail sent successfully') 
  }); 
}