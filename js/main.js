const productos = [];

function renderizarProductos() {
  productos.length > 0 &&
    productos.forEach((p) => {
      $(".productos").append(`
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="${p.foto1}">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">${p.descripcion}</p>
                <p class="card-text">$${p.precio}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `);
    });
}

// ------------------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));
