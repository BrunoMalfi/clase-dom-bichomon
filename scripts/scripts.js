const titulo = document.getElementById('gen-1');
const gen1div=document.body.getElementsByTagName('div')[2] ; 
const nodosimagen=document.body.getElementsByTagName('img') ;
const cartaPokemon= document.getElementsByClassName('infocard')


titulo.innerText = 'Generasión 1 Pokimon';
gen1div.style.background = 'yellow';
//titulo.setAttribute('hola','test')

console.log(document.title)
console.log('test : ', titulo)
//console.log('gen1div : ', gen1div)
console.log('URL : ', document.URL)
console.log('Domain : ', document.domain)
console.log('nodos imagenes : ', nodosimagen)
console.log('nodos cartas pokemon : ', cartaPokemon)

for( let imagen of nodosimagen ) {
    imagen.setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
}
for (let infocard of cartaPokemon){
    const a = infocard.getElementsByTagName('a'); 
     for ( let enlace of a ){
        if (enlace.className =='itype flying' ){
            //enlace.style.background = 'red'
            infocard.style.background = 'red'

            console.log(' soy a itype flying : ', enlace)
        }
     }
}