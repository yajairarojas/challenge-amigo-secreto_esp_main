// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Funcionalidades:


//Array nombre de amigos
let amigo = [];

//Función para agregar amigo
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("Ingresar un nombre");
        return;

    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo,focus();
    renderizarAmigos();

}



//Función lista de amigos
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
   
        }
    


}
//Función sortear amigo
function sortearAmigo(){
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;

    }
    let amigoSorteado = amigo[Math.floor(Math.random()* amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    

}

