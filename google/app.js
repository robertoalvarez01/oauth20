function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log(profile);
    mostrar(profile);
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    setZero();
}

function mostrar(profile){
  document.getElementById('imagen').src = profile.getImageUrl();
  document.getElementById('nombre').innerHTML = 'Nombre: ' + profile.getName();
  document.getElementById('email').innerHTML = 'Email: ' + profile.getEmail();
  document.getElementById('id').innerHTML = 'Id: ' + profile.getId();
  
}

function setZero(){
  document.getElementById('imagen').src = 'prueba.jpg';
  document.getElementById('nombre').innerHTML = 'Nombre';
  document.getElementById('email').innerHTML = 'Email';
  document.getElementById('id').innerHTML = 'Id';
}