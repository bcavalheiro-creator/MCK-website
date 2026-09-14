const elementos = document.querySelectorAll(".guante1");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar");
        }
    });
},{
    threshold: 0.2
});

elementos.forEach(el => observer.observe(el));


const header = document.querySelector("header");
const alturaHeader = header.offsetHeight;

window.addEventListener("scroll", () => {

    if (window.scrollY > alturaHeader) {
        header.classList.add("fijo");
    } else {
        header.classList.remove("fijo");
    }

});