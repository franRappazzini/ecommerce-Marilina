$(() => {
  loader();
});

class Producto {
  constructor(id, nombre, precio, descripcion, foto1, foto2, foto3) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.foto1 = foto1;
    this.foto2 = foto2;
    this.foto3 = foto3;
  }
}

const productos = [];
const categorias = [];

/**
 * FUNCTIONS
 */

// -----renderiza los productos en el DOM-----
function renderizarProductos() {
  $(".loader").remove();

  productos.length > 0 &&
    productos.forEach((p) => {
      $(".productos").append(`
        <article class="col-6 col-md-3 mb-3">
          <div class="card" style="width: auto;">
            <img src="..." class="card-img-top" alt="${p.foto1}">
            <div class="card-body">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">${p.descripcion}</p>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${p.id}">
                Ver más
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${p.nombre}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row">
                      <section class="col-12 col-md-6">
                        <div id="carousel${p.id}" class="carousel slide" data-bs-ride="carousel">
                          <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          </div>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="../assets/img/GA025006273.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="../assets/img/GA025006273.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="../assets/img/GA025006273.jpg" class="d-block w-100" alt="...">
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carousel${p.id}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </section>

                      <section class="col-12 col-md-6">
                        <p>Descripcion: ${p.descripcion}</p>
                        <p>Precio: $${p.precio}</p>
                      </section>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-success" data-bs-dismiss="modal">Consultar stock por WhatsApp</button>
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

// --------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));
