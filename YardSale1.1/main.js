const menuCart = document.querySelector('.nav-icon-cart');
const menuAccount = document.querySelector('.nav-menu-usuario');
const menuEmail = document.querySelector('.nav-email');
const menuArrow = document.querySelector('.nav-icon-arrow')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuArrow.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu()
{
    const navMenu = menuAccount.classList.contains('inactive')
    if(navMenu)
    {
        menuAccount.classList.remove('inactive')
    }
    else
    {
        menuAccount.classList.add('inactive')
    }
}
