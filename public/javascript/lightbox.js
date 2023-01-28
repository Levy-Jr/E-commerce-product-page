const lightBoxes = document.querySelectorAll('[data-lightbox]')
const lightBoxClose = document.querySelector(".icon-close")
const carouselButtons = document.querySelector('[data-carousel-buttons]')

let lightboxImage = document.querySelector('.largest-image[data-lightbox]')

const toggleLightBox = () => {
	lightBoxes.forEach(lightbox => {
		lightbox.toggleAttribute('data-lightbox-visible')
	})
}

productImage.addEventListener('click', ()=>{{
	lightboxImage.src = productImage.src
	toggleLightBox()
}})

lightBoxClose.addEventListener('click', toggleLightBox)