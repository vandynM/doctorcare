window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navegation.classList.add('scroll')
  } else {
    navegation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// criando função para abrir e fechar o menu de opções

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// animação de scroll da pagina, pega no site scrollreveal <script src="https://unpkg.com/scrollreveal"></script>

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about.
#about header
#about .content`)
