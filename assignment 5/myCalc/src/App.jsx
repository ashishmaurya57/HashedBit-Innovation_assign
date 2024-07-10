import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operator) => {
    if (num1 && num2) {
      let expression = num1 + operator + num2;
      try {
        setResult(evaluate(expression));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setResult('Please enter both numbers.');
    }
  };

  const clearInputs = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="output">
        Result: <span>{result}</span>
      </div>
      <div className="keypad">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={clearInputs}>C</button>
      </div>
    </div>
  );
}

export default App;
