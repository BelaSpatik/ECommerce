import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.default.initializeApp({  //firebase.initializeApp => no lo reconoce como función
    apiKey: "AIzaSyAfvXF_83pyCtFPcgjNA85DqD0dTZb5tO4",
    authDomain: "addenda-303ae.firebaseapp.com",
    projectId: "addenda-303ae",
    storageBucket: "addenda-303ae.appspot.com",
    messagingSenderId: "875879462267",
    appId: "1:875879462267:web:b06dcdb743eb1a9b0d79de"
  });


  export function getFirebase() {
      return app
  }

  export function getFirestore() {
      return firebase.firestore(app)
  }

  export function getCatalog() {
    const db = getFirestore();
    const catalog = db.collection("catalog");
    return catalog.get()
  }

  export function getCategories() {
    const db = getFirestore();
    const categories = db.collection("categories").orderBy("order", "asc")
    return categories.get() //una promise propia de firebase
  }