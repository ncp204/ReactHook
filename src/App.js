import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  let [name, setName] = useState('NCP')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching TV' },
    { id: 'todo2', title: 'Listing music' }
  ])

  const handleEventClick = () => {
    //hook not merge stage
    if (!address) {
      toast.error('Error: Input is empty')
      return;
    }
    let newTodo = { id: 'xxx', title: address }
    setTodos([...todos, newTodo])
    setAddress('');
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <div className='todo-container'>
          {todos.map(todo => {
            return (
              <li className='todo-child' key={todo.id}>{todo.title}</li>
            )
          })}
        </div>
        <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventClick()}>Click me</button>
      </header>

    </div>
  );
}

export default App;
