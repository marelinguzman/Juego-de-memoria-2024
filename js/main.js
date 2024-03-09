let cards1 =["📜","🗺️","📻","🧤","📋","🗓️","🔒","📂","📉","💎","🎹","📈"]
let cards2 =["📜","🗺️","📻","🧤","📋","🗓️","🔒","📂","📉","💎","🎹","📈"]

function repartir_Cartas(){
    let tablero = document.querySelector("#root")
    let todas_las_cartas = cards1.concat(cards2);
    todas_las_cartas.forEach((cada_Carta)=>{
        let cart = document.createElement("div")
        cart.innerHTML = `<div class="carta">${cada_Carta}</div>`;
        //agrega un elemento hijo a este div, tiene que ser un createElement
        tablero.appendChild(cart)
    })
}




repartir_Cartas();
