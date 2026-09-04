/* =========================================================
   CIÊNTIFICANDO COM IFAS
   JAVASCRIPT 2.0
   MENU + GALERIA + LIGHTBOX + ACESSIBILIDADE
   ========================================================= */


/* =========================================================
   1. MENU MOBILE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const botaoMenu =
        document.getElementById("botaoMenu");

    const menu =
        document.getElementById("menuPrincipal");


    if (!botaoMenu || !menu) {
        return;
    }


    botaoMenu.addEventListener("click", function () {

        const aberto =
            menu.classList.toggle("ativo");


        botaoMenu.setAttribute(
            "aria-expanded",
            aberto ? "true" : "false"
        );


        botaoMenu.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    });


    /* Fecha o menu ao clicar em um link */

    const links =
        menu.querySelectorAll("a");


    links.forEach(function (link) {

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


    /* Fecha o menu ao aumentar a tela */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 700) {

                menu.classList.remove(
                    "ativo"
                );

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
    );

});



/* =========================================================
   2. ANIMAÇÃO DOS ELEMENTOS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const elementos =
        document.querySelectorAll(
            ".info-card, .cards article, .foto-item, .foto-galeria"
        );


    if (
        elementos.length === 0 ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }


    const observador =
        new IntersectionObserver(
            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "animar"
                            );


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
                threshold: 0.12
            }
        );


    elementos.forEach(
        function (elemento) {

            elemento.style.opacity =
                "0";

            elemento.style.transform =
                "translateY(25px)";

            elemento.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observador.observe(
                elemento
            );

        }
    );

});



/* =========================================================
   3. GALERIA / LIGHTBOX
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    const fotos =
        document.querySelectorAll(
            ".foto-item img, .foto-galeria img"
        );


    if (fotos.length === 0) {
        return;
    }


    /* Cria o Lightbox */

    const lightbox =
        document.createElement("div");


    lightbox.className =
        "lightbox";


    lightbox.setAttribute(
        "role",
        "dialog"
    );


    lightbox.setAttribute(
        "aria-modal",
        "true"
    );


    lightbox.setAttribute(
        "aria-label",
        "Imagem ampliada"
    );


    /* Botão fechar */

    const fechar =
        document.createElement("button");


    fechar.className =
        "fechar-lightbox";


    fechar.type =
        "button";


    fechar.innerHTML =
        "&times;";


    fechar.setAttribute(
        "aria-label",
        "Fechar imagem"
    );


    /* Imagem */

    const imagem =
        document.createElement("img");


    imagem.alt =
        "";


    imagem.setAttribute(
        "draggable",
        "false"
    );


    lightbox.appendChild(
        fechar
    );


    lightbox.appendChild(
        imagem
    );


    document.body.appendChild(
        lightbox
    );


    let fotoAnterior =
        null;


    /* Abrir */

    fotos.forEach(
        function (foto) {

            foto.setAttribute(
                "tabindex",
                "0"
            );


            foto.setAttribute(
                "role",
                "button"
            );


            foto.setAttribute(
                "aria-label",
                "Ampliar imagem"
            );


            function abrirFoto() {

                fotoAnterior =
                    document.activeElement;


                imagem.src =
                    foto.src;


                imagem.alt =
                    foto.alt;


                lightbox.classList.add(
                    "ativo"
                );


                document.body.style.overflow =
                    "hidden";


                fechar.focus();

            }


            foto.addEventListener(
                "click",
                abrirFoto
            );


            /* Permite abrir com Enter ou espaço */

            foto.addEventListener(
                "keydown",
                function (evento) {

                    if (
                        evento.key === "Enter" ||
                        evento.key === " "
                    ) {

                        evento.preventDefault();

                        abrirFoto();

                    }

                }
            );

        }
    );


    /* Fechar */

    function fecharLightbox() {

        lightbox.classList.remove(
            "ativo"
        );


        document.body.style.overflow =
            "";


        imagem.src =
            "";


        if (
            fotoAnterior &&
            typeof fotoAnterior.focus === "function"
        ) {

            fotoAnterior.focus();

        }

    }


    fechar.addEventListener(
        "click",
        fecharLightbox
    );


    /* Clicar fora */

    lightbox.addEventListener(
        "click",
        function (evento) {

            if (
                evento.target === lightbox
            ) {

                fecharLightbox();

            }

        }
    );


    /* Tecla ESC */

    document.addEventListener(
        "keydown",
        function (evento) {

            if (
                evento.key === "Escape" &&
                lightbox.classList.contains("ativo")
            ) {

                fecharLightbox();

            }

        }
    );

});