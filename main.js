/* =========================================================
   CIÊNTIFICANDO COM IFAS
   JAVASCRIPT
   COLÉGIO ESTADUAL PROFESSOR GABRIEL ROSA
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.querySelector(".menu");


if (botaoMenu && menu) {

    /* Abrir e fechar o menu */

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("ativo");

        const aberto = menu.classList.contains("ativo");

        botaoMenu.setAttribute(
            "aria-expanded",
            aberto
        );

        botaoMenu.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    });


    /* Fechar o menu ao clicar em um link */

    const linksMenu = menu.querySelectorAll("a");


    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("ativo");

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });

}


/* =========================================================
   ANIMAÇÃO DOS ELEMENTOS
   ========================================================= */

const elementos = document.querySelectorAll(
    ".info-card, .cards article, .foto-item"
);


if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("animar");

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach(function (elemento) {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(30px)";

        observador.observe(elemento);

    });

}


/* =========================================================
   FECHAR MENU AO REDIMENSIONAR A TELA
   ========================================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 700) {

        if (menu) {
            menu.classList.remove("ativo");
        }

        if (botaoMenu) {

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    }

});