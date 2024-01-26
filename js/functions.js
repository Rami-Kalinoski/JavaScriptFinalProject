// IMPORTACIONES -----------------------------------------------------------------------------------------------------
import productos from './database.js';

// TIENDA-------------
// CARGAR TIENDA
import {art111, art112, art211, art212, art311, art312, art413, art513, art621} from './vars.js';
// DAR VIDA A TIENDA
import {img111art, img112art, img211art, img212art, img311art, img312art, img413art, img513art, img621art} from './vars.js';
// SELECCIONAR PRODUCTO
import {tiendaPage, productPage} from './pages.js';

// TIENDA ------------------------------------------------------------------------------------------------------------
// CARGAR TIENDA ------------------------------------------
export const cargarProductoEnTienda = (articulo, objeto, nombre, precio) => {
    let nameTag = document.createElement("h2")
    let priceTag = document.createElement("h3")

    nameTag.innerHTML = `${nombre}<br>"${objeto.model}"`;
    priceTag.innerText = "$ " + precio;

    nameTag.classList.add("cursor_pointer");
    priceTag.classList.add("cursor_pointer");

    articulo.append(nameTag);
    articulo.append(priceTag);
}
export const cargarTienda = () => {
    const obj111 = productos.find((producto) => { return producto.id===111 });
    const name111 = obj111.garment + " " + obj111.type;
    cargarProductoEnTienda(art111, obj111, name111, obj111.price);

    const obj112 = productos.find((producto) => { return producto.id===112 });
    const name112 = obj112.garment + " " + obj112.type;
    cargarProductoEnTienda(art112, obj112, name112, obj112.price);

    const obj211 = productos.find((producto) => { return producto.id===211 });
    const name211 = obj211.garment + " " + obj211.type;
    cargarProductoEnTienda(art211, obj211, name211, obj211.price);

    const obj212 = productos.find((producto) => { return producto.id===212 });
    const name212 = obj212.garment + " " + obj212.type;
    cargarProductoEnTienda(art212, obj212, name212, obj212.price);

    const obj311 = productos.find((producto) => { return producto.id===311 });
    const name311 = obj311.garment + " " + obj311.type;
    cargarProductoEnTienda(art311, obj311, name311, obj311.price);

    const obj312 = productos.find((producto) => { return producto.id===312 });
    const name312 = obj312.garment + " " + obj312.type;
    cargarProductoEnTienda(art312, obj312, name312, obj312.price);

    const obj413 = productos.find((producto) => { return producto.id===413 });
    const name413 = obj413.garment + " " + obj413.type;
    cargarProductoEnTienda(art413, obj413, name413, obj413.price);

    const obj513 = productos.find((producto) => { return producto.id===513 });
    const name513 = obj513.garment + " " + obj513.type;
    cargarProductoEnTienda(art513, obj513, name513, obj513.price);

    const obj621 = productos.find((producto) => { return producto.id===621 });
    const name621 = obj621.garment + " " + obj621.type;
    cargarProductoEnTienda(art621, obj621, name621, obj621.price);
}
// DAR VIDA A TIENDA --------------------------------------
export const darVidaATienda = () => {
    img111art.addEventListener("mouseover", () => {
        img111art.src="../assets/img/products/111/modelback.jpg";
    })
    img112art.addEventListener("mouseover", () => {
        img112art.src="../assets/img/products/112/modelback.jpg";
    })
    img211art.addEventListener("mouseover", () => {
        img211art.src="../assets/img/products/211/modelback.jpg";
    })
    img212art.addEventListener("mouseover", () => {
        img212art.src="../assets/img/products/212/modelback.jpg";
    })
    img311art.addEventListener("mouseover", () => {
        img311art.src="../assets/img/products/311/modelback.jpg";
    })
    img312art.addEventListener("mouseover", () => {
        img312art.src="../assets/img/products/312/modelback.jpg";
    })
    img413art.addEventListener("mouseover", () => {
        img413art.src="../assets/img/products/413/modelback.jpg";
    })
    img513art.addEventListener("mouseover", () => {
        img513art.src="../assets/img/products/513/modelback.jpg";
    })
    img621art.addEventListener("mouseover", () => {
        img621art.src="../assets/img/products/621/modelback.jpg";
    })
    
    
    img111art.addEventListener("mouseout", () => {
        img111art.src="../assets/img/products/111/modelfront.jpg";
    })
    img112art.addEventListener("mouseout", () => {
        img112art.src="../assets/img/products/112/modelfront.jpg";
    })
    img211art.addEventListener("mouseout", () => {
        img211art.src="../assets/img/products/211/modelfront.jpg";
    })
    img212art.addEventListener("mouseout", () => {
        img212art.src="../assets/img/products/212/modelfront.jpg";
    })
    img311art.addEventListener("mouseout", () => {
        img311art.src="../assets/img/products/311/modelfront.jpg";
    })
    img312art.addEventListener("mouseout", () => {
        img312art.src="../assets/img/products/312/modelfront.jpg";
    })
    img413art.addEventListener("mouseout", () => {
        img413art.src="../assets/img/products/413/modelfront.jpg";
    })
    img513art.addEventListener("mouseout", () => {
        img513art.src="../assets/img/products/513/modelfront.jpg";
    })
    img621art.addEventListener("mouseout", () => {
        img621art.src="../assets/img/products/621/modelfront.jpg";
    })
}

// DENTRO DE PRODUCTO -------------------------------------
// INPUT "CANTIDAD"
let cant = 1;
export const incrementarCantidad = () => {
    console.log("funciona")
    const num = document.querySelector(".num");
    cant++;
    cant = (cant<10) ? "0" + cant : cant;
    num.innerText = cant
}
export const decrementarCantidad = () => {
    console.log("funciona")
    const num = document.querySelector(".num");
    if (cant>1) {
        cant--;
        cant = (cant<10) ? "0" + cant : cant;
        num.innerText = cant;
    }
}