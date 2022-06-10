import './App.css';
// import Country from './country_state_city/Country';
import A from './HOC/A';
import B from './HOC/B';
import Memo from './memo';
import RefTest from './useRef/RefTest';
import Layout from './useLayoutEffect/Layout';
import FormFill from './react-hook-form/FormFill';
import ReactSkeleton from './react-loading-skeleton';
// import Web3 from './web3';

function App() {
  return (
    <>
      {/* ///////////////////// web3.js///////////////// */}
      {/* <div className='web3' style={{ textAlign: 'center', padding: '20px', border: '1px solid black' }}>
        <Web3 />
      </div> */}
      {/* ///////////////////// HOC ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <h6>Higher Order Component</h6>
        <A name='A' />
        <B name='B' />
      </div>
      {/* ///////////////////// memo ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <Memo />
      </div>
      {/* ///////////////////// React-loading Skeleton ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <ReactSkeleton />
      </div>
      {/* ///////////////////// React-Hook-Form ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <FormFill />
      </div>
      {/* ///////////////////// useRef ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <RefTest />
      </div>
      {/* ///////////////////// useLayoutEffect ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <h6>useLayoutEffect</h6>
        <Layout />
      </div>
      {/* ///////////////////// display counter ///////////////// */}
      {/* <div
        className='Fetching Country_State_City'
        style={{ backgroundColor: 'lightgreen', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <Country />
      </div> */}
    </>
  );
}

export default App;
