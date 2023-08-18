import React from 'react'

export default function addtodoex({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  return (
    <form>
      <input 
        type='text' 
        placeholder='Add todo'
        value={text}
        onChange={handleChange} />
      <button>Add</button>
    </form>>
  )
}
