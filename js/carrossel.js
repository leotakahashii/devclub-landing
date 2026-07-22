const carrossel = document.querySelector('.trilhas-carrossel');

let arrastando = false;
let posicaoInicialX;
let scrollInicial;

carrossel.addEventListener('mousedown', (e) => {
    arrastando = true;
    carrossel.classList.add('arrastando');
    carrossel.style.scrollBehavior = 'auto';

    posicaoInicialX = e.clientX;
    scrollInicial = carrossel.scrollLeft;
});

carrossel.addEventListener('mousemove', (e) => {
    if (!arrastando) return;

    const distanciaPercorrida = e.clientX - posicaoInicialX;
    carrossel.scrollLeft = scrollInicial - distanciaPercorrida;
});

carrossel.addEventListener('mouseup', () => {
    arrastando = false;
    carrossel.classList.remove('arrastando');
    carrossel.style.scrollBehavior = 'smooth';
});

carrossel.addEventListener('mouseleave', () => {
    arrastando = false;
    carrossel.classList.remove('arrastando');
     carrossel.style.scrollBehavior = 'smooth';
});


// ===== SINCRONIZAÇÃO DOS PONTINHOS =====
const slides = document.querySelectorAll('.trilha-slide');
const pontinhos = document.querySelectorAll('.pontinho');

pontinhos.forEach((pontinho) => {
    pontinho.addEventListener('click', () => {
        const index = Number(pontinho.dataset.index);
        slides[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    });
});

// Direção 1: observa qual slide está mais visível e acende o pontinho correspondente
const observerCarrossel = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            const index = Array.from(slides).indexOf(entrada.target);
            pontinhos.forEach((p) => p.classList.remove('ativo'));
            pontinhos[index].classList.add('ativo');
        }
    });
}, {
    root: carrossel,   
    threshold: 0.6 
});

slides.forEach((slide) => observerCarrossel.observe(slide));


pontinhos[0].classList.add('ativo');