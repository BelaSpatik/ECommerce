import { getFirestore } from "../../firebase"

export function getCatalog(categoryId) {
    return new Promise((success, reject) => {
        const db = getFirestore();
        let catalog;

        if(categoryId) {
            catalog = db.collection("catalog").userRef.where("categoryId", "array-contains", categoryId)
        } else {
            catalog = db.collection("catalog");
        }

        catalog.get().then((querySnapshot) => {
            querySnapshot.size === 0 && console.log("No hay resultados")
            let result = querySnapshot.docs.map(doc => {  
                return ({ //destructuring para crear un objeto con la data el doc.id + doc.data() /niveles diferent
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log("Resultado:", result)
        })
        result.length ? success(result) : reject(result)
    })
}

export function getCategories() {
    const db = getFirestore();
    const categories = db.collection("categories").orderBy("order", "asc")
    categories.get().then((querySnapshot) => {
        querySnapshot.size === 0 && console.log("No hay resultados")
        let result = querySnapshot.docs.map(doc => {
            return ({
                catId: doc.id,
                ...doc.data()
             })
         })
         console.log("Resultado:", result)
         setCategories(result)
     })
}
