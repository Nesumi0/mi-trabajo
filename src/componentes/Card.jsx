import { useState, useEffect } from 'react';
import '../css/estilos.css';

const ListaPokemon=[
  'https://pokeapi.co/api/v2/pokemon/1',
  'https://pokeapi.co/api/v2/pokemon/4',
  'https://pokeapi.co/api/v2/pokemon/7',
  'https://pokeapi.co/api/v2/pokemon/8',
  'https://pokeapi.co/api/v2/pokemon/9',
  'https://pokeapi.co/api/v2/pokemon/10',
  'https://pokeapi.co/api/v2/pokemon/11',
  'https://pokeapi.co/api/v2/pokemon/12',
  'https://pokeapi.co/api/v2/pokemon/13',
  'https://pokeapi.co/api/v2/pokemon/14'
];

function Card(props){
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch(props.link);
        const info = await respuesta.json();
        setPokemon(info);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.link]);

  if (isLoading) {
    return <div>Cargando.....</div>;
  }

  return (
    <div className='contenedorTexto'>
      <img className='contenedorImagen' src={pokemon.sprites.front_default} alt='imagen' />
      <h5 className='contenedorTitulo'>{pokemon.name}</h5>
      <p className='contenedorParrafo'>Especie: "Pokemon"</p>
    </div>
  );
}

function Cartas() {
  return (
    <div className="Cartass">
      {ListaPokemon.map((link, index) => (
        <Card key={index} link={link} />
      ))}
    </div>
  );
}

export default Cartas;
