const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHJtu7kxN_bRpDQMqvB--AMcQNtYd3-kE",
  authDomain: "prueba-104e5.firebaseapp.com",
  projectId: "prueba-104e5",
  storageBucket: "prueba-104e5.appspot.com",
  messagingSenderId: "799653477259",
  appId: "1:799653477259:web:339c78ddf189271c97cd8e",
});

const db = firebaseApp.firestore();

console.log(db);
// db.collection("productos")
//   .get()
//   .then((res) => productos.push(...res.docs.map((doc) => doc.data())))
//   .then(() => console.log(productos));

// --------------------------------------------------
$(".li__indumentaria").click(() => $(".ul__hide").toggle("fast"));
