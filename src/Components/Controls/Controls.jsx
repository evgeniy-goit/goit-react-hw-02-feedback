import React from 'react';
import './Controls.scss';
import { v4 as uuidv4 } from 'uuid';

const Controls = ({onIncrement, options}) => (

    <div className="controls">
    {options.map(option => (
        <button 
        type='button' 
        className="button" 
        onClick={()=>onIncrement(option)}
        key={uuidv4()}
        >
            {option}
        </button>))
    }
</div>
);

export default Controls;