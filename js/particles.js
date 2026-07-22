// Sistema de partículas que reagem ao mouse no fundo do hero
const canvas = document.getElementById('particulas-hero');
const ctx = canvas.getContext('2d');
let largura, altura;

function redimensionar() {
    largura = canvas.width = canvas.offsetWidth;
    altura = canvas.height = canvas.offsetHeight;
}
redimensionar();

const mouse = { x: null, y: null, raio: 120 };

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Cada partícula sabe sua posição "de origem" e volta para ela quando o mouse se afasta
class Particula {
    constructor() {
        this.x = Math.random() * largura;
        this.y = Math.random() * altura;
        this.baseX = this.x;
        this.baseY = this.y;
        this.tamanho = Math.random() * 2 + 1;
        this.densidade = Math.random() * 20 + 5; // controla o quanto ela "resiste" ao empurrão do mouse
    }

    desenhar() {
        ctx.fillStyle = 'rgba(57, 211, 83, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.tamanho, 0, Math.PI * 2);
        ctx.fill();
    }

    atualizar() {
        if (mouse.x !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distancia = Math.sqrt(dx * dx + dy * dy);

            if (distancia < mouse.raio) {
                const forca = (mouse.raio - distancia) / mouse.raio;
                const distanciaSegura = distancia || 0.1; // evita divisão por zero se o mouse cair exatamente sobre a partícula
                this.x -= (dx / distanciaSegura) * forca * this.densidade;
                this.y -= (dy / distanciaSegura) * forca * this.densidade;
            } else {
                this.voltarPraCasa();
            }
        } else {
            this.voltarPraCasa();
        }
        this.desenhar();
    }

    voltarPraCasa() {
        this.x -= (this.x - this.baseX) / 20;
        this.y -= (this.y - this.baseY) / 20;
    }
}

let particulas = [];

function iniciar() {
    particulas = [];
    const quantidade = (largura * altura) / 9000; // densidade: menor número = mais partículas
    for (let i = 0; i < quantidade; i++) {
        particulas.push(new Particula());
    }
}
iniciar();

function animar() {
    ctx.clearRect(0, 0, largura, altura);
    particulas.forEach(p => p.atualizar());
    requestAnimationFrame(animar);
}
animar();

window.addEventListener('resize', () => {
    redimensionar();
    iniciar();
});