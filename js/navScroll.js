// Intercepta cliques nos links do menu pra centralizar a seção na tela,
// em vez do comportamento padrão do navegador (que só alinha pelo topo)
const linksMenu = document.querySelectorAll('nav a[href^="#"]');

linksMenu.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // impede o salto padrão do navegador

        const idDestino = link.getAttribute('href'); // pega o "#formacoes", por exemplo
        const secaoDestino = document.querySelector(idDestino);

        secaoDestino.scrollIntoView({
            behavior: 'smooth',
            block: 'center' // tenta centralizar o elemento verticalmente na tela
        });
    });
});