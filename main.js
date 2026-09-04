
```javascript
/* =========================================================
   CIÊNTIFICANDO COM IFAS
   JAVASCRIPT
   COLÉGIO ESTADUAL PROFESSOR GABRIEL ROSA
   ========================================================= */


/* =========================================================
   1. MENU MOBILE
   ========================================================= */

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.querySelector(".menu");


if (botaoMenu && menu) {

    /* -----------------------------------------------------
       Abrir e fechar o menu
       ----------------------------------------------------- */

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("ativo");

        const aberto =
            menu.classList.contains("ativo");


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


    /* -----------------------------------------------------
       Fechar o menu ao clicar em um link
       ----------------------------------------------------- */

    const linksMenu =
        menu.querySelectorAll("a");


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
   2. ANIMAÇÃO DOS ELEMENTOS
   ========================================================= */

/*
   A animação é aplicada aos cards e às fotos
   quando eles aparecem na tela.
*/

const elementos =
    document.querySelectorAll(
        ".info-card, .cards article, .foto-item, .foto-galeria"
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


                        entrada.target.style.opacity =
                            "1";


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


        elemento.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";


        observador.observe(elemento);

    });

}


/* =========================================================
   3. FECHAR MENU AO REDIMENSIONAR A TELA
   ========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 700) {

            if (menu) {

                menu.classList.remove(
                    "ativo"
                );

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

    }
);


/* =========================================================
   4. GALERIA DE FOTOS
      LIGHTBOX
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* -------------------------------------------------
           Seleciona as imagens da galeria
           ------------------------------------------------- */

        const fotos =
            document.querySelectorAll(
                ".foto-galeria img"
            );


        /*
           Se a página não possuir galeria,
           o código não executará o Lightbox.
        */

        if (fotos.length === 0) {

            return;

        }


        /* =================================================
           5. CRIAÇÃO DO LIGHTBOX
           ================================================= */

        const lightbox =
            document.createElement("div");


        lightbox.classList.add(
            "lightbox"
        );


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
            "Visualização ampliada da imagem"
        );


        /* =================================================
           6. BOTÃO FECHAR
           ================================================= */

        const fechar =
            document.createElement("button");


        fechar.classList.add(
            "fechar-lightbox"
        );


        fechar.innerHTML = "&times;";


        fechar.setAttribute(
            "aria-label",
            "Fechar imagem"
        );


        fechar.setAttribute(
            "type",
            "button"
        );


        /* =================================================
           7. IMAGEM AMPLIADA
           ================================================= */

        const imagemGrande =
            document.createElement("img");


        imagemGrande.alt = "";


        imagemGrande.setAttribute(
            "draggable",
            "false"
        );


        /* =================================================
           8. ADICIONA OS ELEMENTOS AO LIGHTBOX
           ================================================= */

        lightbox.appendChild(
            fechar
        );


        lightbox.appendChild(
            imagemGrande
        );


        document.body.appendChild(
            lightbox
        );


        /* =================================================
           9. ABRIR A FOTO
           ================================================= */

        fotos.forEach(function (foto) {

            foto.addEventListener(
                "click",
                function () {

                    imagemGrande.src =
                        foto.src;


                    imagemGrande.alt =
                        foto.alt;


                    lightbox.classList.add(
                        "ativo"
                    );


                    /*
                       Impede que a página fique
                       rolando enquanto o Lightbox
                       estiver aberto.
                    */

                    document.body.style.overflow =
                        "hidden";


                    /*
                       Coloca o foco no botão
                       de fechar.
                    */

                    fechar.focus();

                }
            );

        });


        /* =================================================
           10. FECHAR PELO BOTÃO X
           ================================================= */

        fechar.addEventListener(
            "click",
            function () {

                fecharLightbox();

            }
        );


        /* =================================================
           11. FECHAR CLICANDO FORA DA FOTO
           ================================================= */

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


        /* =================================================
           12. FECHAR COM A TECLA ESC
           ================================================= */

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


        /* =================================================
           13. FUNÇÃO PARA FECHAR O LIGHTBOX
           ================================================= */

        function fecharLightbox() {

            lightbox.classList.remove(
                "ativo"
            );


            document.body.style.overflow =
                "";


            /*
               Limpa a imagem depois de fechar.
            */

            imagemGrande.src = "";

        }

    }
);
```
