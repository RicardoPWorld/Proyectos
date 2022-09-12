const menuCart = document.querySelector('.nav-icon-cart-img');
const menuAccount = document.querySelector('.nav-menu-usuario');
const menuEmail = document.querySelector('.nav-email');
const menuArrow = document.querySelector('.nav-icon-arrow');
const asideProduct = document.querySelector('.cart-product');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuArrow.addEventListener('click', toggleDesktopMenu);
menuCart.addEventListener('click', toggleAside);

function toggleDesktopMenu()
{
    const navMenu = asideProduct.classList.contains('inactive')
    if(!navMenu)
    {
        asideProduct.classList.add('inactive')
    }
    
    menuAccount.classList.toggle('inactive');
    
}
function toggleAside()
{
    const navAside = menuAccount.classList.contains('inactive')
    if(!navAside)
    {
        menuAccount.classList.add('inactive');
    }
    asideProduct.classList.toggle('inactive');
    
}
