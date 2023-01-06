const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.nav-mobile')
const mobileNavLinks = document.querySelectorAll('.nav-mobile__link')

const mobileNavHandle = () => {
	burgerBtn.childNodes[1].classList.toggle('burger-btn__bars--active')
	mobileNav.classList.toggle('nav-mobile--active')
}

burgerBtn.addEventListener('click', mobileNavHandle)
mobileNavLinks.forEach(link => {
	link.addEventListener('click', mobileNavHandle)
})
