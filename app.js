let amigos = [];
let campoAmigo = document.getElementById('amigo');
let listaDeAmigos = document.getElementById('listaAmigos');
let listaAmigoSorteado = document.getElementById('resultado');
let nomeSorteado = document.createElement('li');
let indiceSorteado;


function adicionarAmigo(){
    if (campoAmigo.value === ''){
        alert('Por favor, insira um nome.')
    }else {
        amigos.push(campoAmigo.value);
        atualizarListaDeAmigos();
    }
    campoAmigo.value = '';
}

function atualizarListaDeAmigos(){
    listaDeAmigos.innerHTML = "";
    for (let i =0; i <= amigos.length-1; i++){
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[i];
        listaDeAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo(){
    if (amigos.length < 1){
        alert('Não há amigos para serem sorteados.')
    }else {
        indiceSorteado = Math.floor(Math.random() * amigos.length);
        nomeSorteado.innerText = amigos[indiceSorteado];
        listaAmigoSorteado.appendChild(nomeSorteado);
    }
}