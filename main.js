// =========================================================
// MENU MOBILE
// =========================================================

const botaoMenu =
    document.getElementById("botaoMenu");

const menu =
    document.querySelector(".menu");


if (botaoMenu && menu) {

    botaoMenu.addEventListener(
        "click",
        function () {

            menu.classList.toggle("ativo");

            const menuAberto =
                menu.classList.contains("ativo");

            botaoMenu.setAttribute(
                "aria-expanded",
                menuAberto
            );

        }
    );

}


// =========================================================
// FECHAR MENU AO CLICAR
// =========================================================

const linksMenu =
    document.querySelectorAll(".menu a");


linksMenu.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                menu.classList.remove("ativo");

                botaoMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);


// =========================================================
// BOTÃO DO PROJETO
// =========================================================

const botaoMensagem =
    document.getElementById("botaoMensagem");


if (botaoMensagem) {

    botaoMensagem.addEventListener(
        "click",
        function () {

            alert(
                "Bem-vindo ao projeto Ciência & Tecnologia do Colégio Estadual Professor Gabriel Rosa!"
            );

        }
    );

}


// =========================================================
// ANIMAÇÃO DAS SEÇÕES
// =========================================================

const elementos =
    document.querySelectorAll(
        ".info-card, .cards article, .linha-tempo div"
    );


if ("IntersectionObserver" in window) {

    const observador =
        new IntersectionObserver(
            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.style.opacity =
                                "1";

                            entrada.target.style.transform =
                                "translateY(0)";

                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.2
            }
        );


    elementos.forEach(
        function (elemento) {

            elemento.style.opacity =
                "0";

            elemento.style.transform =
                "translateY(30px)";

            elemento.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observador.observe(
                elemento
            );

        }
    );

}