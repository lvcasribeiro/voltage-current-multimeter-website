// --------------- --------------- --------------- --------------- ---------------

// Autenticação da base de dados em nuvem - Firebase:
const firebaseConfig = {
    apiKey: "AIzaSyAigFQ85uceRSjqC7hBL1ZlftNxWf0wWxo",
    authDomain: "multimedidor-tensao-corrente.firebaseapp.com",
    databaseURL: "https://multimedidor-tensao-corrente-default-rtdb.firebaseio.com",
    projectId: "multimedidor-tensao-corrente",
    storageBucket: "multimedidor-tensao-corrente.appspot.com",
    messagingSenderId: "942023989243",
    appId: "1:942023989243:web:723fac40e3f41065605d5e"
};

// Inicialização do Firebase:
firebase.initializeApp(firebaseConfig);


// --------------- --------------- --------------- --------------- ---------------

// Menu responsivo:
let menu = document.querySelector('#icone-menu');
let navbar = document.querySelector('.barra-de-navegacao');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    // Menu:
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Botão voltar ao topo:
    scrollFunction();
}

// --------------- --------------- --------------- --------------- ---------------

// Conversação Firebase:
$(document).ready(function () {

    var database = firebase.database();

    // Variáveis de captura de medições:
    var Tensao;
    var Corrente;
    var Potencia;
    var Energia;
    var Frequencia;
    var Fator;

    database.ref().on("value", function(snap) {
        Tensao = snap.val().VariaveisMedidas.Tensao;
        Corrente = snap.val().VariaveisMedidas.corrente;
        Potencia = snap.val().VariaveisMedidas.potencia;
        Energia = snap.val().VariaveisMedidas.energia;
        Frequencia = snap.val().VariaveisMedidas.frequencia;
        Fator = snap.val().VariaveisMedidas.fator_de_potencia;

        // --------------- --------------- ---------------

        // Envio das medições:
        document.getElementById("tensao-in").innerHTML = Tensao;
        document.getElementById("corrente-in").innerHTML = Corrente;
        document.getElementById("potencia-in").innerHTML = Potencia;
        document.getElementById("energia-in").innerHTML = Energia;
        document.getElementById("frequencia-in").innerHTML = Frequencia;
        document.getElementById("fator-in").innerHTML = Fator;
    });
});

// --------------- --------------- --------------- --------------- ---------------
