document.addEventListener("DOMContentLoaded", function () {

  // Ativa os ícones do Lucide
  lucide.createIcons();

  // Seleciona o botão do menu
  const toggle = document.getElementById("menu-toggle");

  // Seleciona o menu
  const menu = document.getElementById("main-menu");

  // Abre e fecha o menu no celular
  toggle.addEventListener("click", function () {

    const isOpen = menu.classList.toggle("mobile-menu-open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    toggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

  });

  // Fecha o menu quando um link é clicado
  menu.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      menu.classList.remove("mobile-menu-open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Abrir menu"
      );

    });

  });

});