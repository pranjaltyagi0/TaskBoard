import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const maxHistoryLength = 50;

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearCalculator = () => {
    setExpression('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
      addToHistory(expression, evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const addToHistory = (expression, result) => {
    const newEntry = {
      expression,
      result,
    };

    setHistory((prevHistory) => [newEntry, ...prevHistory]);

    if (history.length >= maxHistoryLength) {
      setHistory(history.slice(0, maxHistoryLength));
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" value={expression} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="calculator-buttons">
        <div className="button-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={clearCalculator}>C</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
      <div className="history-section">
        <h2>History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.expression} = {entry.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
