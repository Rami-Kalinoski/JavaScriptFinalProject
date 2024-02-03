// IMPORTACIONES --------------------------------------------------------------------------------
import {cargarTienda, darVidaATienda, funcionDeFiltros, seleccionarProducto} from "./src/functions.js";

// PROGRAMA PRINCIPAL ---------------------------------------------------------------------------
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

cargarTienda();
darVidaATienda();
funcionDeFiltros();
seleccionarProducto();