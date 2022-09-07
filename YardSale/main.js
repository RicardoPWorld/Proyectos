const containerArticle = document.querySelector('container-arti')
const orderArrow = document.querySelector('flechita')

orderArrow.addEventListener('click',toggleContainerArticle)

function toggleContainerArticle()
{
    const isOrderArrow = containerArticle.classList.contains('inactive')
    if(!isOrderArrow)
    {
        containerArticle.classList.add('inactive')
    }
    console.log('click')
    orderArrow.classList.toggle('inactive')
}
