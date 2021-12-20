/**
 * FIREBASE CONFIG
 */

$(() => getProductos());

const db = firebase.firestore();

// -----obtiene los productos de firebasae-----
function getProductos() {
  db.collection("productos")
    .limit()
    .get()
    .then((res) => {
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
      );
      console.log(productos);
    })
    .then(() => renderizarProductos(productos, "Todas"))
    .catch((err) => console.log(`ERROR: ${err}`));
}

// CREAR GET CAROUSEL
