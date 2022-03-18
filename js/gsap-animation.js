gsap.from('.title', {opacity: 0, duration: 1.5, y: 50});
gsap.from('#titlu', {opacity: 0, duration: 1, x: 50});
gsap.from('#descriere', {opacity: 0, duration: 1, x: -50});






const despreElements = document.querySelector(".col-img-despre");
const produse = document.querySelector(".row-produse");

window.addEventListener('scroll', () => {
    if(scrollY>470){
        despreElements.classList.add('transition');
    }else {
        despreElements.classList.remove('transition');
    }

})