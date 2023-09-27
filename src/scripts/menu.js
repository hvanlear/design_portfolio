const primaryNav = document.querySelector('.primary-nav')
const hamButton = document.querySelector('.nav-toggle')
const contactNavLink = document.querySelector('#nav-link-contact')

//function to open and close the nav container

let menuToggle = () => {
	const vis = primaryNav.getAttribute('data-visible')
	if (vis === 'false') {
		primaryNav.setAttribute('data-visible', true)
		hamButton.setAttribute('aria-expanded', true)
	} else {
		primaryNav.setAttribute('data-visible', false)
		hamButton.setAttribute('aria-expanded', false)
	}
}

//Close the menu overlay when clicking on the contact button
//menu was not closing becuase it's only moving the viewport to the bototm of the screen
contactNavLink.addEventListener('click', () => {
	menuToggle()
})

//close menu overlay
hamButton.addEventListener('click', () => {
	menuToggle()
})
