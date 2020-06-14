import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [liczba,setLiczba] = React.useState(0)
    return (
      
      <div style={{
        marginBottom:"auto",
        marginTop:"auto"
      }}>
        <button onClick = {()=>setLiczba(liczba-1)}>  -1  </button>
        {
          liczba 
        }
        <button onClick = {()=>setLiczba(liczba+1)}>  +1  </button>
        
        { liczba >= 9 && <p>Kolego nie za dużo tego?</p>}
        { liczba <= (-5) && <p>Kolego chyba kierunek sie nie zgadza</p>}
      </div>
      
    )
};

export default App;
