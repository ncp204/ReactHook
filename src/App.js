import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Todo from './views/Todo';
import ListUser from './views/ListUser';

function App() {
  let [name, setName] = useState('NCP')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching TV', type: '111' },
    { id: 'todo2', title: 'Listing music', type: '222' },
    { id: 'todo3', title: 'Fishing', type: '333' }
  ])

  useEffect(() => {
    console.log('run use effect');
  }, [todos])

  const handleEventClick = () => {
    //hook not merge stage
    if (!address) {
      toast.error('Error: Input is empty')
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1000 + 1), title: address }
    setTodos([...todos, newTodo])
    setAddress('');
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const handleDeleteTodo = (id) => {
    if (!id) {
      toast.info('Missing id')
      return;
    }
    let currentTodo = todos;
    currentTodo = todos.filter(todo => todo.id !== id)
    setTodos(currentTodo)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <ListUser />

        {/* <Todo
          todos={todos}
          title={'All todos'}
          handleDeleteTodo={handleDeleteTodo}
        />
        <Todo
          todos={todos.filter(todo => todo.type === '111')}
          title={'All todos of 111'}
          handleDeleteTodo={handleDeleteTodo}
        />
        <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventClick()}>Click me</button> */}

      </header>

    </div>
  );
}

export default App;
