import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  useEffect(() => {
    console.log("This will be called only at the time of initialization,")
  }, [])
  useEffect(() => {
    console.log("This will be called whenever there is a change in secondValue")
  }, [secondValue])
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        change 2nd value
      </button>

    </div>
  );
};
export default UseEffectBasics;
