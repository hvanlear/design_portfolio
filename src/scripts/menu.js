const primaryNav = document.querySelector('.primary-nav')
const hamButton = document.querySelector('.nav-toggle')

hamButton.addEventListener('click', () => {
	const vis = primaryNav.getAttribute('data-visible')
	if (vis === 'false') {
		primaryNav.setAttribute('data-visible', true)
		hamButton.setAttribute('aria-expanded', true)
	} else {
		primaryNav.setAttribute('data-visible', false)
		hamButton.setAttribute('aria-expanded', false)
	}
})
