import React, {useState, useEffect} from 'react'
//import { getFirestore } from "../../firebase"
import { getCategories } from "../../firebase"


export default function ContainerPrueba() {
    const [items, setItems] = useState([])
    
    /*
    useEffect(() => { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
        const db = getFirestore();
        const catalog = db.collection("catalog");
        catalog.get() //una promise propia de firebase
        .then((querySnapshot) => {
            querySnapshot.size === 0 && console.log("No hay resultados")
            let result = querySnapshot.docs.map(doc => {  
                return ({ //destructuring para crear un objeto con la data el doc.id + doc.data() /niveles diferent
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log("Resultado:", result)
            setItems(result)
        })
    }, [])*/ 

    useEffect(() => { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
        getCategories() //una promise propia de firebase
        .then((querySnapshot) => {
            querySnapshot.size === 0 && console.log("No hay resultados")
            let result = querySnapshot.docs.map(doc => {  
                return ({ //destructuring para crear un objeto con la data el doc.id + doc.data() /niveles diferent
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log("Resultado:", result)
            //setItems(result)
        })
    }, [])

    //console.log(items)

    return (
        <div>
            <h1 style={{color: "white"}} >Firebase Collection - Catalog</h1>
        </div>
    )
}
