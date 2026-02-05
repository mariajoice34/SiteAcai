// Botão Açaí
const btnAcai = document.getElementById("btn-acai");

// Cardápio
const cardapioAcai = document.getElementById("cardapio-acai");

btnAcai.addEventListener("click", () => {
    cardapioAcai.style.display = "block";
    cardapioAcai.scrollIntoView({ behavior: "smooth" });
});

// Função carrinho
function adicionarCarrinho() {
    const tamanhoSelecionado = document.querySelector(
        'input[name="tamanho-acai"]:checked'
    ).value;

    alert(
        "🍇 Açaí adicionado ao carrinho!\nTamanho: " + tamanhoSelecionado
    );
}
