const carouselButtons = document.querySelectorAll('[data-carousel-button]')
const lightboxCarouselButtons = document.querySelectorAll('[data-lightbox-carousel-button]')
const buttonThumbImages = document.querySelectorAll('[data-thumb-image]')
const buttonThumbLightBoxImages = document.querySelectorAll('.thumb-image[data-lightbox]')

carouselButtons.forEach(button => {
  const offset = button.dataset.carouselButton === "next" ? 1 : -1

  button.addEventListener('click', () => {
    /* controlamos se vamos para a próxima imagem ou anterior */
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0
    changeLightBoxThumbImage(newIndex)
    changeLightBoxSlideImage(newIndex)
    changeThumbImage(newIndex)

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

lightboxCarouselButtons.forEach(carouselButton => {
  const offset = carouselButton.dataset.lightboxCarouselButton === "next" ? 1 : -1

  carouselButton.addEventListener('click', () => {
    const slides = carouselButton.closest('[data-carousel]').querySelector('[data-lightbox-slide]')
    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if(newIndex < 0) newIndex = slides.children.length - 1 
    if(newIndex >= slides.children.length) newIndex = 0
    changeLightBoxThumbImage(newIndex)

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

/* para mudar o elemento ativo, precisamos selecionar todos os elementos com essa classe,
fazer um foreach e removê-la. Depois precisamos adicionar a classe nos elementos que queremos
*/
const changeActiveElements = (element, parentElement) => {
  const thumbImagesParent = document.querySelector('[data-thumb-parent]')
  const activeElement = thumbImagesParent.querySelectorAll('.active')
  if(activeElement) {
    activeElement.forEach(activeEl => activeEl.classList.remove('active'))
  }

  element.classList.add('active')
  parentElement.classList.add('active')
}

const changeActiveLightboxElements = (element, parentElement) => {
  const thumbImagesParent = document.querySelector('.thumb-images[data-lightbox]')
  const activeElement = thumbImagesParent.querySelectorAll('.active')
  if(activeElement) {
    activeElement.forEach(activeEl => {
      activeEl.classList.remove('active')
      })
  }

  element.classList.add('active')
  parentElement.classList.add('active')
}

const changeSlideImage = (index) => {
  /* pego o elemento que contém todos os slides */
  const slides = document.querySelector('[data-slides]')
  /* dentro desse elemento, seleciono o slide com o [data-active] */
  const activeSlide = slides.querySelector('[data-active]')

  /* seleciono o index que receberei como argumento na chamada da função e adiciono
  o atributo data-active */
  slides.children[index].dataset.active = true
  /* delete o data-active antigo */
  delete activeSlide.dataset.active
}

const changeThumbImage = (index) => {
  const thumbImagesParent = document.querySelector(".thumb-images")

  const activeThumbs = thumbImagesParent.querySelectorAll('.active')

  thumbImagesParent.children[index].classList.add('active')
  activeThumbs.forEach(activeThumb => activeThumb.classList.remove('active'))
}

const changeLightBoxSlideImage = (index) => {
  const slides = document.querySelector('[data-lightbox-slide]')

  const activeSlide = slides.querySelector('[data-active]')

  slides.children[index].dataset.active = true
  
  if(activeSlide === slides.children[index]) return
  delete activeSlide.dataset.active
}

const changeLightBoxThumbImage = (index) => {
  const thumbImagesParent = document.querySelector('.thumb-images[data-lightbox]')

  const activeThumbs = thumbImagesParent.querySelectorAll('.active')

  thumbImagesParent.children[index].classList.add('active')

  activeThumbs.forEach(activeThumb => {
    if(thumbImagesParent.children[index] !== activeThumb){
      activeThumb.classList.remove('active')
    }}
    )
}

const closeLightBoxButton = document.querySelector('.icon-close')

const toggleLightBox = () => {
  const lightBoxes = document.querySelectorAll('[data-lightbox]')

  lightBoxes.forEach(e => {
    e.toggleAttribute('data-lightbox-visible')
  })
}

const allSlides = document.querySelectorAll(".slide[data-slide]")

closeLightBoxButton.addEventListener('click', toggleLightBox)

buttonThumbImages.forEach((element, index) => {
  element.addEventListener('click', () => {
    if(!element.classList.contains('active')){
      changeActiveElements(element, element.closest('button'))
      changeSlideImage(index)
      changeLightBoxSlideImage(index)
      changeLightBoxThumbImage(index)
  }
  })
})

/* LIGHTBOX */

buttonThumbLightBoxImages.forEach((element, index) => {
  element.addEventListener('click', () => {
    if(!element.classList.contains('active')) {
      changeActiveLightboxElements(element, element.closest('button'))
      changeLightBoxSlideImage(index)
    }
  })
})

allSlides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    toggleLightBox()
    changeLightBoxSlideImage(index)
    changeLightBoxThumbImage(index)
  })
})