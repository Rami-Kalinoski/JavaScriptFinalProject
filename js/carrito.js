// IMPORTACIONES ---------------------------------------------------------------------------
import {cargarCarrito, addToCartInStorage, removeFromCartInStorage, vaciarCarritoInStorage} from "./src/functions.js";

// CARGAR CARRITO EN STORAGE si no existe --------------------------------------------------
if(!localStorage.getItem("carrito")) {
    localStorage.setItem("carrito", JSON.stringify([]));
}
const cart = JSON.parse(localStorage.getItem("carrito"));
cart.forEach((item) => {
    cargarCarrito(item);
})

// ELIMINAR DEL CARRITO --------------------------------------------------------------------
const removecartList = Array.from(document.querySelectorAll(".removeFromCart"));
removecartList.forEach((removecart) => {
    removecart.addEventListener("click", () => {
        const liPadre = removecart.parentNode.parentNode
        removeFromCartInStorage(liPadre);
        carrito.classList.add("visible");
    })
})

// MOSTRAR NUMERO DE CANTIDAD DE ELEMENTOS EN CARRITO --------------------------------------
const carritoSize = document.querySelector("#cart_lenght");
carritoSize.innerText = cart.length;

// VER CARRITO -----------------------------------------------------------------------------
const carrito = document.querySelector("#carrito");
const abrirCarrito = document.querySelector("#openCarrito_button");
const cerrarCarrito = document.querySelector("#closeCarrito_button");

abrirCarrito.addEventListener("click", () => {
    carrito.classList.add("visible");
    // CARGAR EL TOTAL -------------------------------------------------------------------------
    const totalNum = carrito.querySelector("#total_num");
    const listaProdsPreciosP = Array.from(carrito.querySelectorAll(".carritoLi_price"));
    let listaProdsPrecios = [];
    let precioActual;
    let precioTotal = 0;

    for (let i=0; i<listaProdsPreciosP.length; i++) {
        precioActual = listaProdsPreciosP[i].innerHTML;
        precioActual = precioActual.replace("$ ", "");
        listaProdsPrecios.push(precioActual);
    }

    for (let i=0; i<listaProdsPrecios.length; i++) {
        listaProdsPrecios[i] = parseFloat(listaProdsPrecios[i])
        precioTotal += listaProdsPrecios[i]
    }

    totalNum.innerText = `$ ${precioTotal}`;
})

cerrarCarrito.addEventListener("click", () => {carrito.classList.remove("visible")})

// VACIAR CARRITO --------------------------------------------------------------------------
const emptycart = document.querySelector("#emptycart_button");
emptycart.addEventListener("click", () => {vaciarCarritoInStorage()});

// AGREGAR AL CARRITO ----------------------------------------------------------------------
const addcart = document.querySelector("#addcart_button");
addcart.addEventListener("click", () => {addToCartInStorage()});