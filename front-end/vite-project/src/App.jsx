import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Utilisez une requête HTTP pour obtenir les données du serveur Express
    async function fetchPlants() {
      try {
        const response = await axios.get('http://localhost:5000/plants');
        setPlants(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }

    fetchPlants();
  }, []);

  return (
    <div>
      <h1>Liste des Plantes</h1>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <img src={plant.image} alt={`Photo de ${plant.name}`} />
            <p>Besoin d'eau : {plant.needwater}</p>
            <a href={plant.moreinfo}>Plus d'informations</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
