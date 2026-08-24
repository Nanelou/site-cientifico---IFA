// ==============================
// MENU MOBILE
// ==============================

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");

});


// Fecha o menu quando o usuário
// clica em uma opção

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

    });

});


// ==============================
// BOTÃO DO PROJETO
// ==============================

const botaoMensagem = document.getElementById("botaoMensagem");

botaoMensagem.addEventListener("click", function () {

    alert(
        "Bem-vindo ao projeto Ciência & Tecnologia do Colégio Estadual Professor Gabriel Rosa!"
    );

});


// ==============================
// ANIMAÇÃO DAS SEÇÕES
// ==============================

const elementos = document.querySelectorAll(
    ".info-card, .cards article, .linha-tempo div"
);

const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "0.6s";

    observador.observe(elemento);

});