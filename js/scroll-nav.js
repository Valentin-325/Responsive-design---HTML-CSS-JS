const scrollNav = document.querySelector(".header-container");

window.addEventListener('scroll', () => {
    if(scrollY>100){
        scrollNav.classList.add('bg');
    }else {
        scrollNav.classList.remove('bg');
    }
})