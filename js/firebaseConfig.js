/**
 * FIREBASE CONFIG
 */

const db = firebase.firestore();

console.log(db);

db.collection("productos")
  .get()
  .then((res) => productos.push(...res.docs.map((doc) => doc.data())))
  .then(() => renderizarProductos());
