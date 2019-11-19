  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGVlvgOlHU6v4ypk9jSsKPOTVNiMywb2g",
    authDomain: "contact-form-7c0bf.firebaseapp.com",
    databaseURL: "https://contact-form-7c0bf.firebaseio.com",
    projectId: "contact-form-7c0bf",
    storageBucket: "contact-form-7c0bf.appspot.com",
    messagingSenderId: "148861684161"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages')

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name,company,phone,email,message);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}


function saveMessage(name,company,phone,email,message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  })
}