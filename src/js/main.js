const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.nav-mobile')
const mobileNavLinks = document.querySelectorAll('.nav-mobile__link')
const scrollSpySections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('.nav__link-desktop')
const footerYear = document.querySelectorAll('.year')

const mobileNavHandle = () => {
	burgerBtn.childNodes[1].classList.toggle('burger-btn__bars--active')
	mobileNav.classList.toggle('nav-mobile--active')
}

const getYear = () => {
	const year = new Date().getFullYear()
	footerYear.forEach(el => el.textContent = year)
}

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []
		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 88) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
				console.log(activeSection);
				navLinks.forEach(item => item.classList.remove('nav__link-desktop--active'))

				activeSection.classList.add('nav__link-desktop--active')
			}
		})
	}
}

window.addEventListener('scroll', handleScrollSpy)

burgerBtn.addEventListener('click', mobileNavHandle)
mobileNavLinks.forEach(link => {
	link.addEventListener('click', mobileNavHandle)
})

getYear()
