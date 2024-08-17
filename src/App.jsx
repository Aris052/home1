import { useState } from 'react'
import './App.css'
export default function App() {
  const [count, setCount] = useState(1)
  const [people, setPeople] = useState([
    { id: 101, name: "Tiko", surname: "Harutyunyan", salary: 200000 },
    { id: 102, name: "Ano", surname: "Davtyan", salary: 350000 },
    { id: 103, name: "Gago", surname: "Tigranyan", salary: 102000 },
    { id: 104, name: "Maro", surname: "Melqonyan", salary: 120000 },
    { id: 105, name: "Saro", surname: "Harutyunyan", salary: 75000 },
    { id: 106, name: "Varo", surname: "Mnacakanyan", salary: 820000 },
  ])

  const handleSalaryUp = (id) => {
    let temp = [...people]
    let index = temp.findIndex(x => x.id == id)
    temp[index].salary += 57000
    setPeople(temp)
  }

  const handleSalaryDown = (id) => {
    let temp = [...people]
    let index = temp.findIndex(x => x.id == id)
    temp[index].salary -= 50000
    if (temp[index].salary < 50001) {
      temp[index].salary = 50000
    }
    setPeople(temp)
  }

  const handleRemove = (id) => {
    setPeople(people.filter(person => person.id !== id))
  }

  return <>
    <h1>barev {count}</h1>
    <button onClick={() => setCount(count + 1)}>level up</button>
    {
      people.map(item => <div key={item.id}>
        <p>{item.name} {item.surname}</p>
        <strong>{item.salary} AMD</strong>
        <button onClick={() => handleSalaryUp(item.id)}>salary up</button>
        <button onClick={() => handleSalaryDown(item.id)}>Salary Down</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
      </div>)
    }
  </>
}