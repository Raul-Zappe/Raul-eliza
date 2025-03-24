// Funcionalidade simples para mostrar um alerta quando um feitiço for clicado
document.addEventListener('DOMContentLoaded', () => {
    const destaqueElements = document.querySelectorAll('.destaque');
  
    destaqueElements.forEach(destaque => {
      destaque.addEventListener('click', () => {
        alert('Você clicou em ' + destaque.querySelector('h2').textContent);
      });
    });
  });