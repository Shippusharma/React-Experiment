import React from 'react';
import './App.css';
// import Country from './country_state_city/Country';
import EthersWeb3 from './ethers_web3';
import A from './HOC/A';
import B from './HOC/B';
import Memo from './memo';
import RefTest from './useRef';
import Layout from './useLayoutEffect/Layout';
import FormFill from './react-hook-form/FormFill';
import ReactSkeleton from './react-loading-skeleton';
import UseMemo from './useMemo';
import UseCallback from './useCallback';
import PureFunction from './pure-function';
import LazyLoading from './code_splitting/LazyLoading';
import CustomHook from './custom_hook';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from './app/features/counter/counterSlice';
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Redux-Toolkit</p>
      <span>{count}</span>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label='Reset value' onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button aria-label='incrementByAmount value' onClick={() => dispatch(incrementByAmount(1000))}>
          incrementByAmount
        </button>
        <button aria-label='decrementByAmount value' onClick={() => dispatch(decrementByAmount(500))}>
          decrementByAmount
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      {/* ///////////////////// Redux-Toolkit ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <Counter />
      </div>

      {/* ///////////////////// HOC ///////////////// */}
      <div
        className='Higher_Order_Components'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <h6>Higher Order Component | Pure Component</h6>
        <A name='A' />
        <B name='B' />
      </div>

      {/* ///////////////////// memo ///////////////// */}
      <div
        className='memo'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <Memo />
      </div>

      {/* ///////////////////// Pure Function ///////////////// */}
      <div
        className='memo'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <PureFunction />
      </div>

      {/* ///////////////////// useCallback ///////////////// */}
      <div
        className='memo'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <p>useCallback</p>
        <UseCallback />
      </div>

      {/* ///////////////////// useMemo ///////////////// */}
      <div
        className='memo'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <UseMemo />
      </div>

      {/* ///////////////////// Custom Hook ///////////////// */}
      <div
        className='memo'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <p>Custom Hook | Pure Component</p>
        <CustomHook />
      </div>

      {/* ///////////////////// useRef ///////////////// */}
      <div
        className='ref'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <RefTest />
      </div>

      {/* ///////////////////// useLayoutEffect ///////////////// */}
      <div
        className='layout-effect'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <h6>useLayoutEffect</h6>
        <Layout />
      </div>

      {/* ///////////////////// React-loading Skeleton ///////////////// */}
      <div className='react-skeleton' style={{ textAlign: 'center', padding: '20px', border: '1px solid black' }}>
        <ReactSkeleton />
      </div>

      {/* ///////////////////// web3.js///////////////// */}
      <div className='web3'>
        <EthersWeb3 />
      </div>

      {/* ///////////////////// React-Hook-Form ///////////////// */}
      <div
        className='react-hook-form'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <FormFill />
      </div>

      {/* ///////////////////// code_splitting ///////////////// */}
      <div
        className='react-hook-form'
        style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: '20px', border: '1px solid black' }}
      >
        <p>Code Splitting | Lazy loading | Error Boundaries | Routes-based code Splitting</p>
        <LazyLoading />
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
