//NAV
const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.nav-mobile')
const mobileNavLinks = document.querySelectorAll('.nav-mobile__link')
//Footer
const footerYear = document.querySelector('.year')


const mobileNavHandle = () => {
	burgerBtn.childNodes[1].classList.toggle('burger-btn__bars--active')
	mobileNav.classList.toggle('nav-mobile--active')
}



const getYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}


burgerBtn.addEventListener('click', mobileNavHandle)
mobileNavLinks.forEach(link => {
	link.addEventListener('click', mobileNavHandle)
})

getYear()