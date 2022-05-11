import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './HOC/A';
import B from './HOC/B';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* /////////////////////////////// HOC ////////////////////////// */}
      <A name='A' />
      <B name='B' />
      {/* /////////////////////////////// PureComponents ////////////////////////// */}
    </div>
  );
}

export default App;
