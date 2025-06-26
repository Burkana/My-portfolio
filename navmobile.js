document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!hamburger || !mobileNav) return;         

    hamburger.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active', isOpen);


        hamburger.setAttribute('aria-expanded', isOpen);
        mobileNav.setAttribute('aria-hidden', !isOpen);
    });


    mobileNav.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileNav.setAttribute('aria-hidden', 'true');
        })
    );

    document.addEventListener('click', e => {
        if (
            !mobileNav.contains(e.target) &&
            !hamburger.contains(e.target) &&
            mobileNav.classList.contains('active')
        ) {
            hamburger.click();     
        }
    });
});