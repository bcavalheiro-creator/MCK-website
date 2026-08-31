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