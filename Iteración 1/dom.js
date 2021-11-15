// Iteración#1

window.onload = () =>{
    btn();
    title();
    consoleParagrafos();
    consolePokeClass();
    consoleAtr();
    consoleAtr2();
}

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const btn = () => {
    let boton = document.querySelector('.showme');
    console.log(boton);
};

// // 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const title = () => {
    let h1Element = document.querySelector('#pillado');
    console.log(h1Element);
    
};

// 1.3 Usa querySelector para mostrar por consola todos los p

const consoleParagrafos = () =>{
    let paragra = document.querySelectorAll('p');
    paragra.forEach(function(elemento){
        console.log(elemento);
    });
};

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const consolePokeClass = () => {
    let pokeSelect = document.querySelectorAll('.pokemon');
    pokeSelect.forEach(function(elemento){
        console.log(elemento);
    });
};

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

const consoleAtr = () => {
    let atr = document.querySelectorAll('span[data-function="testMe"]')
    atr.forEach(function(elemento){
        console.log(elemento);
    });
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const consoleAtr2 = () => {
    let atr2 = document.querySelectorAll('span[data-function="testMe"]')[2];
    console.log(atr2)
}