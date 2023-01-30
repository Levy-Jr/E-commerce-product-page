const carouselBtns = document.querySelectorAll('[data-carousel-button]')
const thumbImages = document.querySelectorAll('[data-thumb-image]')
const thumbLightBoxImages = document.querySelectorAll('.thumb-image[data-lightbox]')

carouselBtns.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1    
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const changeActiveElements = (element, parentElement) => {
  const activeElement = document.querySelectorAll('.active')
  if(activeElement !== null) {
    activeElement.forEach(activeEl => activeEl.classList.remove('active'))
  }

  element.classList.add('active')
  parentElement.classList.add('active')
}

const changeSlideImage = (index) => {
  const slides = document.querySelector('[data-slides]')
  const activeSlide = slides.querySelector('[data-active]')

  slides.children[index].dataset.active = true
  delete activeSlide.dataset.active
}

thumbImages.forEach((el, index) => {
  el.addEventListener('click', () => {
    changeActiveElements(el, el.closest('button'))
    changeSlideImage(index)
    
  })
})

thumbLightBoxImages.forEach((el, index) => {
  el.addEventListener('click', () => {
    changeActiveElements(el, el.closest('button'))
    changeSlideImage(index)
  })
})