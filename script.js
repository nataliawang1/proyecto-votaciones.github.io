const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginMessage = document.getElementById('loginMessage');
const registerMessage = document.getElementById('registerMessage');

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');

const loginSection = document.getElementById('login-section');
const votingSection = document.getElementById('voting-section');
const usuarioSpan = document.getElementById('usuario');
const logoutBtn = document.getElementById('logout');


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

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
let usuarioActivo = localStorage.getItem('usuarioActivo');

if (usuarioActivo && usuarios[usuarioActivo]) {
  mostrarVotacion();
}

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
});
registerTab.addEventListener('click', () => {
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
  registerForm.style.display = 'flex';
  loginForm.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  if (usuarios[email]) {
    if (usuarios[email].password === password) {
      usuarioActivo = email;
      localStorage.setItem('usuarioActivo', email);
      mostrarVotacion();
    } else {
      loginMessage.textContent = 'Contraseña incorrecta';
    }
  } else {
    loginMessage.textContent = 'Usuario no existe, por favor regístrese';
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = registerEmail.value;
  const password = registerPassword.value;

  if (usuarios[email]) {
    registerMessage.textContent = 'El usuario ya existe, por favor inicie sesión';
  } else {
    usuarios[email] = { password: password, voto: false };
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    usuarioActivo = email;
    localStorage.setItem('usuarioActivo', email);
    mostrarVotacion();
  }
});

function mostrarVotacion() {
  loginSection.style.display = 'none';
  votingSection.style.display = 'block';
  usuarioSpan.textContent = usuarioActivo;

  const user = usuarios[usuarioActivo];
  if (user && user.voto) {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.disabled = true;
      btn.textContent = 'Votado';
    });
  }
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('usuarioActivo');
  location.reload();
});

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
