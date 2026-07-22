// Faz o brilho da logo do hero reagir à distância do mouse
const heroLogo = document.querySelector('.hero-logo');
const hero = document.getElementById('hero');

hero.addEventListener('mousemove', (e) => {
    const rect = heroLogo.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;

    const dx = e.clientX - centroX;
    const dy = e.clientY - centroY;
    const distancia = Math.sqrt(dx * dx + dy * dy);

    const raioMaximo = 400; // distância a partir da qual o glow não aumenta mais
    const intensidade = Math.max(0, 1 - distancia / raioMaximo); // 0 (longe) a 1 (perto)

    // interpola entre o glow "base" (12px) e o glow "máximo" (40px) conforme a proximidade
    const desfoque = 12 + intensidade * 28;
    const opacidade = 0.3 + intensidade * 0.5;

    heroLogo.style.filter = `drop-shadow(0 0 ${desfoque}px rgba(57, 211, 83, ${opacidade}))`;
});