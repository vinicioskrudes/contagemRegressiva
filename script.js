let contador = 10;
const intervalId = setInterval(() => {
  console.log(`${contador--}`);
  if (contador < 0) {
    clearInterval(intervalId); 
    console.log("O tempo acabou!");
  }
}, 1000); 

var button = document.getElementById('btnIniciar');
var mostrador = document.getElementById('mostrador');
var inputNumero = document.getElementById('numeroInicial');

var intervalo = null;

button.addEventListener('click', function() {

    var numero = parseInt(inputNumero.value);

    if (isNaN(numero) || numero <= 0) {
        alert('Por favor, digite um número válido maior que zero!');
        return;
    }
    
    if (intervalo !== null) {
        clearInterval(intervalo);
    }

    iniciarContagem(numero);
});

function iniciarContagem(numero) {

    mostrador.textContent = numero;
    
    intervalo = setInterval(function() {
        numero--;
        mostrador.textContent = numero;

        if (numero === 0) {
            clearInterval(intervalo);
            intervalo = null;

            setTimeout(function() {
                mostrador.textContent = 'Fim!';
            }, 1000);
        }
    }, 1000);
}
