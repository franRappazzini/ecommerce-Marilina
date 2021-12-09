const db = firebase.firestore();

console.log(db);

// db.collection("productos")
//   .get()
//   .then((res) => productos.push(...res.docs.map((doc) => doc.data())))
//   .then(() => console.log(productos));

// --------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));
