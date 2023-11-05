import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function getPlants() {
      try {
        const response = await axios.get('http://localhost:5000/plants');
        setPlants(response.data);
      } catch (error) {
        console.error("Les donnés n'ont pas été trouvé: ", error);
      }
    }

    getPlants();
  }, []);

  return (
    <div>
      <div><NavBar /></div>
      <div className="card">
        {plants.map((plant, index) => (
          <div className="cardplant" key={index}>
            <h2 className="title">{plant.name}</h2>
            <p className="description">{plant.description}</p>
            <img className="image" src={plant.image} alt={`Photo de ${plant.name}`} />
            <p className="water">Besoin d'eau : {plant.needwater}</p>
            <a className="link" href={plant.moreinfo} target="_blank">Plus d'informations</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
