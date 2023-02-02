/* menu */

const openMenuButton = document.querySelector('[data-open-menu')
const closeMenuButton = document.querySelector('[data-close-menu')
const ulWrapper = document.querySelector('.ul-wrapper')
const menuLinks = document.querySelector('[data-ul-list')
const header = document.querySelector('[data-primary-header]')

openMenuButton.addEventListener('click', () => {
    ulWrapper.toggleAttribute('data-visible')
    closeMenuButton.toggleAttribute('data-visible')
    menuLinks.toggleAttribute('data-visible')
    header.toggleAttribute('data-overlay')
})

closeMenuButton.addEventListener('click', ()=>{
    menuLinks.hasAttribute('data-visible') ? 
    openMenuButton.setAttribute('aria-expanded', false) : 
    openMenuButton.setAttribute('aria-expanded', true)

    ulWrapper.toggleAttribute('data-visible')
    closeMenuButton.toggleAttribute('data-visible')
    menuLinks.toggleAttribute('data-visible')
    header.toggleAttribute('data-overlay')
})