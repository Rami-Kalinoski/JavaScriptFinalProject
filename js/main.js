// IMPORTACIONES -----------------------------------------------------------------------------------------------------
import productos from './database.js';

// CARGAR TIENDA ---------------------------------------------------
import {cargarTienda, cargarProductoEnTienda} from './functions.js';
import {art111, art112, art211, art212, art311, art312, art413, art513, art621} from './vars.js';
// DAR VIDA A TIENDA -------------------------------------------------------------------------------
import {darVidaATienda} from './functions.js';
import {img111art, img112art, img211art, img212art, img311art, img312art, img413art, img513art, img621art} from './vars.js';
// SELECCIONAR PRODUCTO ----------------------------------------------------------------------------------------------------
import {tiendaPage, productPage} from './pages.js';
import {decrementarCantidad, incrementarCantidad} from './functions.js';



// -------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------- CÓDIGO JS ---------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------



// GENERAL -----------------------------------------------------------------------------------------------------------
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// TIENDA ------------------------------------------------------------------------------------------------------------
cargarTienda();
darVidaATienda();
// SELECCIONAR PRODUCTO ---------------------------------------------
const nametitle111 = document.querySelector("#shop_111art h2");
const pricetitle111 = document.querySelector("#shop_111art h3");
const nametitle112 = document.querySelector("#shop_112art h2");
const pricetitle112 = document.querySelector("#shop_112art h3");
const nametitle211 = document.querySelector("#shop_211art h2");
const pricetitle211 = document.querySelector("#shop_211art h3");
const nametitle212 = document.querySelector("#shop_212art h2");
const pricetitle212 = document.querySelector("#shop_212art h3");
const nametitle311 = document.querySelector("#shop_311art h2");
const pricetitle311 = document.querySelector("#shop_311art h3");
const nametitle312 = document.querySelector("#shop_312art h2");
const pricetitle312 = document.querySelector("#shop_312art h3");
const nametitle413 = document.querySelector("#shop_413art h2");
const pricetitle413 = document.querySelector("#shop_413art h3");
const nametitle513 = document.querySelector("#shop_513art h2");
const pricetitle513 = document.querySelector("#shop_513art h3");
const nametitle621 = document.querySelector("#shop_621art h2");
const pricetitle621 = document.querySelector("#shop_621art h3");

const crearProductPage = (identifier) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const productoMain = document.querySelector(".tienda_main");
    productoMain.classList.remove("tienda_main");
    productoMain.classList.add("producto_main");
    productoMain.innerHTML = productPage;
    const product_obj = productos.find((producto) => { return producto.id===identifier })

    // CAPTURAR NUEVOS DOM ---------
    const minus = document.querySelector(".minus");
    const plus = document.querySelector(".plus");
    minus.addEventListener("click", () => decrementarCantidad());
    plus.addEventListener("click", () => incrementarCantidad());

    // IMÁGENES ------------
    const mainImg = document.querySelector("#productMain_img");
    const topsideImg = document.querySelector("#productTopSide_img");
    const midsideImg = document.querySelector("#productMidSide_img");
    const botsideImg = document.querySelector("#productBotSide_img");

    mainImg.src=product_obj.modelfrontSrc
    topsideImg.src=product_obj.modelbackSrc;
    midsideImg.src=product_obj.frontSrc;
    botsideImg.src=product_obj.backSrc;

    // INFORMACIÓN ------------
    const product_title = document.querySelector(".info_top h1");
    const product_nombre = product_obj.garment + " " + product_obj.type + "<br>" + `"${product_obj.model}"`;
    const product_price = document.querySelector(".info_top h2");
    product_title.innerHTML=product_nombre;
    product_price.innerText="$" + product_obj.price

    // COLORES ------------
    const colorOptions = ["negro", "gris", "blanco", "azul"];
    colorOptions.forEach(color => {
        const radio = document.querySelector(`#${color}`);
        const label = document.querySelector(`.${color}_label`);

        if (!product_obj.color.includes(color)) {
            label.classList.remove("color_label");
            label.classList.remove(`${color}_label`);
            radio.classList.add("hidden");
            label.classList.add("hidden");
        }
    });
}
const seleccionarProducto = () => {
    img111art.addEventListener("click", () => crearProductPage(111));
    img112art.addEventListener("click", () => crearProductPage(112));
    img211art.addEventListener("click", () => crearProductPage(211));
    img212art.addEventListener("click", () => crearProductPage(212));
    img311art.addEventListener("click", () => crearProductPage(311));
    img312art.addEventListener("click", () => crearProductPage(312));
    img413art.addEventListener("click", () => crearProductPage(413));
    img513art.addEventListener("click", () => crearProductPage(513));
    img621art.addEventListener("click", () => crearProductPage(621));
    
    nametitle111.addEventListener("click", () => crearProductPage(111));
    pricetitle111.addEventListener("click", () => crearProductPage(111));
    nametitle112.addEventListener("click", () => crearProductPage(112));
    pricetitle112.addEventListener("click", () => crearProductPage(112));
    nametitle211.addEventListener("click", () => crearProductPage(211));
    pricetitle211.addEventListener("click", () => crearProductPage(211));
    nametitle212.addEventListener("click", () => crearProductPage(212));
    pricetitle212.addEventListener("click", () => crearProductPage(212));
    nametitle311.addEventListener("click", () => crearProductPage(311));
    pricetitle311.addEventListener("click", () => crearProductPage(311));
    nametitle312.addEventListener("click", () => crearProductPage(312));
    pricetitle312.addEventListener("click", () => crearProductPage(312));
    nametitle413.addEventListener("click", () => crearProductPage(413));
    pricetitle413.addEventListener("click", () => crearProductPage(413));
    nametitle513.addEventListener("click", () => crearProductPage(513));
    pricetitle513.addEventListener("click", () => crearProductPage(513));
    nametitle621.addEventListener("click", () => crearProductPage(621));
    pricetitle621.addEventListener("click", () => crearProductPage(621));
}
const crearTiendaPage = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const tiendaMain = document.querySelector(".producto_main");
    tiendaMain.classList.remove("producto_main");
    tiendaMain.classList.add("tienda_main");
    tiendaMain.innerHTML = tiendaPage;

    // CARGAR TIENDA ------------------------------------------
    cargarTienda();
    // DAR VIDA A TIENDA --------------------------------------
    darVidaATienda();
}
seleccionarProducto();