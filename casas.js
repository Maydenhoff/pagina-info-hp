let casasArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

let casasArray2 = [
    {
        nombre: "Gryffindor",
        imagen:
            "imagenes/Gryffindor_Pottermore.webp",
    },
    {
        nombre: "Slytherin",
        imagen:
            "imagenes/Slytherin_Pottermore.webp",
    },
    {
        nombre: "Hufflepuff",
        imagen:
            "imagenes/Hufflepuff_Pottermore.webp",
    },
    {
        nombre: "Ravenclaw",
        imagen:
            "imagenes/Ravenclaw_Pottermore.webp",
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

