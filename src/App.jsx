import { useEffect, useState, useContext, useRef, useReducer } from 'react';
import './App.css'
import MizuCodeContext from './main';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state +1;
      case "decrement":
        return state -1;
        default:
          return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const mizucodeInfo = useContext(MizuCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  
  }

  useEffect(() =>{
    console.log("Hello Hooks");
  },[count]);

  const handleRef = () => {
      console.log(ref.current.value);
      console.log(ref.current.offsetHeight);
  };

  //useMemo
  const [count01, setCount01] = useSrate(0);
  const [count02, setCount02] = useSrate(0);

  const square = () => {
    let i = 0;
    while (i < 2){
      i++;
    }
    return count02 * count02;
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{mizucodeInfo.name}</p>
      <p>{mizucodeInfo.age}</p>
    

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>

    
      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>ー</button>
    

    
      <hr />
      <h1>useMemo</h1>
      <div>カウント１：{count01}</div>
      <div>カウント２：{count02}</div>
      <div>結果：{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>

    </div>     
  );
}

export default App
