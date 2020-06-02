import React from 'react';
import './Circles.css'

const Circles = (props) => (
  <section className='Circles'>
    <div 
    className={props.selected === 1 ? 'selected' : 'none'}>
      1
      </div>
    <div 
    className={props.selected === 2 ? 'selected' : 'none'}>
      2
      </div>
    <div 
    className={props.selected === 3 ? 'selected' : 'none'}>
      3
    </div>
    <div 
    className={props.selected === 4 ? 'selected' : 'none'}>
      4
    </div>
  </section>
);

export default Circles;