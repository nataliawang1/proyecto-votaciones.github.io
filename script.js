// Elementos de login
const loginSection = document.getElementById('login-section');
const votingSection = document.getElementById('voting-section');
const form = document.getElementById('authForm');
const mensaje = document.getElementById('mensaje');
const usuarioSpan = document.getElementById('usuario');
const logoutBtn = document.getElementById('logout');

// Botones y contadores de votación
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

// Cargar usuarios del localStorage
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
let usuarioActivo = localStorage.getItem('usuarioActivo');

// Mostrar la sección correcta dependiendo si hay sesión activa
if (usuarioActivo && usuarios[usuarioActivo]) {
  mostrarVotacion();
}

// Manejo del formulario de login
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (usuarios[email]) {
    if (usuarios[email].password === password) {
      usuarioActivo = email;
      localStorage.setItem('usuarioActivo', email);
      mostrarVotacion();
    } else {
      mensaje.textContent = 'Contraseña incorrecta';
    }
  } else {
    usuarios[email] = { password: password, voto: false };
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    usuarioActivo = email;
    localStorage.setItem('usuarioActivo', email);
    mostrarVotacion();
  }
});

// Función para mostrar la sección de votación y ocultar login
function mostrarVotacion() {
  loginSection.style.display = 'none';
  votingSection.style.display = 'block';
  usuarioSpan.textContent = usuarioActivo;

  // Si ya votó, deshabilitar botones
  const user = usuarios[usuarioActivo];
  if (user && user.voto) {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.disabled = true;
      btn.textContent = 'Votado';
    });
  }
}

// Cerrar sesión
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('usuarioActivo');
  location.reload(); // recarga para volver al login
});

// Función para registrar voto
function registrarVoto() {
  usuarios[usuarioActivo].voto = true;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  document.querySelectorAll('.btn').forEach(btn => {
    btn.disabled = true;
    btn.textContent = 'Votado';
  });
}

// Eventos de votación
btn1.addEventListener('click', () => { itcj++; conta1.textContent = itcj; registrarVoto(); });
btn2.addEventListener('click', () => { tec++; conta2.textContent = tec; registrarVoto(); });
btn3.addEventListener('click', () => { urn++; conta3.textContent = urn; registrarVoto(); });
btn4.addEventListener('click', () => { uacj++; conta4.textContent = uacj; registrarVoto(); });
btn5.addEventListener('click', () => { uach++; conta5.textContent = uach; registrarVoto(); });
