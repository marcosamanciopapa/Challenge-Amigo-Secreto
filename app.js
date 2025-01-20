let amigos = [];
let campoAmigo = document.getElementById('amigo');
let listaDeAmigos = document.getElementById('listaAmigos');


function adicionarAmigo(){
    if (campoAmigo.value == ''){
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