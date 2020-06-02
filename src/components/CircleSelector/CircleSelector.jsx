import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
  <div className='CircleSelector'>
      <button 
      onClick={() => props.ClickedButton (1)}>
        Select Circle 1
        </button>
      <button 
      onClick={() => props.ClickedButton (2)}>
        Select Circle 2
        </button>
      <button 
      onClick={() => props.ClickedButton (3)}>
        Select Circle 3
      </button>
      <button 
      onClick={() => props.ClickedButton (4)}>
        Select Circle 4
      </button>
  </div>
);

export default CircleSelector;
