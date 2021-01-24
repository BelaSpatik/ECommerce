import React, {useState, useEffect} from 'react'
import spinner from '../../images/spinner.png'
import "./itemlistcontainer.css"
//import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Zusak from "../../images/la-ladrona-de-libros.jpg"
import Delibes from "../../images/los-santos-inocentes.jpg"
import Rulfo from "../../images/pedro-paramo.jpg"
import Kafka from "../../images/el-proceso.jpg"
import Bradbury from "../../images/fahrenheit-451.jpg"
import Marquez from "../../images/cien-años-de-soledad.jpg"
import Tanizaki from "../../images/las-hermanas-makioka.jpg"
import Austen from "../../images/orgullo-y-prejuicio.jpg"

const catalog = [
    // simular una base de datos (api)
    {
      id: 1,
      name: "La ladrona de libros",
      author: "Markus Zusak",
      synopsis:
        ["Érase una vez un pueblo donde las noches eran largas y la muerte contaba su propia historia. En el pueblo vivía una niña que quería leer, un hombre que tocaba el acordeón y un joven judío que escribía bellos cuentos para escapar del horror de la guerra. Al cabo de un tiempo, la niña se convirtió en una ladrona que robaba libros y regalaba palabras.", "Una novela tremendamente humana, emocionante e inolvidable, que describe las peripecias de una niña alemana de nueve años desde que es dada en adopción por su madre hasta el final de la II Guerra Mundial. Su nueva familia, gente sencilla y nada afecta al nazismo, le enseña a leer y, a través de los libros, a distraerse durante los bombardeos y combatir la tristeza. Pero es el libro que ella misma está escribiendo el que finalmente le salvará la vida."], 
      price: "1600",
      genre: [["01", "30", "29"],["Literatura Universal", "Segunda Guerra Mundial", "Drama"]],
      pictureurl: Zusak,
      editorial: "Lumen",
      encuadernacion: "Tapa dura",
      pags: 544,
      isbn: 9788426416216,
      añoedicion: 2007,
      traduccion: "Laura Martín de Dios"
  
    },
    {
      id: 2,
      name: "Los santos inocentes",
      author: "Miguel Delibes",
      synopsis:
        ["Resumen: En la Extremadura profunda de los años sesenta, la humilde familia de Paco el Bajo sirve en un cortijo sometida a un régimen de explotación casi feudal que parece haberse detenido en el tiempo pero sobre el que soplan ya algunos aires nuevos. Es época de caza y Paco se ha tronzado el peroné. Las presiones del señorito para que lo acompañe en las batidas a pesar de su estado sirven para retratar la crueldad y los abusos de una clase instalada en unos privilegios que considera inalienables y que los protagonistas soportan con una dignidad ejemplar.", "Un relato a un tiempo realista, poético y trágico que contiene algunas de las mejores páginas del gran novelista de Valladolid. La historia de unos seres humillados, sometidos al capricho de un amo que se cree propietario de sus vidas. Una magnífica novela que inspiró una de las mejores películas del cine español."],
      price: "890",
      genre: [ ["01", "29"], ["Literatura Universal", "Drama"]],
      pictureurl: Delibes,
      editorial: "Destino",
      encuadernacion: "Tapa blanda",
      pags: 168,
      isbn: 9788423356300,
      añoedicion: 2019,
    },
    {
      id: 3,
      name: "Pédro Páramo",
      author: "Juan Rulfo",
      synopsis:
      ["Juan Rulfo nos transporta con gran maestría de lo real a lo fantástico por medio de un estilo vigoroso y poético. Profundamente enraizada en lo popular, la narrativa de Juan Rulfo describe con conmovedora fuerza la cotidiana realidad de un mundo a la vez violento y lírico. Pedro Páramo lleva el dolor mexicano a su forma más universal, trascendiendo -sin olvidarla- la historia real. De ahí que, en su conjunto, la obra de Rulfo sea un clásico de las letras hispanoamericanas contemporáneas."],
      price: "1200",
      pictureurl: Rulfo,
      editorial: "RM",
      encuadernacion: "Tapa blanda",
      pags: 136,
      isbn: 9788493442606,
      añoedicion: 2016,
    },
    {
      id: 4,
      name: "El proceso",
      author: "Franz Kafka",
      synopsis:
      ["Josef K., el protagonista, es acusado de un delito que nunca llegará a conocer y se ve envuelto en una maraña de la que no podrá salir. Nadie sabe quién dirige los engranajes que propician la detención y el posterior proceso. La situación en la que se encuentra el protagonista, a pesar de ser aparentemente absurda, se nos hace muy verosímil. En la novela aparecen abogados, jueces, ujieres, guardianes... que, en conjunto, dan una imagen impactante de los mecanismos de la Ley y del Estado. En Josef K. irá creciendo un sentimiento de culpa que conllevará su sumisión ante el proceso y que dará lugar al inesperado final del libro..."],
      price: "1950",
      genre: [["01", "29"],["Literatura Universal", "Drama"]],
      pictureurl: Kafka,
      editorial: "Cátedra",
      encuadernacion: "Tapa dura",
      pags: 320,
      isbn: 9788437608563,
      añoedicion: 2006,
    },
    {
      id: 5,
      name: "Fahrenheit 451",
      author: "Ray Bradbury",
      synopsis:
        ["Fahrenheit 451: la temperatura a la que el papel se enciende y arde. Guy Montag es un bombero y el trabajo de un bombero es quemar libros, que están prohibidos porque son causa de discordia y sufrimiento.El Sabueso Mecánico del Departamento de Incendios, armado con una letal inyección hipodérmica, escoltado por helicópteros, está preparado para rastrear a los disidentes que aún conservan y leen libros. Como 1984, de George Orwell, como Un mundo feliz, de Aldous Huxley, Fahrenheit 451 describe una civilización occidental esclavizada por los medios, los tranquilizantes y el conformismo."],
      price: "750",
      genre: [["08", "01"],["Ciencia Ficción", "Literatura Universal"]],
      pictureurl: Bradbury,
      editorial: "Debolsillo",
      encuadernacion: "Tapa dura",
      pags: 184,
      isbn: 9788466345392,
      añoedicion: 2018,
      traduccion: "Alfredo Crespo"
    },
    {
      id: 6,
      name: "Cien años de soledad",
      author: "Gabriel García Márquez",
      synopsis:
        ["«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo». Con estas palabras empieza una novela ya legendaria en los anales de la literatura universal, una de las aventuras literarias más fascinantes de nuestro siglo. Millones de ejemplares de Cien años de soledad leídos en todas las lenguas y el premio Nobel de Literatura coronando una obra que se había abierto paso «boca a boca» -como gusta decir el escritor- son la más palpable demostración de que la aventura fabulosa de la familia Buendía-Iguarán, con sus milagros, fantasías, obsesiones, tragedias, incestos, adulterios, rebeldías, descubrimientos y condenas, representaba al mismo tiempo el mito y la historia, la tragedia y el amor del mundo entero."],
      price: "1600",
      genre: [["11", "02"],["Romance", "Literatura Latinoamericana"]],
      pictureurl: Marquez,
      editorial: "Debolsillo",
      encuadernacion: "Tapa blanda",
      pags: 496,
      isbn: 9788497592208,
      añoedicion: 2018,
    },
    {
      id: 7,
      name: "Las hermanas Makioka",
      author: "Junichiro Tanizaki",
      synopsis:
        ["Pocos años antes de comenzar la Segunda Guerra Mundial, en la tradicional Osaka, cuatro mujeres de clase alta tratan de preservar una forma de vida ancestral que está a punto de desaparecer. Las hermanas Makioka es el retrato conmovedor, pero implacable, de una familia y de la sociedad japonesa que estaban enfrentándose al abismo de la modernidad. Lleno de bellas y delicadas estampas de las costumbres de la aristocracia japonesa, captura tanto las convenciones sociales como la íntima angustia de sus protagonistas.Las hermanas Makioka, obra fundamental de Junichirô Tanizaki, es fruto de una redacción lenta y meditada, en la que buscó refugio de la catástrofe de la guerra, recreando un suntuoso y exquisito mundo con la nostalgia de un tiempo y felicidad que se estaban desvaneciendo."],
      price: "2800",
      genre: [["01", "29"],["Literatura Universal", "Drama"]],
      pictureurl: Tanizaki,
      editorial: "Debolsillo",
      encuadernacion: "Tapa blanda",
      pags: 576,
      isbn: 9788490322499,
      añoedicion: 2014,
      traduccion: "Miguel Menéndez Cuspidera"
    },
    {
      id: 8,
      name: "Orgullo y Prejuicio",
      author: "Jane Austen",
      synopsis:
        ["A lo largo de una trama que discurre con la precisión de un mecanismo de relojería, Jane Austen perfila una galería de personajes que conforman un perfecto y sutil retrato de época: las peripecias de una dama empeñada en casar a sus hijas con el mejor partido de la región, los vaivenes sentimentales de las hermanas, el oportunismo de un clérigo adulador... El trazado de los caracteres y el análisis de las relaciones humanas sometidas a un rígido código de costumbres, elementos esenciales en la narrativa de la autora, alcanzan en Orgullo y prejuicio una maestría insuperable."],
      price: "1245",
      genre: [["11", "01"],["Romance", "Literatura Universal"]],
      pictureurl: Austen,
      editorial: "Alma",
      encuadernacion: "Tapa dura",
      pags: 448,
      isbn: 9788415618782,
      añoedicion: 2017,
      ilustracion: "Dàlia Adillon"
    }
  ];

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]) //establecer un estado local como array vacío, que después recibe la respuesta de una promise. Esto es para que al llegar a ItemList (antes de ejecutar la promise) no rompa cuando intente mapear.
    
    //const {categoryId} = useParams()

    useEffect(()=> {  //Al cambiar el estado local, el componente se reenderiza y entra en loop [la promise siempre se deja para el final]
        const callCatalog = new Promise ((success, reject) => { //al ejecutar la promise en un useEffect, solo lo hace en el primer montaje
            setTimeout(() => {
                success(catalog) //simula un ajax
            }, 2000);
        })
        callCatalog.then((result) => { 
            setItems(result)
        })
    }, [])
    
    return (
        <div className={"item-list-display"}>
        <ItemList items={items}/>
        <h1 style={{color: "white"}}>
            {greeting}
        </h1>
        <img src={spinner} className="App-logo" alt="logo" />
        </div>
    )
}

export default ItemListContainer