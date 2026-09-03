/* =========================================================
   CIÊNTIFICANDO COM IFAS
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const botaoMenu = document.getElementById("botaoMenu");

const menu = document.querySelector(".menu");


if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("ativo");

        const aberto =
            menu.classList.contains("ativo");

        botaoMenu.setAttribute(
            "aria-expanded",
            aberto
        );

    });


    /* Fecha o menu quando um link é clicado */

    const linksMenu =
        menu.querySelectorAll("a");


    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("ativo");

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   ANIMAÇÃO DOS CARDS
   ========================================================= */

const elementos =
    document.querySelectorAll(
        ".info-card, .cards article"
    );


if ("IntersectionObserver" in window) {

    const observador =
        new IntersectionObserver(

            function (entradas) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "animar"
                        );

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