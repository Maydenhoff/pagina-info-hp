let casasArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

let casasArray2 = [
    {
        nombre: "Gryffindor",
        imagen:
            "https://static.wikia.nocookie.net/esharrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest?cb=20140922195249",
    },
    {
        nombre: "Slytherin",
        imagen:
            "https://static.wikia.nocookie.net/esharrypotter/images/6/69/Slytherin_Pottermore.png/revision/latest?cb=20141001130915",
    },
    {
        nombre: "Hufflepuff",
        imagen:
            "https://static.wikia.nocookie.net/esharrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest?cb=20141001131135",
    },
    {
        nombre: "Ravenclaw",
        imagen:
            "https://static.wikia.nocookie.net/esharrypotter/images/7/76/Ravenclaw_Pottermore.png/revision/latest?cb=20141001130914",
    },
];

const contenedorCasas = document.querySelector(".contenedor-casas"); // <div> ya existente en el html

for (let i = 0; i < casasArray2.length; i++) {
    let divCasa = document.createElement("div"); // <div>
    let nuevaP = document.createElement("p"); // <p>
    let imgCasa = document.createElement("img"); // <img>
    let aDeCasa = document.createElement("a") // <a>

    //agregarle al <p> su contenido
    let contenido = document.createTextNode(casasArray2[i].nombre);
    nuevaP.appendChild(contenido);

    // crear el <img> con el "src"
    imgCasa.src = casasArray2[i].imagen;

    // <img> -> <a>
    let hrefCasa = casasArray2[i].nombre.toLowerCase() + ".html" // "{NOMBRE DE LA CASA}.html"
    aDeCasa.href= hrefCasa
    aDeCasa.appendChild(imgCasa) 
    // <a> (que contiene la <img>) y el <p> ->  divCasa (<div>)
    divCasa.appendChild(nuevaP);
    divCasa.appendChild(aDeCasa);
    
    // divCasa (contiene <a> y <p>) -> contenedorCasas (<div>)
    console.log("Esto es divCasa despues de agregarle todo", divCasa);

    contenedorCasas.appendChild(divCasa);
}

