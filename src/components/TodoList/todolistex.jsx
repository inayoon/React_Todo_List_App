import React, {useState} from 'react';



export default function todolistex() {
  const [todos, setTodos] = useState([
    { id :'123', text: '장보기', status: 'active'},
    { id :'124', text: '준보기', status: 'active'},
  ]);
  const handleAdd =(todo) => setTodos([...todos, todo])
  return (
    <section>
      <ul>
        {todos.map((item) =>(
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <Addtodoex onAdd={handleAdd}/>
    </section>
  )
}