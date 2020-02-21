window.fbAsyncInit = function() {
    FB.init({
        appId      : '1069190843426553',
        cookie     : true,
        xfbml      : true,
        version    : 'v5.0'
    });
        
    FB.AppEvents.logPageView();   
        
    };
    
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

/*

Proceso de carga de la app




*/ 

function checkLoginState() {
    FB.login(function(response){
        statusChangeCallback(response);
    });
}

function cerrar (){
    FB.logout(function(response) {
        statusChangeCallback(response);
     });
     return;
}

function statusChangeCallback(response) {  
    console.log('Has ejecudato la funcion para resolver el estado de tu app');
    console.log(response);                   
    if (response.status === 'connected') {   
      testAPI();  
    } else {                                 
      console.log('No hay usuarios conectados a la app');
      document.getElementById('info').innerHTML = ""; 
    }
}

function testAPI() {           
    console.log('Vas a utilizar la API de facebook');
    FB.api('/me', { 'fields' : 'first_name, last_name, id, email, picture' } ,function(response) {
      console.log(response);
      console.log('Successful login for: ' + response.last_name +' '+ response.first_name);
      const formato = `<img src='${response.picture.data.url}' width='50' height='50' /> <br/> <h3>Nombre : ${response.first_name}</h3> <br/> <h3>Apellido : ${response.last_name}</h3> <br/> <h3>Email : ${response.email}</h3> <br/> <h3>Id : ${response.id}</h3>`;
      document.getElementById('info').innerHTML = formato;    
    });
}