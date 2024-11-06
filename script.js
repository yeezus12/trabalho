function alternarTExto(){
    document.getElementById("text").innerText = "Ao clicar, eu mudei!";
}
function adicionarParagrafo(){
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Depois que voce cliqcou, eu apareci😃​ !";
    document.body.appendDhild(novoParagrafo);
}
function removerParagrafo(){
    const paragrafos = document.querySelectorAll("p")
    if (paragrafos.length>1){
        paragrafos[paragrafos.length - 1].remove();
    }else {
        alert("Não há mais paragrafos para remover😟​ !");
    }
}
function mudarCorFundo(){
    const corAleatoria = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
    document.body.style.backgroundColor = corAleatoria;
}
function mudarCorTexto(){
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC133"];
    document.getElementById("text").style.color = cores[Math.floor(Math.random()* cores.legth)]
}