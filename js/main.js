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

// -----renderiza los productos en el DOM-----
function renderizarProductos() {
  $(".loader").remove();

  productos.length > 0 &&
    productos.forEach((p) => {
      $(".productos").append(`
        <div class="card col-6 col-md-3" style="width: auto;">
          <img src="..." class="card-img-top" alt="${p.foto1}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">${p.descripcion}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `);
    });
}

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
