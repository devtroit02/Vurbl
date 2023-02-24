import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {db} from "./firebase";
import { collection, addDoc } from "firebase/firestore"; 
import {  useHistory } from 'react-router-dom';



  
function Prompt3() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const submit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "prompt3" ), {
      
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
        <h1>Vurbl_03</h1>
      <p>  Vurbl_03: Houston or Dallas?  </p>
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
  
export default Prompt3;