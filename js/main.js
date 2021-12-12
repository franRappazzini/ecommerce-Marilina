$(() => {
  loader();
  btnsCategoria();
});

class Producto {
  constructor(id, nombre, categoria, precio, descripcion, img1, img2, img3) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
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
        <article class="col-6 col-md-3 mb-3">
          <div class="card" style="width: auto;">
            <img src="../assets/img/GA025006273.jpg" class="card-img-top" alt="${
              p.nombre
            }" style="height: 12rem; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">${p.descripcion}</p>

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
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          </div>
                          <div class="carousel-inner hover__zoom">
                            <div class="carousel-item active">
                              <img src="${
                                p.img1
                              }" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="${
                                p.img2
                              }" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="${
                                p.img3
                              }" class="d-block w-100" alt="...">
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
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

                      <section class="col-12 col-md-6">
                        <p>Descripcion: ${p.descripcion}</p>
                        <p>Precio: $${new Intl.NumberFormat().format(
                          p.precio
                        )}</p>
                        <p>Categoria: ${p.categoria}</p>
                      </section>
                    </div>
                    <div class="modal-footer">
                      <a href="https://wa.me/5493402449859/?text=Hola, cómo estás? Queria saber si te queda stock de ${
                        p.nombre
                      } en talle..."
                      class="btn btn-success"
                      target="_blank" rel="noopener noreferrer"
                      >
                        Consultar stock por WhatsApp
                      </a>
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
  $(".todo").click(() => renderizarProductos(productos, "Todas"));
  $(".abrigos").click(() => renderizarProductos(productos, "abrigos"));
  $(".calzas").click(() => renderizarProductos(productos, "calzas"));
  $(".conjuntos").click(() => renderizarProductos(productos, "conjuntos"));
  $(".hombres").click(() => renderizarProductos(productos, "hombres"));
  $(".kids").click(() => renderizarProductos(productos, "kids"));
  $(".pantalones").click(() => renderizarProductos(productos, "pantalones"));
  $(".remeras").click(() => renderizarProductos(productos, "remeras"));
  $(".shorts").click(() => renderizarProductos(productos, "shorts"));
  $(".tops").click(() => renderizarProductos(productos, "tops"));
}

// --------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));
