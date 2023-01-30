/* lightbox */
const lightBoxes = document.querySelectorAll('[data-lightbox]')
const lightBoxClose = document.querySelector(".icon-close")
let lightboxImage = document.querySelector('.largest-image[data-lightbox]')

const toggleLightBox = () => {
	lightBoxes.forEach(lightbox => {
		lightbox.toggleAttribute('data-lightbox-visible')
	})
}

lightBoxClose.addEventListener('click', toggleLightBox)