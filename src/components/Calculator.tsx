import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const handleNumber = (num: string) => {
    if (hasResult) {
      setDisplay(num);
      setEquation(num);
      setHasResult(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
      setEquation(equation + num);
    }
  };

  const handleOperator = (op: string) => {
    if (!equation.endsWith(' ') && equation !== '') {
      setEquation(equation + ' ' + op + ' ');
      setDisplay('0');
    }
    setHasResult(false);
  };

  const handleEquals = () => {
    try {
      // Remove trailing operator if exists
      const cleanEquation = equation.trim().replace(/[+\-*/]\s*$/, '');
      if (!cleanEquation) return;

      const result = eval(cleanEquation);
      const formattedResult = Number.isInteger(result) ? result.toString() : result.toFixed(2);
      
      setDisplay(formattedResult);
      setEquation(formattedResult);
      setHasResult(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasResult(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
  };

  const handleToggleSign = () => {
    const currentValue = parseFloat(display);
    setDisplay((-currentValue).toString());
    setEquation((-currentValue).toString());
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    const percentValue = currentValue / 100;
    setDisplay(percentValue.toString());
    setEquation(percentValue.toString());
  };

  return (
    <div className="calculator" data-testid="calculator">
      <h1>Calculator</h1>
      <div className="display" data-testid="display">
        <div className="equation" data-testid="equation">{equation || '0'}</div>
        <div className="current" data-testid="current">{display}</div>
      </div>
      <div className="keypad">
        <button onClick={handleClear} data-testid="clear" className="special">AC</button>
        <button onClick={handleToggleSign} data-testid="sign" className="special">+/-</button>
        <button onClick={handlePercentage} data-testid="percent" className="special">%</button>
        <button onClick={() => handleOperator('/')} data-testid="divide" className="operator">÷</button>
        
        <button onClick={() => handleNumber('7')} data-testid="seven">7</button>
        <button onClick={() => handleNumber('8')} data-testid="eight">8</button>
        <button onClick={() => handleNumber('9')} data-testid="nine">9</button>
        <button onClick={() => handleOperator('*')} data-testid="multiply" className="operator">×</button>
        
        <button onClick={() => handleNumber('4')} data-testid="four">4</button>
        <button onClick={() => handleNumber('5')} data-testid="five">5</button>
        <button onClick={() => handleNumber('6')} data-testid="six">6</button>
        <button onClick={() => handleOperator('-')} data-testid="subtract" className="operator">-</button>
        
        <button onClick={() => handleNumber('1')} data-testid="one">1</button>
        <button onClick={() => handleNumber('2')} data-testid="two">2</button>
        <button onClick={() => handleNumber('3')} data-testid="three">3</button>
        <button onClick={() => handleOperator('+')} data-testid="add" className="operator">+</button>
        
        <button onClick={() => handleNumber('0')} data-testid="zero" className="zero">0</button>
        <button onClick={() => handleNumber('.')} data-testid="decimal">.</button>
        <button onClick={handleEquals} data-testid="equals" className="operator">=</button>
      </div>
    </div>
  );
};

export default Calculator; 