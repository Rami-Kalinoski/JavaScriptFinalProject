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

// ELIMINAR DEL CARRITO --------------------------------------------------------------------
const removecartList = Array.from(document.querySelectorAll(".removeFromCart"));
removecartList.forEach((removecart) => {
    removecart.addEventListener("click", () => {
        const liPadre = removecart.parentNode.parentNode
        removeFromCartInStorage(liPadre);
        carrito.classList.add("visible");
    })
})

// COMPRAR CARRITO -------------------------------------------------------------------------
const buycart = document.querySelector("#buy_button");
const buyContainer = document.querySelector(".comprar_container");
buycart.addEventListener("click", () => {
    buyContainer.classList.add("visible");
    carrito.classList.remove("visible");
    window.scrollTo(0, 0);
})

const finalgraciasContainer = document.querySelector(".finalmsg_container");
const cancelpurchase = document.querySelector("#cancel_button");
const formulario = document.querySelector("#comprar_form");
formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    // CAPTURAR DATOS DEL CLIENTE
    const fname = document.querySelector("#nombreCliente_input").value;
    const lname = document.querySelector("#apellidoCliente_input").value;
    const email = document.querySelector("#emailCliente_input").value;
    const phone = document.querySelector("#phoneCliente_input").value;

    // CREAR INFORMACIÓN DE CLIENTE EN EL CUERPO DEL EMAIL
    let clienteHTML = `<b>Nombre del Cliente:</b> ${lname} ${fname}<br><b>Email del Cliente:</b> ${email}<br><b>Teléfono del Cliente:</b> ${phone}<br><br><br><b>Orden de Compra:</b><br><br>`;

    // CREAR INFORMACIÓN DE COMPRA EN EL CUERPO DEL EMAIL
    const carritoAux = JSON.parse(localStorage.getItem("carrito"));
    let precioFinal = 0;
    let contentHTML = `<ul>`;
    carritoAux.forEach((elemento) => {
        contentHTML += `<li>Nombre: ${elemento.name}<br>Cantidad: ${elemento.cant}<br>Talle: ${elemento.size}<br>Color: ${elemento.color}<br>Precio: $${elemento.price}</li>`;
        precioFinal += parseFloat(elemento.price);
    })
    contentHTML += `<br><br><b>Precio Final:</b> $${precioFinal}`;
    contentHTML += `</ul>`;

    const cuerpoEmail = clienteHTML + contentHTML;

    Email.send({
        SecureToken : "608bc5f7-4fd4-4731-b414-e12a7eb3e1f8",
        To : "ramikalinoski@gmail.com",
        From : "valeriamelisaromero@gmail.com",
        Subject : "Nueva Orden de Compra",
        Body : cuerpoEmail
        }).then();

    finalgraciasContainer.classList.add("visible");
    buyContainer.classList.remove("visible");
    const timeId = setTimeout(()=>{
        vaciarCarritoInStorage();
    }, 5000)
    return false;
})

cancelpurchase.addEventListener("click", () => {
    carrito.classList.add("visible");
    buyContainer.classList.remove("visible");
})

// AGREGAR AL CARRITO ----------------------------------------------------------------------
const addcart = document.querySelector("#addcart_button");
addcart.addEventListener("click", () => {
    addToCartInStorage();
    Toastify({
        text: "Agregado al carrito ;)",
        duration: 5000,
        gravity: "bottom",
        className: "added_notification",
        backgroundColor: "#e9e6b4"
    }).showToast();
});