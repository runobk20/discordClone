const backdrop = document.getElementById('backdrop');
const header = document.querySelector('#hero > header');
const closeNavBtn = document.querySelector('.close-icon');

const hamburgerEl = document.getElementById('hamburger-menu');
const navEl = document.querySelector('.navContainer');
const navItems = document.querySelectorAll('.mobile-navItem', '.mobile-navLink');
const navLinkItems = document.querySelectorAll('#header-nav > a');

function toggleBackdrop() {
    header.classList.toggle('z-index');
    backdrop.classList.toggle('visible');
}

function openMobileNavHandler() {
    if(document.body.clientWidth > 1024) {
        return;
    }
    
    toggleBackdrop();

    navEl.classList.toggle('show');
    navItems.forEach(entry => entry.classList.toggle('show'));
    navLinkItems.forEach(item => {
        item.style.display = 'flex';
        item.style.gap = '10px';
    })
}

function closeMobileNavHandler() {
    toggleBackdrop();
    navEl.classList.toggle('show');
    navItems.forEach(entry => entry.classList.toggle('show'));
    navLinkItems.forEach(item => {
        console.dir(item)
        if(item.classList.contains('mobile-navItem')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }

    })
}

hamburgerEl.addEventListener('click', openMobileNavHandler);
closeNavBtn.addEventListener('click', closeMobileNavHandler);
backdrop.addEventListener('click', closeMobileNavHandler);
