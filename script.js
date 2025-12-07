document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("menu-aberto");
            menuToggle.classList.toggle("menu-aberto");
        });

        menu.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove("menu-aberto");
                menuToggle.classList.remove("menu-aberto");
            });
        });
    }

    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", enviarMensagem);
    }
});

function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    
    const telefone = "5568999365536";

    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e a mensagem antes de enviar.");
        return;
    }

    const texto = `Olá Elton! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    window.open(`https://wa.me/${telefone}?text=${msgFormatada}`, "_blank");

    document.getElementById("formulario").reset();
}
