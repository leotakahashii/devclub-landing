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