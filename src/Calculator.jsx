import React from 'react';
import { useState } from 'react';

function Calculator() {
  const[input1,setInput1] = useState('');
  const[input2,setInput2] = useState('');
  const[result,setResult] = useState('');



const operation = (value1,value2,type) => {
  switch(type){
    case 'add' : 
    setResult(Number(value1) +  Number(value2));
    break;
    case 'sub' :
    setResult(value1 - value2);
    break;
    case 'mul' :
    setResult(value1 * value2);
    break;
    case 'divide' :
    setResult(value1 / value2);
    break;

    default : 
    setResult('');
    setInput1('');
    setInput2('');
  }
}


  return (
    <div>
      <div>
        <input type="number" placeholder='Enter First Number:' value={input1} onChange={(e) => setInput1(e.target.value)}/> 
      </div>
      <div>
        <input type="number" placeholder='Enter Second Number:' value={input2} onChange={(e) => setInput2(e.target.value)}/> 
      </div>
      <div><button onClick={() => operation(input1,input2,'add')}>Add</button></div>
      <div><button onClick={() => operation(input1,input2,'sub')}>Sub</button></div>
      <div><button onClick={() => operation(input1,input2,'mul')}>Mul</button></div>
      <div><button onClick={() => operation(input1,input2,'divide')}>Divide</button></div>

      <div><button onClick={() => operation(input1,input2,'reset')}>Reset</button></div>

      <p>Result : {result}</p>
      </div>
  )
}

export default Calculator;