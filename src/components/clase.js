import { useState } from 'react'
import './App.scss'

const Input = ({ id, text, callback }) => (
  <div className='inputHeader'>
    <input id={id} type='text' onChange={callback} placeholder={text} />
  </div>
)
export default function App() {

  const [userData, setUserData] = useState({ name: '', surname: '', age: '' })
  const { name, surname, age } = userData

  const onInputChange = e => setUserData({ ...userData, [e.target.id]: e.target.value })
  const onSubmit = () => alert(`Your name is ${name} ${surname} and you have ${age} years`)
  const fields = [
    { id: 'name', text: 'Nombre' },
    { id: 'surname', text: 'Apellido' },
    { id: 'age', text: 'Edad' },
  ]
  
  return (
    <div>
      {fields.map(field => (
        <Input key={field.id} id={field.id} text={field.text} callback={onInputChange} />
      ))}
      <button disabled={!(name && surname && age)} onClick={onSubmit}>
        Crear orden
      </button>
    </div>
  )
}