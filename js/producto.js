// IMPORTACIONES --------------------------------------------------------------------------------
import {cargarInfoProducto, incrementarCantidad, decrementarCantidad} from "./src/functions.js";

// PROGRAMA PRINCIPAL ---------------------------------------------------------------------------
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

cargarInfoProducto();

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
minus.addEventListener("click", () => decrementarCantidad());
plus.addEventListener("click", () => incrementarCantidad());