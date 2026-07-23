# DevClub Landing

Landing page institucional construída como projeto de seleção para o DevClub — um desafio solo de 7 dias com foco em qualidade técnica, identidade visual autoral e domínio de HTML, CSS e JavaScript puros (sem frameworks).

🔗 **Repositório:** [github.com/leotakahashii/devclub-landing](https://github.com/leotakahashii/devclub-landing)

## Sobre o projeto

O objetivo foi construir uma landing page com estética cinematográfica escura, paleta verde/teal inspirada na identidade real do DevClub, e elementos de gamificação como diferencial — tudo isso sem bibliotecas de UI, animação ou frameworks JS, para demonstrar domínio real das tecnologias base do front-end.

## Tecnologias

- **HTML5** semântico
- **CSS3** puro (Grid, Flexbox, variáveis CSS, animações, scroll-snap)
- **JavaScript (ES6+)** vanilla, sem bibliotecas

Nenhuma dependência externa além de fontes do Google Fonts.

## Funcionalidades e destaques técnicos

- **Sistema de partículas interativo** no hero, com efeito de "constelação" (linhas conectando partículas próximas) e reação ao movimento do mouse, feito em Canvas API puro.
- **Carrossel de trilhas** com drag via mouse, `scroll-snap` nativo e navegação sincronizada por pontinhos, usando `IntersectionObserver`.
- **Cards com tilt 3D** (efeito de inclinação seguindo o cursor) na seção de tutores, calculado em tempo real a partir da posição do mouse.
- **Mockups ilustrativos 100% em CSS/HTML**, sem imagens externas, representando prints da plataforma na seção de diferenciais.
- **FAQ em accordion** com animação de altura suave e JavaScript vanilla.
- **Scroll suave e centralizado** ao navegar pelo menu, com fallback consciente para seções mais altas que a viewport.
- **Header fixo** com fundo semi-transparente e blur, mantendo a identidade visual mesmo durante o scroll.
- **Totalmente responsivo**, com breakpoints dedicados para tablet e mobile.
- **Animações de scroll reveal** usando `IntersectionObserver`, reanimando elementos a cada entrada na viewport.

## Decisões de engenharia

Alguns trade-offs foram tomados conscientemente ao longo do desenvolvimento, e valem ser mencionados:

- A seção de trilhas passou por duas abordagens antes da versão final: um sistema de hover com expansão dinâmica via JavaScript (`margin`/`padding` calculados com `getComputedStyle` e `offsetHeight`) foi implementado, mas causava instabilidade visual (flicker) em determinadas posições do mouse. Diante do prazo de entrega, a solução foi substituída por um carrossel com `scroll-snap` nativo — mais estável, mais previsível entre navegadores, e ainda assim visualmente rico.
- O efeito de partículas foi mantido **apenas no hero**, por decisão deliberada: repeti-lo em todas as seções comprometeria a performance (múltiplas instâncias de `requestAnimationFrame` e um algoritmo O(n²) de conexão entre partículas rodando simultaneamente) e diluiria o impacto visual que o torna especial.

## Estrutura do projeto

```
devclub-landing/
├── index.html
├── css/
│   ├── reset.css
│   ├── variable.css
│   ├── style.css
│   └── animation.css
├── js/
│   ├── main.js
│   ├── particles.js
│   ├── scrollReveal.js
│   ├── carrossel.js
│   ├── faq.js
│   ├── logoGlow.js
│   ├── tutorTilt.js
│   └── navScroll.js
└── README.md
```

## Como rodar localmente

Não há build nem dependências — basta abrir o `index.html` no navegador, ou servir a pasta com uma extensão como Live Server (VS Code).

```bash
git clone https://github.com/leotakahashii/devclub-landing.git
cd devclub-landing
```

Depois, abra `index.html` diretamente no navegador ou use um servidor local de sua preferência.

## Autor

**Leonardo Takahashi Rebello**
Desenvolvedor em transição de carreira (gastronomia → tecnologia), estudando Full Stack na DevClub e Ciência da Computação em paralelo.