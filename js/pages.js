// ------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- TIENDA PAGE ------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

export const tiendaPage = `
<!-- FILTROS------------------------------------------------------------------ -->
<section class="filters_section">
    <h1 class="filters_subtitle">FILTROS</h1>
    <article>
        <div class="colors_div">
            <span>
                <input type="checkbox" name="negro" id="negro_check" class="checkbox">
                <label for="negro_check" class="checkbox_label">Negro</label>
            </span>
            <span>
                <input type="checkbox" name="blanco" id="blanco_check" class="checkbox">
                <label for="blanco_check" class="checkbox_label">Gris</label>
            </span>
            <span>
                <input type="checkbox" name="gris" id="gris_check" class="checkbox">
                <label for="gris_check" class="checkbox_label">Blanco</label>
            </span>
            <span>
                <input type="checkbox" name="azul" id="azul_check" class="checkbox">
                <label for="azul_check" class="checkbox_label">Azul</label>
            </span>
        </div>
        <div class="sizes_div">
            <span>
                <input type="checkbox" name="xs" id="xs_check" class="checkbox">
                <label for="xs_check" class="checkbox_label">XS</label>
            </span>
            <span>
                <input type="checkbox" name="s" id="s_check" class="checkbox">
                <label for="s_check" class="checkbox_label">S</label>
            </span>
            <span>
                <input type="checkbox" name="m" id="m_check" class="checkbox">
                <label for="m_check" class="checkbox_label">M</label>
            </span>
            <span>
                <input type="checkbox" name="l" id="l_check" class="checkbox">
                <label for="l_check" class="checkbox_label">L</label>
            </span>
            <span>
                <input type="checkbox" name="xl" id="xl_check" class="checkbox">
                <label for="xl_check" class="checkbox_label">XL</label>
            </span>
            <span>
                <input type="checkbox" name="xxl" id="xxl_check" class="checkbox">
                <label for="xxl_check" class="checkbox_label">XXL</label>
            </span>
        </div>
    </article>
</section>
<!-- PRODUCTOS---------------------------------------------------------------- -->
<section class="shop_section">
    <article id="shop_111art">
        <img src="../assets/img/products/111/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/111/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_112art">
        <img src="../assets/img/products/112/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/112/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_211art">
        <img src="../assets/img/products/211/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/211/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_212art">
        <img src="../assets/img/products/212/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/212/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_311art">
        <img src="../assets/img/products/311/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/311/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_312art">
        <img src="../assets/img/products/312/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/312/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_413art">
        <img src="../assets/img/products/413/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/413/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_513art">
        <img src="../assets/img/products/513/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/513/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
    <article id="shop_621art">
        <img src="../assets/img/products/621/modelfront.jpg" alt="" class="product_img_shop" data-backup-src="../assets/img/products/621/modelback.jpg">
        <!-- <h2>NOMBRE</h2> -->
        <!-- <h3>PRECIO</h3> -->
    </article>
</section>
`;

// ------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- PRODUCT PAGE -----------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

export const productPage = `
<section class="producto_top_section">
    <article class="imgsArt">
        <div>
            <img src="" alt="" class="side_img" id="productTopSide_img">
            <img src="" alt="" class="side_img" id="productMidSide_img">
            <img src="" alt="" class="side_img" id="productBotSide_img">
        </div>
        <img src="" alt="" class="main_img" id="productMain_img">
    </article>
    <article class="infoArt">
        <div class="info_top">
            <h1>NOMBRE</h1>
            <h2>PRECIO</h2>
            <p>Ver formas de pago</p>
        </div>
        <div class="info_bottom">
            <div class="cant_div">
                <h3>Cantidad</h3>
                <div class="cant">
                    <span class="minus">-</span>
                    <span class="num">01</span>
                    <span class="plus">+</span>
                </div>
            </div>
            <div class="size_div">
                <h3>Seleccionar talle</h3>
                <div>
                    <input type="radio" name="product_size" id="xs" class="size_radio" checked>
                    <label for="xs" class="size_label">XS</label>
                    <input type="radio" name="product_size" id="s" class="size_radio">
                    <label for="s" class="size_label">S</label>
                    <input type="radio" name="product_size" id="m" class="size_radio">
                    <label for="m" class="size_label">M</label>
                    <input type="radio" name="product_size" id="l" class="size_radio">
                    <label for="l" class="size_label">L</label>
                    <input type="radio" name="product_size" id="xl" class="size_radio">
                    <label for="xl" class="size_label">XL</label>
                    <input type="radio" name="product_size" id="xxl" class="size_radio">
                    <label for="xxl" class="size_label">XXL</label>
                </div>
            </div>
            <div class="color_div">
                <h3>Seleccionar color</h3>
                <div>
                    <input type="radio" name="product_color" id="negro" class="color_radio" checked>
                    <label for="negro" class="color_label negro_label"></label>
                    <input type="radio" name="product_color" id="gris" class="color_radio">
                    <label for="gris" class="color_label gris_label"></label>
                    <input type="radio" name="product_color" id="blanco" class="color_radio">
                    <label for="blanco" class="color_label blanco_label"></label>
                    <input type="radio" name="product_color" id="azul" class="color_radio">
                    <label for="azul" class="color_label azul_label"></label>
                </div>
            </div>
        </div>
        <div class="addcart_button_div">
            <button id="addcart_button">AGREGAR AL CARRITO</button>
        </div>
    </article>
    </section>
    <section class="producto_bottom_section">
    <h4 class="subtitle">Descripción</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia neque veniam, incidunt aliquid possimus nemo accusantium sequi, at sapiente perferendis rem asperiores facilis. In nihil quisquam rerum ipsa quo!
    Quasi cum minus odio officiis labore itaque delectus fugit voluptates tempore odit, laborum repudiandae amet animi saepe at temporibus voluptate laudantium ut beatae accusantium deleniti enim adipisci, necessitatibus sunt? Blanditiis.</p>
</section>
`;

// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------