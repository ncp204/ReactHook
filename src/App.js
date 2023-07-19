import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Todo from './views/Todo';
import ListUser from './views/ListUser';
import { CountDown, NewCountDown } from './views/Countdown';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import UserDetail from './views/UserDetail';
import ErrorPage from './views/ErrorPage';

function App() {
  let [name, setName] = useState('NCP')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching TV', type: '111' },
    { id: 'todo2', title: 'Listing music', type: '222' },
    { id: 'todo3', title: 'Fishing', type: '333' }
  ])

  useEffect(() => {
    // console.log('run use effect');
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

  const onTimesup = () => {
    toast.info('Times up')
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ marginBottom: '20px' }}>
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path='/' exact>
            <ListUser />
          </Route>
          <Route path='/user/:id'>
            <UserDetail />
          </Route>
          <Route path='/timer'>
            <CountDown onTimesup={onTimesup} />
            <span>-----------------------</span>
            <NewCountDown onTimesup={onTimesup} />
          </Route>
          <Route path='/todos'>
            <Todo
              todos={todos}
              title={'All todos'}
              handleDeleteTodo={handleDeleteTodo}
            />
            <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
            <button type='button' onClick={() => handleEventClick()}>Click me</button>
          </Route>
          {/* <Route path='/'>
            <ListUser />
          </Route> */}
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
