import firebase from "firebase/app";
import "@firebase/firestore";


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

  export function getFirebase() {
      return app
  }

  export function getFirestore() {
      return firebase.firestore(app)
  }

  export function getCatalog() {
    const db = getFirestore();
    const catalog = db.collection("catalog");
    return catalog.get() //una promise propia de firebase
  }

  export function getCategories() {
    const db = getFirestore();
    const categories = db.collection("categories").orderBy("order", "asc")
    return categories.get() //una promise propia de firebase
  }
