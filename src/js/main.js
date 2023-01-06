const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.nav-mobile')

const mobileNavHandle = () => {
	burgerBtn.childNodes[1].classList.toggle('burger-btn__bars--active')
    mobileNav.classList.toggle('nav-mobile--active')
}


burgerBtn.addEventListener('click', mobileNavHandle)
