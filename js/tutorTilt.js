// Efeito de tilt 3D: o card inclina seguindo a posição do mouse dentro dele
const tutorCards = document.querySelectorAll('.tutor-card');

tutorCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = (x / rect.width) - 0.5;
        const percentY = (y / rect.height) - 0.5;

        const anguloMaximo = 12; // graus — controla o quão "dramático" é o tilt
        const rotateX = percentY * -anguloMaximo;
        const rotateY = percentX * anguloMaximo;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
        // volta ao estado neutro suavemente (a transition do CSS cuida da suavização)
        card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});