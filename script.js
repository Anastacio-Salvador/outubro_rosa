// =====================================================
// MENU MOBILE
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// =====================================================
// FECHAR MENU AO CLICAR NUM LINK
// =====================================================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


// =====================================================
// ANO AUTOMÁTICO
// =====================================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
