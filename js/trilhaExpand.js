// Tentativa inicial: expandir a margem da .trilhas-linha dinamicamente no hover,
// calculando a altura do card com offsetHeight. Causava flicker/instabilidade
// (o card empurrava o nó pra fora do cursor, disparando um loop de mouseenter/mouseleave).
// Substituído por espaço fixo reservado via CSS para garantir estabilidade na entrega.
const trilhas = document.querySelectorAll('.trilha');
const trilhasLinha = document.querySelector('.trilhas-linha');

const estilos = getComputedStyle(trilhasLinha);
const margemTopOriginal = parseFloat(estilos.marginTop);

let timeoutSaida;

trilhas.forEach(trilha => {
    trilha.addEventListener('mouseenter', () => {
        clearTimeout(timeoutSaida);

        const card = trilha.querySelector('.trilha-card');
        const alturaCard = card.offsetHeight;
        const metadeAltura = alturaCard / 2;

        trilhasLinha.style.marginTop = `${margemTopOriginal + metadeAltura}px`;
        trilhasLinha.style.marginBottom = `${metadeAltura}px`;
    });

    trilha.addEventListener('mouseleave', () => {
        timeoutSaida = setTimeout(() => {
            trilhasLinha.style.marginTop = `${margemTopOriginal}px`;
            trilhasLinha.style.marginBottom = '';
        }, 100);
    });
});