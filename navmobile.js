document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');


    hamburger.addEventListener('click', function() {
    
        this.classList.toggle('active'); 
      
        mobileNav.classList.toggle('active');

       
        const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !isExpanded);
        
        mobileNav.setAttribute('aria-hidden', isExpanded);
    });


    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            
            
            hamburger.setAttribute('aria-expanded', 'false');
            mobileNav.setAttribute('aria-hidden', 'true');
        });
    });
});