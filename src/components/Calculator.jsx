import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
    };
  }

  handleButtonClick = (label) => {
    // Implemente a lógica para lidar com os cliques nos botões aqui
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="buttons">
          <Button label="1" onClick={this.handleButtonClick} />
          <Button label="2" onClick={this.handleButtonClick} />
          <Button label="3" onClick={this.handleButtonClick} />
          <Button label="+" onClick={this.handleButtonClick} />
          {/* Adicione mais botões aqui */}
        </div>
      </div>
    );
  }
}

export default Calculator;