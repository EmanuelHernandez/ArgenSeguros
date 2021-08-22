console.log('Page load')

const menu = document.getElementById('menu-icon')

function menuAction() {
    const container = document.getElementById('container-links')

    if (container.style.display === 'flex') {
        container.style.display = 'none'
    } else {
        container.style.display = 'flex';
    }
}

menu.addEventListener('click', menuAction)
