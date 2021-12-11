/**
 * FIREBASE CONFIG
 */

const db = firebase.firestore();

console.log(db);

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
            doc.data().descripcion,
            doc.data().img1,
            doc.data().img2,
            doc.data().img3
          )
      )
    )
  )
  .then(() => renderizarProductos(productos, "Todas"));
