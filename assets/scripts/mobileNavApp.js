const hamburgerEl = document.getElementById('hamburger-menu');
const navEl = document.querySelector('.navContainer');
const navItems = document.querySelectorAll('.mobile-navItem', '.mobile-navLink');
const navLinkItems = document.querySelectorAll('#header-nav > a');


function showMobileNavHandler() {
    if(document.body.clientWidth > 1024) {
        return;
    }
    
    navEl.classList.toggle('show');
    navItems.forEach(entry => entry.classList.toggle('show'));
    navLinkItems.forEach(item => {
        item.style.display = 'flex';
        item.style.gap = '10px';
    })
}

hamburgerEl.addEventListener('click', showMobileNavHandler)
