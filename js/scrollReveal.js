const elementosReveal = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada, index) => {
        if (entrada.isIntersecting) {
            setTimeout(() => {
                entrada.target.classList.add('ativo');
            }, index * 100);
        } else {
            entrada.target.classList.remove('ativo'); // some novamente ao sair da tela, pronta pra reanimar
        }
    });
}, {
    threshold: 0.15
});

elementosReveal.forEach((elemento) => observer.observe(elemento));