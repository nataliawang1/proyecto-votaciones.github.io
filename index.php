<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Torneo Academia STEM</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">

    <div id="login-section">
      <h2>Bienvenido a Torneo Academia STEM</h2>
      <div class="auth-tabs">
        <button id="loginTab" class="tab active">Iniciar Sesión</button>
        <button id="registerTab" class="tab">Registrarse</button>
      </div>

      <form id="loginForm" class="auth-form">
        <input type="email" id="loginEmail" placeholder="Correo electrónico" required />
        <input type="password" id="loginPassword" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
        <p id="loginMessage" class="message"></p>
      </form>

      <form id="registerForm" class="auth-form" style="display:none;">
        <input type="email" id="registerEmail" placeholder="Correo electrónico" required />
        <input type="password" id="registerPassword" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
        <p id="registerMessage" class="message"></p>
      </form>
    </div>

    <div id="voting-section" style="display:none;">
      <p>Bienvenido: <strong id="usuario"></strong> <button id="logout">Cerrar sesión</button></p>
      <img src="img/ACADEMIA STEM.png" id="academia">
      <p class="subtitle">Categoría IOT</p>
      <p class="category">Mejor Proyecto</p>

      <div class="voting-container">
        <div class="voting-item">
          <div class="university-logo itcj"></div>
          <p>IT Chihuahua</p>
          <button id="miBtn1" class="btn">Votar</button>
          <div id="conta1" class="score">0</div>
        </div>
        <div class="voting-item">
          <div class="university-logo tec"></div>
          <p>TecNM</p>
          <button id="miBtn2" class="btn">Votar</button>
          <div id="conta2" class="score">0</div>
        </div>
        <div class="voting-item">
          <div class="university-logo urn"></div>
          <p>URN</p>
          <button id="miBtn3" class="btn">Votar</button>
          <div id="conta3" class="score">0</div>
        </div>
        <div class="voting-item">
          <div class="university-logo uacj"></div>
          <p>UACJ</p>
          <button id="miBtn4" class="btn">Votar</button>
          <div id="conta4" class="score">0</div>
        </div>
        <div class="voting-item">
          <div class="university-logo uach"></div>
          <p>UACH</p>
          <button id="miBtn5" class="btn">Votar</button>
          <div id="conta5" class="score">0</div>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>