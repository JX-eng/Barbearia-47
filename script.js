// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const menuAberto = navbar.classList.contains("active");

    menuToggle.textContent = menuAberto ? "×" : "☰";
    menuToggle.setAttribute("aria-expanded", menuAberto);
});


// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {

    const clicouNoMenu = navbar.contains(event.target);
    const clicouNoBotao = menuToggle.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
    }

});


// =========================
// HEADER AO ROLAR
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =========================
// ANIMAÇÕES AO ROLAR
// =========================

// =========================
// ANIMAÇÕES AO ROLAR
// =========================

const elementosAnimados = document.querySelectorAll(
    ".servico-card, .galeria-item, .sobre-imagem, .sobre-conteudo, .avaliacao-card, .contato-mapa, .contato-info, .cta-final-conteudo"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("aparecer");
        }

    });

}, {
    threshold: 0.1
});

elementosAnimados.forEach((elemento, index) => {

    elemento.classList.add("escondido");

    elemento.style.transitionDelay = `${index * 0.05}s`;

    observer.observe(elemento);

});

// =========================
// LINK ATIVO NO MENU
// =========================

const sections = document.querySelectorAll(
    "section[id]"
);

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            secaoAtual = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href") === `#${secaoAtual}`
        ) {
            link.classList.add("ativo");
        }

    });

});