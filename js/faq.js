// Controla a abertura/fechamento dos itens do FAQ
const itensFaq = document.querySelectorAll('.faq-item');

itensFaq.forEach((item) => {
    const pergunta = item.querySelector('.faq-pergunta');

    pergunta.addEventListener('click', () => {
        const jaEstaAberto = item.classList.contains('aberto');

        // fecha todos os itens primeiro (comportamento "accordion": só um aberto por vez)
        itensFaq.forEach((outroItem) => outroItem.classList.remove('aberto'));

        // se o item clicado NÃO estava aberto antes, abre ele
        // (isso permite clicar de novo no mesmo item pra fechá-lo)
        if (!jaEstaAberto) {
            item.classList.add('aberto');
        }
    });
});