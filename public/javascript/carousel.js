const nextCarouselBtn = document.querySelectorAll('[data-next-button]')
const prevCarouselBtn = document.querySelectorAll('[data-prev-button]')
let productImage = document.querySelector('[data-main-image]')

let count = 1

nextCarouselBtn.forEach(button => {
  button.addEventListener('click', () => {
    if(count >= 1 && count <= 3){
      count++
      productImage.src = `/images/image-product-${count}.jpg`
      lightboxImage.src = productImage.src
    }
  })
})

prevCarouselBtn.forEach(button => {
  button.addEventListener('click', () => {
    if(count > 1) {
      count--
      productImage.src = `/images/image-product-${count}.jpg`
      lightboxImage.src = productImage.src
    }
  })
})

const thumbImages = document.querySelectorAll('[data-thumb-image]')

const changeActiveElements = (element, parentElement) => {
  const activeElement = document.querySelectorAll('.active')
  if(activeElement !== null) {
    activeElement.forEach(activeEl => activeEl.classList.remove('active'))
  }

  element.classList.add('active')
  parentElement.classList.add('active')
}

thumbImages.forEach((el, index) => {
  el.addEventListener('click', () => {
    changeActiveElements(el, el.closest('button'))
    productImage.src = `/images/image-product-${index + 1}.jpg`
  })
})

const thumbLightBoxImages = document.querySelectorAll('.thumb-image[data-lightbox]')

thumbLightBoxImages.forEach((el, index) => {
  el.addEventListener('click', () => {
    changeActiveElements(el, el.closest('button'))
    productImage.src = `/images/image-product-${index + 1}.jpg`
    lightboxImage.src = productImage.src
  })
})