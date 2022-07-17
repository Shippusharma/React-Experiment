import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from '../features/counter/counterSlice';

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

export default Counter;
