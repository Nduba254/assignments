//import App from './App.js'
import React from 'react'

const Validation = (props) =>{
    let validationMessage = 'Text long enough!';

    if (props.inputLength <=5) {
        validationMessage = 'Text too Short';
    }

    return (
        <div>
            {
            
                <p>{validationMessage}</p>
            }
            
         </div>
    );
};





export default Validation;
