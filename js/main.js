$(() => {
  loader();
  btnsCategoria();
});

class Producto {
  constructor(
    id,
    nombre,
    categoria,
    precio,
    precioCuotas,
    talle,
    descripcion,
    img1,
    img2,
    img3
  ) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.precioCuotas = precioCuotas;
    this.talle = talle;
    this.descripcion = descripcion;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
  }
}

const productos = [];

/**
 * FUNCTIONS
 */

// -----filtra por categoria-----
function filterCategoria(productos, orderByCategorias, categoria) {
  productos.forEach((p) => {
    if (
      p.categoria.toLowerCase() === categoria.toLowerCase() ||
      categoria === "Todas"
    ) {
      orderByCategorias.push(p);
    }
  });

  // return orderByCategorias;
}

// -----renderiza los productos en el DOM-----
function renderizarProductos(productos, categoria) {
  $(".loader").remove();
  $(".productos__container .productos").empty();

  const orderByCategorias = [];

  orderByCategorias.push(
    filterCategoria(productos, orderByCategorias, categoria)
  );

  console.log(orderByCategorias);

  // orderByCategorias.length > 0 &&
  orderByCategorias.forEach((p) => {
    $(".productos").append(`
        <article class="col-6 col-md-3 mb-3 d-flex justify-content-center">
          <div class="card" style="width: 16rem;" >
            <img src="../assets/img/GA025006273.jpg" class="card-img-top" alt="${
              p.nombre
            }" style="height: 12rem; object-fit: cover;">
            <div class="card-body d-flex flex-column justify-content-between align-items-center">
              <h5 class="card-title text-center">${p.nombre}</h5>
              <p class="card-text text-center">$${p.precio}</p>
              <p class="precio__producto--cuotas text-center"><strong>3</strong> cuotas sin interés de <strong>$${new Intl.NumberFormat().format(
                Math.ceil(p.precioCuotas / 3)
              )}</strong></p>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${
                p.id
              }">
                Ver más
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal${
                p.id
              }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${
                        p.nombre
                      }</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row">
                      <section class="col-12 col-md-6">
                        <div id="carousel${
                          p.id
                        }" class="carousel slide" data-bs-ride="carousel">
                          <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carousel${
                              p.id
                            }" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel${
                              p.id
                            }" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel${
                              p.id
                            }" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          </div>
                          <div class="carousel-inner hover__zoom">
                            <div class="carousel-item active">
                              <img src="${p.img1}" class="d-block w-100" 
                                alt="${
                                  p.nombre
                                }" style="height: 25rem; object-fit: cover;"
                              >
                            </div>
                            <div class="carousel-item">
                              <img src="${p.img2}" class="d-block w-100" 
                                alt="${
                                  p.nombre
                                }" style="height: 25rem; object-fit: cover;"
                              >
                            </div>
                            <div class="carousel-item">
                              <img src="${p.img3}" class="d-block w-100" 
                                alt="${
                                  p.nombre
                                }" style="height: 25rem; object-fit: cover;"
                              >
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carousel${
                            p.id
                          }" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carousel${
                            p.id
                          }" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </section>

                      <section class="col-12 col-md-6 d-flex flex-column justify-content-between">
                        <section>
                          <p class="precio__producto m-0">$${new Intl.NumberFormat().format(
                            p.precio
                          )}</p>

                          <p class="precio__producto--cuotas m-0"><strong>3</strong> cuotas sin interés de <strong>$${new Intl.NumberFormat().format(
                            Math.ceil(p.precioCuotas / 3)
                          )}</strong></p>

                          <div class="formas-pago__container d-flex align-items-center mb-3">
                            <img src="../assets/svg/card.svg" alt="card-icon" width="15" />
                            <p class="m-0 ms-2">Todas las formas de pago</p>
                          </div>

                          <hr/>

                          <p class="m-0 titles__descripcion">Descripcion:</p>
                          <p class="ms-2">${p.descripcion}</p>

                          <hr/>

                          <p class="m-0 titles__descripcion">Talles:</p>
                          ${
                            p.talle === "Único"
                              ? `<ul class="d-flex ps-2" style="list-style: none;"><li>${p.talle}</li></ul>`
                              : `<ul class="d-flex ps-2" style="list-style: none;">
                                  <li class="me-1" >S /</li>
                                  <li class="me-1" >M /</li>
                                  <li class="me-1" >L /</li>
                                  <li class="me-1" >XL /</li>
                                  <li class="me-1" >XXL</li>
                                </ul>`
                          }
                        </section>

                        <div>
                          <a href="https://wa.me/5493402449859/?text=${
                            p.talle === "Único"
                              ? `Hola, cómo estás? Queria saber si te queda stock de '${p.nombre}'`
                              : `Hola, cómo estás? Queria saber si te queda stock de '${p.nombre}' en talle '...'`
                          }"
                          class="btn btn-success d-flex justify-content-center align-items-center"
                          target="_blank" rel="noopener noreferrer"
                          >
                            <img src="../assets/svg/whatsapp-white.svg" alt="whatsapp" width="25" class="me-2" /> Consultar stock 
                          </a>
                          <p class="text-center mb-0 mt-2">¡Envíos a todo</p>
                          <p class="text-center m-0">el país!</p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>          
            </div>
          </div>
        </article>
      `);
  });
}

// -----spinner mientras cargan los productos-----
function loader() {
  productos.length === 0 &&
    $(".productos__container").append(`
      <div class="loader d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `);
}

// -----hace funcionales los selectores de categorias-----
function btnsCategoria() {
  const activePage = window.location.pathname;

  $(".todo").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "Todas")
      : (window.location.href = "./index.html");
  });
  $(".abrigos").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "abrigos")
      : (window.location.href = "./index.html");
  });
  $(".calzas").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "calzas")
      : (window.location.href = "./index.html");
  });
  $(".conjuntos").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "conjuntos")
      : (window.location.href = "./index.html");
  });
  $(".hombres").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "hombres")
      : (window.location.href = "./index.html");
  });
  $(".kids").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "kids")
      : (window.location.href = "./index.html");
  });
  $(".pantalones").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "pantalones")
      : (window.location.href = "./index.html");
  });
  $(".remeras").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "remeras")
      : (window.location.href = "./index.html");
  });
  $(".shorts").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "shorts")
      : (window.location.href = "./index.html");
  });
  $(".tops").click(() => {
    activePage === "/index.html" || activePage === "/"
      ? renderizarProductos(productos, "tops")
      : (window.location.href = "./index.html");
  });
}

// --------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));

// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll("nav a").forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("activeLink");
//     console.log(link);
//   }
// });
