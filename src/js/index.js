// pegar o botao no JS pra poder verificar quando o usuário clicar encima de um deles  
const botoes = document.querySelectorAll(".botao");

// pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        // adicionar a classe "selecionado" no botão que o usuário clicou 
        botao.classList.add("selecionado")             
        // adicionar a classe "selecionado" no personagem que o usuário clicou
        personagens[indice].classList.add("selecionado");
    });
});

// verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

// verificar se ja existe um botao selecionado, se sim, devemos remover a seleção dele
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

