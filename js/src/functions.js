// IMPORTACIONES --------------------------------------------------------------------------------
import productos from './database.js';

/* tienda */
import {art111, art112, art211, art212, art311, art312, art413, art513, art621} from './vars.js';
import {img111art, img112art, img211art, img212art, img311art, img312art, img413art, img513art, img621art} from './vars.js';
import {productIds} from './vars.js';

// TIENDA ---------------------------------------------------------------------------------------
export const cargarTienda = () => {
    const productArts = [art111, art112, art211, art212, art311, art312, art413, art513, art621];
    let productName;
    let nameTag;
    let priceTag;
    productos.forEach ((producto, index) => {
        productName = producto.garment + " " + producto.type;
        
        nameTag = document.createElement("h2");
        priceTag = document.createElement("h3");
        nameTag.innerHTML = `<a href="./producto.html">${productName}<br>"${producto.model}"</a>`
        priceTag.innerHTML = `<a href="./producto.html">$ ${producto.price}</a>`;
        nameTag.classList.add("cursor_pointer");
        priceTag.classList.add("cursor_pointer");

        productArts[index].append(nameTag);
        productArts[index].append(priceTag);
    })
}
export const darVidaATienda = () => {
    const productImgs = [img111art, img112art, img211art, img212art, img311art, img312art, img413art, img513art, img621art];
    productImgs.forEach((img, index) => {
        img.addEventListener("mouseover", () => {
            img.src = `../assets/img/products/${productIds[index]}/modelback.jpg`;
        })
    })
    productImgs.forEach((img, index) => {
        img.addEventListener("mouseout", () => {
            img.src = `../assets/img/products/${productIds[index]}/modelfront.jpg`;
        })
    })
}
export const seleccionarProducto = () => {
    const productArts = [art111, art112, art211, art212, art311, art312, art413, art513, art621];
    let articuloChilds;
    productArts.forEach((articulo, index) => {
        articuloChilds = Array.from(articulo.children);
        articuloChilds.forEach((hijo) => {
            hijo.addEventListener("click", () => {
                // NOMBRE
                localStorage.setItem("productoNameHTML", `${productos[index].garment} ${productos[index].type}<br>"${productos[index].model}"`);
                localStorage.setItem("productoPriceHTML", `$${productos[index].price}`);
                // SRC
                localStorage.setItem("modelfrontSrc", productos[index].modelfrontSrc);
                localStorage.setItem("modelbackSrc", productos[index].modelbackSrc);
                localStorage.setItem("frontSrc", productos[index].frontSrc);
                localStorage.setItem("backSrc", productos[index].backSrc);
                // ALT
                localStorage.setItem("modelfrontAlt", productos[index].modelfrontAlt);
                localStorage.setItem("modelbackAlt", productos[index].modelbackAlt);
                localStorage.setItem("frontAlt", productos[index].frontAlt);
                localStorage.setItem("backAlt", productos[index].backAlt);
            })
        })
    })
}

// PRODUCTO -------------------------------------------------------------------------------------
export const cargarInfoProducto = () => {
    // TOMAR INFORMACIÓN
    const productoName = localStorage.getItem("productoNameHTML");
    const productoPrice = localStorage.getItem("productoPriceHTML");
    const productoImgSrc = [
        localStorage.getItem("modelfrontSrc"),
        localStorage.getItem("modelbackSrc"),
        localStorage.getItem("frontSrc"),
        localStorage.getItem("backSrc")
    ]; 
    const productoImgAlt =[
        localStorage.getItem("modelfrontAlt"),
        localStorage.getItem("modelbackAlt"),
        localStorage.getItem("frontAlt"),
        localStorage.getItem("backAlt")
    ];

    // TOMAR DOM
    const nameTitle = document.querySelector(".info_top h1");
    const priceTitle = document.querySelector(".info_top h2");

    const imgsContainer = document.querySelector(".imgsArt");

    // CARGAR INFORMACIÓN
    nameTitle.innerHTML = productoName;
    priceTitle.innerHTML = productoPrice;

    imgsContainer.innerHTML = `
        <div>
            <img src="${productoImgSrc[2]}" alt="${productoImgAlt[2]}" class="side_img" id="productTopSide_img">
            <img src="${productoImgSrc[3]}" alt="${productoImgAlt[3]}" class="side_img" id="productMidSide_img">
            <img src="${productoImgSrc[4]}" alt="${productoImgAlt[4]}" class="side_img" id="productBotSide_img">
        </div>
        <img src="${productoImgSrc[1]}" alt="${productoImgAlt[1]}" class="main_img" id="productMain_img">
    `
}

let cant = 1;
export const incrementarCantidad = () => {
    const num = document.querySelector(".num");
    cant++;
    cant = (cant<10) ? "0" + cant : cant;
    num.innerText = cant
}
export const decrementarCantidad = () => {
    const num = document.querySelector(".num");
    if (cant>1) {
        cant--;
        cant = (cant<10) ? "0" + cant : cant;
        num.innerText = cant;
    }
}

// CARRITO ---------------------------------------------------------------------------------------
export const vaciarCarritoInStorage = () => {
    localStorage.setItem("carrito", JSON.stringify([]));
    //refrescar la página
    window.location.reload(true);
}
export const addToCartInStorage = () => {
    // CAPTURAR LA INFORMACIÓN
    const imgSelected = document.querySelector("#productMain_img");
    let colorSelected;
    let sizeSelected;
    const nameSelected = document.querySelector(".info_top h1");
    const priceSelected = document.querySelector(".info_top h2");
    const cantSelected = document.querySelector(".num");
    const sizeSelectedList = document.getElementsByName("product_size");
    for (let i=0; i<sizeSelectedList.length; i++) {
        if(sizeSelectedList[i].checked) {
            sizeSelected = sizeSelectedList[i].value;
            break;
        }
    }
    const colorSelectedList = document.getElementsByName("product_color");
    for (let i=0; i<colorSelectedList.length; i++) {
        if(colorSelectedList[i].checked) {
            colorSelected = colorSelectedList[i].value;
            break;
        }
    }

    // ARMAR LA INFORMACIÓN DEL PRODUCTO
    const newProductCart = {
        img: imgSelected.src,
        name: nameSelected.innerText.replace("\n", " "),
        price: parseFloat(priceSelected.innerText.replace('$', ''))*parseInt(cantSelected.innerText),
        cant: parseInt(cantSelected.innerText),
        size: sizeSelected,
        color: colorSelected
    }

    console.dir (newProductCart)

    // GUARDAR LA INFORMACIÓN EN EL CARRITO (el session storage)
    const carritoAux = JSON.parse(localStorage.getItem("carrito"));
    carritoAux.push(newProductCart);
    localStorage.setItem("carrito", JSON.stringify(carritoAux));

    // armar el nuevo <li>
    const newLi = document.createElement("li");

    const firstSpan = document.createElement("span");
    firstSpan.classList.add("leftLi_span");
    firstSpan.innerHTML = `<img src="${newProductCart.img}" alt="" class="carritoLi_img">`;

    const secondSpan = document.createElement("span");
    secondSpan.classList.add("middleLi_span");
    secondSpan.innerHTML = `
        <p class="middleLi_name">${newProductCart.name}</p>
        <div>
            <p class="carritoLi_cant">Cantidad: <span>${newProductCart.cant}</span></p>
            <p class="carritoLi_size">Talle: <span>${newProductCart.size}</span></p>
            <p class="carritoLi_color">Color: <span>${newProductCart.color}</span></p>
        </div>
    `;

    const thirdSpan = document.createElement("span");
    thirdSpan.classList.add("rightLi_span");
    thirdSpan.innerHTML = `
        <p class="carritoLi_price">$ ${newProductCart.price}</p>
        <img src="../assets/logo/trashbin.png" alt="Eliminar Producto" class="removeFromCart">
    `;

    newLi.appendChild(firstSpan);
    newLi.appendChild(secondSpan);
    newLi.appendChild(thirdSpan);

    // agregar el nuevo <li> al <ul>
    const ul = document.querySelector(".productosSeleccionados ul");
    ul.appendChild(newLi);

    const carritoSize = document.querySelector("#cart_lenght");
    carritoSize.innerText = cart.length;
}
export const removeFromCartInStorage = (li) => {
    // recuperar el carrito desde el storage
    const carritoAux = JSON.parse(localStorage.getItem("carrito"));

    // armar el objeto para buscar en el carrito
    const imgAux = li.querySelector(".carritoLi_img").src;
    const nameAux = li.querySelector(".middleLi_name").innerText;
    let priceAux = li.querySelector(".carritoLi_price").innerText;
    priceAux = priceAux.replace("$ ", "")
    priceAux = parseFloat(priceAux);
    let cantAux = li.querySelector(".carritoLi_cant span").innerText;
    cantAux = parseInt(cantAux);
    const sizeAux = li.querySelector(".carritoLi_size span").innerText;
    const colorAux = li.querySelector(".carritoLi_color span").innerText;

    const liABuscar = {
        img: imgAux,
        name: nameAux,
        price: priceAux,
        cant: cantAux,
        size: sizeAux,
        color: colorAux
    }

    //encontrar el objeto igual del carrito
    let deleteIndex;
    for (let i=0; i<carritoAux.length; i++) {
        if(JSON.stringify(carritoAux[i]) === JSON.stringify(liABuscar)) {
            deleteIndex=i;
            break;
        }
    }
    console.log(deleteIndex)
    carritoAux.splice(deleteIndex, 1);

    //subir nuevamente el carrito actualizado al storage
    localStorage.setItem("carrito", JSON.stringify(carritoAux));

    //refrescar la página
    window.location.reload(true);
}
export const cargarCarrito = (item) => {
    // CAPTURAR LA INFORMACIÓN
    const imgSelected = item.img;
    const colorSelected = item.color;
    const sizeSelected = item.size;
    const nameSelected = item.name;
    const priceSelected = item.price;
    const cantSelected = item.cant;

    // ARMAR LA INFORMACIÓN DEL PRODUCTO
    const newProductCart = {
        img: imgSelected,
        name: nameSelected,
        price: parseFloat(priceSelected),
        cant: parseInt(cantSelected),
        size: sizeSelected,
        color: colorSelected
    }

    // armar el nuevo <li>
    const newLi = document.createElement("li");

    const firstSpan = document.createElement("span");
    firstSpan.classList.add("leftLi_span");
    firstSpan.innerHTML = `<img src="${newProductCart.img}" alt="" class="carritoLi_img">`;

    const secondSpan = document.createElement("span");
    secondSpan.classList.add("middleLi_span");
    secondSpan.innerHTML = `
        <p class="middleLi_name">${newProductCart.name}</p>
        <div>
            <p class="carritoLi_cant">Cantidad: <span>${newProductCart.cant}</span></p>
            <p class="carritoLi_size">Talle: <span>${newProductCart.size}</span></p>
            <p class="carritoLi_color">Color: <span>${newProductCart.color}</span></p>
        </div>
    `;

    const thirdSpan = document.createElement("span");
    thirdSpan.classList.add("rightLi_span");
    thirdSpan.innerHTML = `
        <p class="carritoLi_price">$ ${newProductCart.price}</p>
        <img src="../assets/logo/trashbin.png" alt="Eliminar Producto" class="removeFromCart">
    `;

    newLi.appendChild(firstSpan);
    newLi.appendChild(secondSpan);
    newLi.appendChild(thirdSpan);

    // agregar el nuevo <li> al <ul>
    const ul = document.querySelector(".productosSeleccionados ul");
    ul.appendChild(newLi);
}