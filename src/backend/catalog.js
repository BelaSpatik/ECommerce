
const catalog = [
  // simular una base de datos (api)
  {
    id: 1,
    name: "La ladrona de libros",
    author: "Markus Zusak",
    stock: 6,
    synopsis:
      ["Érase una vez un pueblo donde las noches eran largas y la muerte contaba su propia historia. En el pueblo vivía una niña que quería leer, un hombre que tocaba el acordeón y un joven judío que escribía bellos cuentos para escapar del horror de la guerra. Al cabo de un tiempo, la niña se convirtió en una ladrona que robaba libros y regalaba palabras.", "Una novela tremendamente humana, emocionante e inolvidable, que describe las peripecias de una niña alemana de nueve años desde que es dada en adopción por su madre hasta el final de la II Guerra Mundial. Su nueva familia, gente sencilla y nada afecta al nazismo, le enseña a leer y, a través de los libros, a distraerse durante los bombardeos y combatir la tristeza. Pero es el libro que ella misma está escribiendo el que finalmente le salvará la vida."], 
    price: "1600",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "32", name: "Segunda Guerra Mundial" },
        { catId: "29", name: "Drama" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/la-ladrona-de-libros.jpg"),
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
    stock: 5,
    synopsis:
      ["En la Extremadura profunda de los años sesenta, la humilde familia de Paco el Bajo sirve en un cortijo sometida a un régimen de explotación casi feudal que parece haberse detenido en el tiempo pero sobre el que soplan ya algunos aires nuevos. Es época de caza y Paco se ha tronzado el peroné. Las presiones del señorito para que lo acompañe en las batidas a pesar de su estado sirven para retratar la crueldad y los abusos de una clase instalada en unos privilegios que considera inalienables y que los protagonistas soportan con una dignidad ejemplar.", "Un relato a un tiempo realista, poético y trágico que contiene algunas de las mejores páginas del gran novelista de Valladolid. La historia de unos seres humillados, sometidos al capricho de un amo que se cree propietario de sus vidas. Una magnífica novela que inspiró una de las mejores películas del cine español."],
    price: "890",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "29", name: "Drama" }
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/los-santos-inocentes.jpg"),
    editorial: "Destino",
    encuadernacion: "Tapa blanda",
    pags: 168,
    isbn: 9788423356300,
    añoedicion: 2019,
  },
  {
    id: 3,
    name: "Ficciones",
    author: "Jorge Luis Borges",
    stock: 10,
    synopsis:
      ["Pensé en un laberinto, en un sinuoso laberinto creciente que abarcara el pasado y el porvenir y que implicara de algún modo los astros.", "Ficciones es posiblemente la obra más reconocida de Jorge Luis Borges y un hito en la historia de la literatura. Aquí se encuentran lo policiaco («La muerte y la brújula») y lo fantástico («La lotería en Babilonia»), lo irreal («Las ruinas circulares») y lo imaginario («Tlön, Uqbar, Orbis Tertius»), el que Borges consideró acaso su mejor cuento («El Sur») y uno de los comienzos más cautivadores de un relato jamás escrito («Nadie lo vio desembarcar en la unánime noche»). Cada uno de los dieciséis cuentos reunidos en este libro es, en sí, pieza fundacional y celebración del universo borgeano."],
    price: "850",
    genre: [
        { catId: "03", name: "Literatura Argentina" },
        { catId: "30", name: "Cuentos" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/ficciones.jpg"),
    editorial: "Lumen",
    encuadernacion: "Tapa blanda",
    pags: 208,
    isbn: 9788426405739,
    añoedicion: 2019,
  },
  {
    id: 4,
    name: "El proceso",
    author: "Franz Kafka",
    stock: 4,
    synopsis:
    ["La mayoría de los autores y críticos han reconocido a Kafka como uno de los grandes escritores de su siglo, dotado de una interioridad y unos poderes de expresión extraordinarios. Kafka ansiaba encontrarle un significado a la vida y expresarlo en sus escritos. Lo que encontró fueron tan sólo paradojas.", "Josef K., el protagonista, es acusado de un delito que nunca llegará a conocer y se ve envuelto en una maraña de la que no podrá salir. Nadie sabe quién dirige los engranajes que propician la detención y el posterior proceso. La situación en la que se encuentra, a pesar de ser aparentemente absurda, se nos hace muy verosímil. En la novela aparecen abogados, jueces, ujieres, guardianes... que, en conjunto, dan una imagen impactante de los mecanismos de la Ley y del Estado.", "«El proceso» representa el mundo de un hombre dividido interiormente, inseguro de estar en la realidad: Josef K. jamás descubrirá cuál es su culpa y ni siquiera llegará a saber si es culpable."],
    price: "1950",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "29", name: "Drama" }
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/el-proceso.jpg"),
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
    stock: 5,
    synopsis:
      ["Fahrenheit 451: la temperatura a la que el papel se enciende y arde. Guy Montag pertenece a una extraña brigada de bomberos cuya misión, paradójicamente, no es la de sofocar incendios sino la de provocarlos para quemar libros, los cuales están prohibidos porque son causa de discordia y sufrimiento. El Sabueso Mecánico del Departamento de Incendios, armado con una letal inyección hipodérmica, escoltado por helicópteros, está preparado para rastrear a los disidentes que aún conservan y leen libros. En el país de Montag está terminantemente prohibido leer porque leer obliga a pensar, y en este país pensar está prohibido: ya que leer impide ser ingenuamente feliz, en esta sociedad distópica hay que ser feliz a la fuerza.", "Como «1984», de George Orwell, como «Un mundo feliz», de Aldous Huxley, «Fahrenheit 451» describe una civilización occidental esclavizada por los medios, los tranquilizantes y el conformismo."],
    price: "750",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "08", name: "Ciencia Ficción" },
        { catId: "31", name: "Distopía" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/fahrenheit-451.jpg"),
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
    stock: 7,
    synopsis:
      ["«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo». Con estas palabras empieza una novela ya legendaria en los anales de la literatura universal, una de las aventuras literarias más fascinantes de nuestro siglo.", "Millones de ejemplares de Cien años de soledad leídos en todas las lenguas y el premio Nobel de Literatura coronando una obra que se había abierto paso «boca a boca» -como gusta decir el escritor- son la más palpable demostración de que la aventura fabulosa de la familia Buendía-Iguarán, con sus milagros, fantasías, obsesiones, tragedias, incestos, adulterios, rebeldías, descubrimientos y condenas, representaba al mismo tiempo el mito y la historia, la tragedia y el amor del mundo entero."],
    price: "1600",
    genre: [
        { catId: "02", name: "Literatura Latinoamericana" },
        { catId: "11", name: "Romance" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/cien-años-de-soledad.jpg"),
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
    stock: 2,
    synopsis:
      ["Pocos años antes de comenzar la Segunda Guerra Mundial, en la tradicional Osaka, cuatro mujeres de clase alta tratan de preservar una forma de vida ancestral que está a punto de desaparecer. Las hermanas Makioka es el retrato conmovedor, pero implacable, de una familia y de la sociedad japonesa que estaban enfrentándose al abismo de la modernidad. Lleno de bellas y delicadas estampas de las costumbres de la aristocracia japonesa, captura tanto las convenciones sociales como la íntima angustia de sus protagonistas.", "Las hermanas Makioka, obra fundamental de Junichirô Tanizaki, es fruto de una redacción lenta y meditada, en la que buscó refugio de la catástrofe de la guerra, recreando un suntuoso y exquisito mundo con la nostalgia de un tiempo y felicidad que se estaban desvaneciendo."],
    price: "2800",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "29", name: "Drama" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/las-hermanas-makioka.jpg"),
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
    stock: 7,
    synopsis:
      ["Jane Austen ocupó un lugar preminente en la literatura británica. Reivindicada vehementemente por Rudyard Kipling y Edward Said, la elegancia estilística de su prosa, su ironía y, sobre todo, su perspicacia para el retrato social convierten sus obras en una referencia ineludible de la literatura del siglo XIX.", "A lo largo de una trama que discurre con la precisión de un mecanismo de relojería, Jane Austen perfila una galería de personajes que conforman un perfecto y sutil retrato de época: las peripecias de una dama empeñada en casar a sus hijas con el mejor partido de la región, los vaivenes sentimentales de las hermanas, el oportunismo de un clérigo adulador... El trazado de los caracteres y el análisis de las relaciones humanas sometidas a un rígido código de costumbres, elementos esenciales en la narrativa de la autora, alcanzan en «Orgullo y prejuicio» una maestría insuperable."],
    price: "1245",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "11", name: "Romance" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/orgullo-y-prejuicio.jpg"),
    editorial: "Alma",
    encuadernacion: "Tapa dura",
    pags: 448,
    isbn: 9788415618782,
    añoedicion: 2017,
    ilustracion: "Dàlia Adillon"
  },
  {
    id: 9,
    name: "Pédro Páramo",
    author: "Juan Rulfo",
    stock: 5,
    synopsis:
    ["En 1955 aparece «Pedro Páramo», novela gestada largamente por un escritor con fama de poco prolífico y que aunó la propia tradición narrativa hispanoamericana con los principales renovadores de la occidental: Joyce, Faulkner, Woolf.", "Juan Rulfo nos transporta con gran maestría de lo real a lo fantástico por medio de un estilo vigoroso y poético. Profundamente enraizada en lo popular, la narrativa de Juan Rulfo describe con conmovedora fuerza la cotidiana realidad de un mundo a la vez violento y lírico. Pedro Páramo lleva el dolor mexicano a su forma más universal, trascendiendo -sin olvidarla- la historia real. De ahí que, en su conjunto, la obra de Rulfo sea un clásico de las letras hispanoamericanas contemporáneas."],
    price: "1200",
    genre: [
        { catId: "02", name: "Literatura Latinoamericana" },
        { catId: "29", name: "Drama" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/pedro-paramo.jpg"),
    editorial: "RM",
    encuadernacion: "Tapa blanda",
    pags: 136,
    isbn: 9788493442606,
    añoedicion: 2016,
  },
  {
    id: 10,
    name: "Variaciones en rojo",
    author: "Rodolfo Walsh",
    stock: 4,
    synopsis:
    ["Las tres novelas breves que componen Variaciones en rojo han sido consideradas por la crítica argentina auténticas piezas maestras de la literatura policial. Tres asesinatos son investigados y resueltos por dos hombres: el comisario Jiménez, hombre sagaz y experimentado en su oficio, y Daniel Hernández, un joven corrector de pruebas de una editorial, reflexivo y silencioso, que muestra una deslumbrante capacidad de observación y de análisis en sus conclusiones. Los dos hombres se complementan y, de alguna manera, rivalizan en la resolución de cada caso, elaborando diferentes teorías sobre la identidad y las motivaciones del asesinado."],
    price: "726",
    genre: [
        { catId: "03", name: "Literatura Argentina" },
        { catId: "09", name: "Policial y Suspenso" },
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/variaciones-en-rojo.jpg"),
    editorial: "De La Flor",
    encuadernacion: "Tapa blanda",
    pags: 174,
    isbn: 9789505151042,
    añoedicion: 2005,
  },
  {
    id: 11,
    name: "Teatro Completo",
    author: "Ánton Chejov",
    stock: 3,
    synopsis:
    ["Chejov refleja en su obra las contradicciones de la vida social de su país en las postrimerías del siglo XIX y vísperas de la revolución democrática burguesa de 1905 a 1907. Describe irónica y despiadadamente la degradación paulatina, tanto económica como cultural, de la nobleza latifundista, centrando su atención en la suerte de su propio estamento social.", "Chejov introdujo un cambio radical en las formas de la dramaturgia, dando a la acción dramática una estructura nueva capaz de abarcar cualquier manifestación de la vida. Con una simple sucesión de cuadros cotidianos logra impresiones generales, a veces de una gran intensidad."],
    price: "1500",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "07", name: "Teatro" },
        { catId: "29", name: "Drama"}
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/teatro-completo.jpg"),
    editorial: "Losada",
    encuadernacion: "Tapa blanda",
    pags: 788,
    isbn: 9789500398121,
    añoedicion: 2017,
  },
  {
    id: 12,
    name: "Narraciones Extraordinarias",
    author: "Edgar Allan Poe",
    stock: 2,
    synopsis:
    ["Edgar Allan Poe fue uno de los pioneros del relato corto, célebre por sus historias de terror y misterio, y por ser una figura principal dentro del género policial. El autor norteamericano supo insuflar vida a las regiones más oscuras del alma humana en cuentos como los que se presentan en esta edición.", "Este libro reúne una selección de sus mejores narraciones y varias de sus maravillosas composiciones poéticas, entre las que seencuentra «El cuervo». Los textos se acompañan de inquietantes ilustraciones creadas especialmente para esta edición."],
    price: "1379",
    genre: [
        { catId: "01", name: "Literatura Universal" },
        { catId: "09", name: "Policial y Suspenso" },
        { catId: "10", name: "Terror" }
    ],
    pictureurl: (process.env.PUBLIC_URL + "/images/narraciones-extraordinarias.jpg"),
    editorial: "Alma",
    encuadernacion: "Tapa blanda",
    pags: 560,
    isbn: 9788417430689,
    añoedicion: 2019,
    ilustracion: "John Coulthart"
  }
];

export const getCatalog = () => {
    return new Promise ((success, reject) => { //al ejecutar la promise en un useEffect, solo lo hace en el primer montaje
        setTimeout(() => {
            success(catalog) //simula un ajax
        }, 2000);
    })
}

export const getBookById = () => {
    return new Promise((success) => {
        setTimeout(() => {
          success(catalog)
        }, 2000);
      });
}
