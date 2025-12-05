// Seleciona o botão do menu e o menu mobile
const toggleBtn = document.querySelector('.menu');
const mobile = document.getElementById('mobile');

// Ao clicar, adiciona/remove a classe "active"
toggleBtn.addEventListener('click', () => {
  mobile.classList.toggle('active');

  // Troca o ícone do botão
  const icon = toggleBtn.querySelector('ion-icon');
  if (mobile.classList.contains('active')) {
    icon.setAttribute('name', 'close-outline'); // ícone de fechar
  } else {
    icon.setAttribute('name', 'menu-outline'); // ícone de abrir
  }
});