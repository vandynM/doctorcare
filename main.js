window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop // o tempo da seção
  const sectionHeight = section.offsetHeight // a altura da seção
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop // o topo da seção chegou ou ultrapassou a linha alvo

  //verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
