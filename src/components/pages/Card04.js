import React from 'react';

const Card04 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.text}>
        Vurbl_04: What came first, the chicken or the egg? 
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
    boxShadow: '0 15px 10px rgba(255, 0, 0, 0.6)',
    padding: 20,
    margin: 20,
  },
  text: {
    fontSize: 18,
  },
};

export default Card04;