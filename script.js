const btn1 = document.getElementById('miBtn1');
const conta1 = document.getElementById('conta1');

const btn2 = document.getElementById('miBtn2');
const conta2 = document.getElementById('conta2');

const btn3 = document.getElementById('miBtn3');
const conta3 = document.getElementById('conta3');

const btn4 = document.getElementById('miBtn4');
const conta4 = document.getElementById('conta4');

const btn5 = document.getElementById('miBtn5');
const conta5 = document.getElementById('conta5');

let itcj = 0, tec = 0, urn = 0, uacj = 0, uach = 0;

const usuarioActivo = localStorage.getItem('usuarioActivo');
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
const user = usuarios[usuarioActivo];

// Si el usuario ya votó, deshabilitar todos los botones
if (user && user.voto) {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.disabled = true;
    btn.textContent = 'Votado';
  });
}

function registrarVoto() {
  usuarios[usuarioActivo].voto = true;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  document.querySelectorAll('.btn').forEach(btn => {
    btn.disabled = true;
    btn.textContent = 'Votado';
  });
}

btn1.addEventListener('click', () => { itcj++; conta1.textContent = itcj; registrarVoto(); });
btn2.addEventListener('click', () => { tec++; conta2.textContent = tec; registrarVoto(); });
btn3.addEventListener('click', () => { urn++; conta3.textContent = urn; registrarVoto(); });
btn4.addEventListener('click', () => { uacj++; conta4.textContent = uacj; registrarVoto(); });
btn5.addEventListener('click', () => { uach++; conta5.textContent = uach; registrarVoto(); });
