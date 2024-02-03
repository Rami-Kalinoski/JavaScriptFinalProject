// IMPORTACIONES --------------------------------------------------------------------------------
import {cargarTienda, darVidaATienda, seleccionarProducto} from "./src/functions.js";

// PROGRAMA PRINCIPAL ---------------------------------------------------------------------------
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

cargarTienda();
darVidaATienda();
seleccionarProducto();