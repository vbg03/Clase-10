import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Cards from './assets/componentes/Cards';
import YoutubePlayer from './assets/componentes/YoutubePlayer'; // Importar el nuevo componente
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards />
      <h1>Vite + React</h1>
      <YoutubePlayer videoId="dQw4w9WgXcQ" /> {/* Reemplaza con el ID del video de YouTube */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;