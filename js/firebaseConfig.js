/**
 * FIREBASE CONFIG
 */

$(() => {
  getProductos();
  getImgCarousel();
});

const db = firebase.firestore();

// -----obtiene los productos de firebasae-----
function getProductos() {
  db.collection("productos")
    .get()
    .then((res) =>
      productos.push(
        ...res.docs.map(
          (doc) =>
            new Producto(
              doc.id,
              doc.data().nombre,
              doc.data().categoria,
              doc.data().precio,
              doc.data().precioCuotas,
              doc.data().talle,
              doc.data().descripcion,
              doc.data().img1,
              doc.data().img2,
              doc.data().img3
            )
        )
      )
    )
    .then(() => renderizarProductos(productos, "Todas"))
    .catch((err) => console.log(`ERROR: ${err}`));
}

// -----obtiene las img para el carousel-----
function getImgCarousel() {
  db.collection("carrousel")
    .get()
    .then((res) =>
      imgCarousel.push(...res.docs.map((i) => ({ id: i.id, ...i.data() })))
    )
    .catch((err) => console.log(`ERROR: ${err}`))
    .then(() => {
      renderizarImgCarousel();
      console.log(imgCarousel);
    });
}
