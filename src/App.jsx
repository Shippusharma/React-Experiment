import './App.css';
import Country from './country_state_city/Country';
import A from './HOC/A';
import B from './HOC/B';

function App() {
  return (
    <>
      <div
        className='Fetching Country_State_City'
        style={{ backgroundColor: 'lightgreen', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <Country />
      </div>
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <A name='A' />
        <B name='B' />
      </div>
    </>
  );
}

export default App;
