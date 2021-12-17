

const navIcon = document.querySelector(".hero__nav-icon")
const mobileMenu = document.querySelector('.hero__items')
navIcon.addEventListener('click' , ()=> { 
    mobileMenu.classList.toggle('mobile-view')
})

