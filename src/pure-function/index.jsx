import { thisIsPure } from './pureFunction';

const Function = () => {
  const clicked = (num) => {
    const op = thisIsPure(num);
    console.log('Pure-Function', op);
  };

  return <button onClick={() => clicked(Math.floor(Math.random() * 10 + 1))}>Pure-Function</button>;
};

export default Function;
