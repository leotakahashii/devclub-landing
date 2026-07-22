const trilhas = document.querySelectorAll('.trilha');
const trilhasLinha = document.querySelector('.trilhas-linha');
const estilos = getComputedStyle(trilhasLinha);
const margemTopOriginal = parseFloat(estilos.marginTop);

trilhas.forEach(trilha => {
    trilha.addEventListener('mouseenter', () => {
        const card = trilha.querySelector('.trilha-card');
        const alturaCard = card.offsetHeight;
        const metadeAltura = alturaCard / 2;
        
        trilhasLinha.style.marginTop = `${margemTopOriginal + metadeAltura}px`;
        trilhasLinha.style.marginBottom = `${metadeAltura}px`;
    });

    trilha.addEventListener('mouseleave', () => {
        trilhasLinha.style.marginTop = `${margemTopOriginal}px`; 
        trilhasLinha.style.marginBottom = '';
    });
});