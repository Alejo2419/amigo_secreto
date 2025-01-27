// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//arreglo vacio
let amigosTodos = [];
//funcion para agregar los valores del campo de texto al arreglo
function agregarAmigo() {

    const ingresarAmigo = document.getElementById("amigo");
//verificar que no este vacio el campo de texto
    if (ingresarAmigo.value === "") {
        alert("por favor ingresa un nombre");
        
    } else{
        amigosTodos.push(ingresarAmigo.value);

    }
//crear la lista con los valores del arreglo
    const listaAmigos = document.getElementById("listaAmigos");
    const crearLista = document.createElement("li");

    crearLista.textContent = ingresarAmigo.value;
    listaAmigos.appendChild(crearLista);
//limpiar el campo de texto
    ingresarAmigo.value = "";

}
//funcion para crear una lista por cada elemento del arreglo
function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    //limpiar el campo de texto
    listaAmigos.innerHTML = "";

    for (let i = 0; i<amigosTodos.length; i++) {

        const crearLista = document.createElement("li");
        crearLista.textContent = amigosTodos[i];
        listaAmigos.appendChild(crearLista);
    }
}
//funcion para sortear los amigos
function sortearAmigo() {
//verificar que exista por lo menos 1 elemento en la lista
    if (amigosTodos.length <2) {
        alert ("Ingresa por lo menos 2 amigos para realizar el sorteo");
        return;
    } 
    
//crear el indice aleatorio y obtener el nombre sorteado
    const aleatorio = Math.floor(Math.random() * amigosTodos.length);
    const amigoSecreto = amigosTodos[aleatorio];

//mostrar el amigo secreto
    let subtituloSecreto = "Tu amigo secreto es: ";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h3>" + subtituloSecreto + amigoSecreto + "</h3>";
    
}
//funcion para reiniciar la lista
function reiniciarLista() {
    if (amigosTodos.length === 0) {
        alert("La lista ya está vacía.");
    } else {
    amigosTodos = [];

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    }
}
