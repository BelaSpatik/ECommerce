import firebase from "firebase/app";
import "@firebase/firestore";

/*
const apiKey = process.env.REACT_APP_FIREBASE_APIKEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_FIREBASE_APPID;


const app = firebase.default.initializeApp({  //firebase.initializeApp => no lo reconoce como función
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
});
*/

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
    //categoryId
    const db = getFirestore();
    const catalog = db.collection("catalog");
    //const catalog = db.collection("catalog").where("categoryId", "array-contains", categoryId)
    return catalog.get() //una promise propia de firebase
  }

  /*
  export function getDetail(itemId) {
    const db = getFirestore();
    const catalog = db.collection("catalog").where("doc.id", "===", itemId) //????
    return catalog.get() //una promise propia de firebase
  }*/

  export function getCategories() {
    const db = getFirestore();
    const categories = db.collection("categories").orderBy("order", "asc")
    return categories.get() //una promise propia de firebase
  }
