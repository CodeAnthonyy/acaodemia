// ===== NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
  document.getElementById('page-' + page).classList.add('ativa');

  // Update nav active state - desktop
  ['home','servicos','cadastro'].forEach(p => {
    const el = document.getElementById('nav-' + p);
    if (el) {
      if (p === page) {
        el.classList.add('ativa');
      } else {
        el.classList.remove('ativa');
      }
    }
  });

  // Update nav active state - mobile
  ['home','servicos','cadastro'].forEach(p => {
    const mob = document.getElementById('mob-' + p);
    if (mob) {
      if (p === page) {
        mob.classList.add('ativa');
      } else {
        mob.classList.remove('ativa');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Fechar menu mobile se estiver aberto
  document.getElementById('mobile-menu').style.display = 'none';
}

function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  const isOpen = menu.style.display === 'flex';
  menu.style.display = isOpen ? 'none' : 'flex';
}

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.menu-movel a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').style.display = 'none';
  });
});

// ===== FORM SUBMIT =====
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nomeCao = document.getElementById('nome_cao').value.trim();
  const tutor = document.getElementById('tutor').value.trim();
  const tel = document.getElementById('telefone').value.trim();
  if (!nomeCao || !tutor || !tel) {
    alert('Por favor, preencha os campos obrigatórios: Nome do cão, Tutor e WhatsApp.');
    return;
  }
  this.style.display = 'none';
  document.getElementById('success').style.display = 'block';
});