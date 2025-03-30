const menu = document.querySelector("nav ul");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
});

// Função para abrir o modal com a imagem clicada
function openModal(imgSrc, altText) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("expandedImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = altText;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Adiciona o evento de clique nas imagens para abrir o modal
var images = document.querySelectorAll(".thumbnail");
images.forEach(function(img) {
    img.onclick = function() {
        openModal(this.src, this.alt);
    };
});
