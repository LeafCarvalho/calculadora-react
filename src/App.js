
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAdd = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleMultiplyNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(parseFloat(firstNumber)) * Number(parseFloat(currentNumber));
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(parseFloat(firstNumber)) / Number(parseFloat(currentNumber));
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(parseFloat(firstNumber)) + Number(parseFloat(currentNumber));
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(parseFloat(firstNumber)) - Number(parseFloat(currentNumber));
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
            case '*':
            handleMultiplyNumbers();
            break;
            case '/':
            handleDivisionNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="," onClick={() => handleAdd(',')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAdd('7')}/>
          <Button label="8" onClick={() => handleAdd('8')}/>
          <Button label="9" onClick={() => handleAdd('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAdd('4')}/>
          <Button label="5" onClick={() => handleAdd('5')}/>
          <Button label="6" onClick={() => handleAdd('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAdd('1')}/>
          <Button label="2" onClick={() => handleAdd('2')}/>
          <Button label="3" onClick={() => handleAdd('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Column>
        <Button label="0" onClick={() => handleAdd('0')}/>
        </Column>
      </Content>
    </Container>
  );
}

export default App;
