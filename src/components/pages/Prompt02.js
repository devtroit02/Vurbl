import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {db} from "./firebase";
import { collection, addDoc } from "firebase/firestore"; 
import {  useHistory } from 'react-router-dom';



  
function Prompt2() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const submit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "prompt1" ), {
      
      message:message,
    })
    .then(() => {history.push("/home")
      alert('Message submitted 👍' );
    })
    .catch((error) => {
      alert(error.message);
    });

    
    setMessage('');
    
  };
  
  return (
    <div className="text-center">
        <h1>Vurbl_01</h1>
      <p>  Vurbl_01: What came first the chicken or the egg??  </p>
        <input
          type="text"
          
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '500px',
            height: '250px',
            fontSize: '16px',
            border: '2px solid black',
            borderRadius: '4px',
            padding: '5px'
          }}
        />
        <div>
        
        <button onClick={submit}>Submit</button>
        
       </div>
    </div>
  );
}
  
export default Prompt2;