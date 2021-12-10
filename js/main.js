const productos = [];

// -----renderiza los productos en el DOM-----
function renderizarProductos() {
  console.log(productos);

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

$(".productos").append("<p>hola</p>");

// --------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));
