let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
    } else {
        //No se puedan repetir los nombres
        if (amigos.includes(nombre)) {
            alert("El amigo ya existe");
        } else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";

         //Transforma el nombre en un elemento de la lista "li" 
        document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
    }
}
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No hay amigos para sortear, minimo dos personas para sortear");
    } else {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSorteado}`;
        
    }
}