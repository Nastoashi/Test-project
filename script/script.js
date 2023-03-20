// header script

const navbarMenu = document.getElementById('navbar')
const burgerMenu = document.getElementById('burger')
const overlayMenu = document.querySelector('.header__overlay')

const toggleMenu = () => {
  navbarMenu.classList.toggle('active')
  overlayMenu.classList.toggle('active')
}

const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains('active')) {
      toggleMenu()
    }
  }
}

burgerMenu.addEventListener('click', toggleMenu)
overlayMenu.addEventListener('click', toggleMenu)
window.addEventListener('resize', resizeWindow)

//dropdown script

document.querySelector('#sample-select').addEventListener('beforeOpen', () => {
  document.querySelector('.vscomp-arrow').classList.add('open')
  document.querySelector('.vscomp-toggle-button').classList.add('open')
})
document.querySelector('#sample-select').addEventListener('beforeClose', () => {
  document.querySelector('.vscomp-arrow').classList.remove('open')
  document.querySelector('.vscomp-toggle-button').classList.remove('open')
})
