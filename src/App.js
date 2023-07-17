import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
  let [name, setName] = useState('NCP')
  const [address, setAddress] = useState('')

  const handleEventClick = () => {
    setName(address)
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
        <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
