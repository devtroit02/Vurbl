import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Input = () => {
  


 

  return (
    
    <input
  type="text"
  minLength={75}
  style={{
    width: '500px',
    height: '250px',
    fontSize: '16px',
    border: '2px solid black',
    borderRadius: '4px',
    padding: '5px'
  }}
/>


    

  );
};


export default Input;