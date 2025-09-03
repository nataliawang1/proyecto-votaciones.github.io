
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


registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('email', registerEmail.value);
  formData.append('password', registerPassword.value);

  const res = await fetch('register.php', {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  registerMessage.textContent = data.message;

  if (data.status === 'success') {
    usuarioSpan.textContent = registerEmail.value;
    loginSection.style.display = 'none';
    votingSection.style.display = 'block';
    obtenerVotos();
  }
});


loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('email', loginEmail.value);
  formData.append('password', loginPassword.value);

  const res = await fetch('login.php', {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  loginMessage.textContent = data.message || '';

  if (data.status === 'success') {
    usuarioSpan.textContent = loginEmail.value;
    loginSection.style.display = 'none';
    votingSection.style.display = 'block';
    obtenerVotos();
  }
});


logoutBtn.addEventListener('click', () => {
  location.reload();
});


async function votar(universidad) {
  const res = await fetch('votar.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: usuarioSpan.textContent, universidad })
  });
  const data = await res.json();
  alert(data.message);
  obtenerVotos();
}

btn1.addEventListener('click', () => votar('IT Chihuahua'));
btn2.addEventListener('click', () => votar('TecNM'));
btn3.addEventListener('click', () => votar('URN'));
btn4.addEventListener('click', () => votar('UACJ'));
btn5.addEventListener('click', () => votar('UACH'));


async function obtenerVotos() {
  const res = await fetch('get_votos.php');
  const votos = await res.json();

  votos.forEach(v => {
    if (v.universidad === 'IT Chihuahua') conta1.textContent = v.cantidad;
    if (v.universidad === 'TecNM') conta2.textContent = v.cantidad;
    if (v.universidad === 'URN') conta3.textContent = v.cantidad;
    if (v.universidad === 'UACJ') conta4.textContent = v.cantidad;
    if (v.universidad === 'UACH') conta5.textContent = v.cantidad;
  });
}

window.onload = obtenerVotos;
