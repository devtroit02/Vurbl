import React from 'react';

const Card = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.text}>
        Vurbl_01: What practical steps could a person take in your local community to 'solve the housing crisis'? 
        </p>
      </div>
    </div>


     
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: 500,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: 20,
    margin: 20,
  },
  text: {
    fontSize: 18,
  },
};

export default Card;