let frase = "Hola que tal estas, hola que amigo agua sur salta camion sur agua hola"


function normaliza(palabra){
    return palabra.toLowerCase().replace(',','').replace('.','')
}
function contadorPalabras(frase){
    let palabras = {};
    let array_palabras = frase.split(' ');

    //console.log(array_palabras)
    for(palabra of array_palabras){
        if(normaliza(palabra) in palabras){
            palabras[normaliza(palabra)]++;
        }else{
            palabras[normaliza(palabra)] = 1
        }
    }
    console.log(palabras);

}

contadorPalabras(frase);

let aa = {
    p1:0,
    p2:2,
    p3:"hola"
}
console.log(("p1" in aa));