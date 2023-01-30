const minusButton = document.querySelector('[data-minus]')
const plusButton = document.querySelector('[data-plus]')

let itemAmountText = document.querySelector('[data-amount]')

let itemAmountNumber = 0;

plusButton.addEventListener('click', () => {
    itemAmountNumber++
    itemAmountText.innerHTML = itemAmountNumber
})

minusButton.addEventListener('click', () => {
    if(itemAmountNumber > 0){
        itemAmountNumber--
        itemAmountText.innerHTML = itemAmountNumber
    }
})

const cartButton = document.querySelector('.cart-wrapper[data-cart-basket-button]')
const cartBaskets = document.querySelectorAll('[data-cart-basket]')

cartButton.addEventListener('click', () => {
    cartBaskets.forEach(cartBasket => cartBasket.toggleAttribute('data-visible'))
    if(itemAmountNumber == 0)
      addCartEmpty()
    }
)

const addToCartButton = document.querySelector('[data-add-to-cart]')
const productPrice = 125.00
const cartWrapper = document.querySelector('.cart-basket-wrapper[data-cart-basket]')
const cartAbsoluteWrapper = document.querySelector('.cart-absolute-wrapper[data-cart-basket]')

const addCartFilled = () => {
  cartWrapper.innerHTML = `
  <div class="cart-basket" data-cart-basket data-visible>
      <div class="cart-title-wrapper" data-cart-basket data-visible>
      <h4 class="card-title" data-cart-basket data-visible>Cart</h4>
      </div>
      <div class="cart-basket-item-wrapper" data-cart-basket data-visible>
      <div class="cart-basket-item" data-cart-basket data-visible>
          <div class="cart-basket-image-wrapper" data-cart-basket data-visible>
          <img class="cart-basket-image" src="images/image-product-1-thumbnail.jpg" alt="" data-cart-basket data-visible>
          </div>
          <div class="cart-basket-item-text" data-visible>
          <span class="cart-basket-item-text-title" data-cart-basket-item-text-title data-visible>Fall Limited Edition Sneakers</span><br>
          <span>$${productPrice}.00 x
          <span data-product-multiplier>${itemAmountNumber}</span>
          <span class="fw-bold" data-product-total-price data-visible>$${productPrice * itemAmountNumber}.00</span></span>
          </div>
          <div class="cart-icon-delete-wrapper" data-cart-basket data-visible><img src="images/icon-delete.svg" alt=""></div>
      </div>
      <button class="cart-basket-item-button | fw-bold" data-checkout-button data-visible>Checkout</button>
      </div>
  </div>`

  cartAbsoluteWrapper.innerHTML = `<div class="cart-absolute"><span data-cart-number>${itemAmountNumber}</span></div>`

  const iconDelete = cartWrapper.querySelector(".cart-icon-delete-wrapper[data-cart-basket]")
  iconDelete.addEventListener('click', () => {
    addCartEmpty()
  })
}

const addCartEmpty = () => {
  cartWrapper.innerHTML = `
    <div class="cart-basket" data-cart-basket data-visible>
      <div class="cart-title-wrapper" data-cart-basket data-visible>
        <h4 class="card-title" data-cart-basket data-visible>Cart</h4>
      </div>
      <div class="cart-basket-item empty" data-cart-basket data-visible>
        <span class="fw-bold">Your cart is empty</span>
      </div>
    </div>`

    if(cartButton.querySelector('.cart-absolute')){
      cartButton.querySelector('.cart-absolute').remove()
    }
  }

addToCartButton.addEventListener('click', () => {
  if(itemAmountNumber > 0){
    addCartFilled()
  } else {
    addCartEmpty()
  }
})