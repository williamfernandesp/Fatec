import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Pokemon from "../Pokemon";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState({});

  async function generatePokemon() {
    function generatePokemonNumber(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }

    let randomPokemonNumber = generatePokemonNumber(1, 251);

    let answer = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}/`
    );
    let pokemons = await answer.json();
    setPokemon(pokemons);
  }

  async function findPokemon() {
    let answer = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    let pokemons = await answer.json();
    setPokemon(pokemons);
  }

  return (
    <div className="App">
      <h1>Pokemon Generator</h1>
      <Pokemon pokemon={pokemon} />
      <Button variant="primary" className="btnGerar" onClick={generatePokemon}>
        Generate Pokemon
      </Button>
      <p>OR</p>
      <input
        type="text"
        className="fieldValue"
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      />
      <Button variant="primary" className="btnGerar" onClick={findPokemon}>
        Search by ID
      </Button>
    </div>
  );
}

export default App;
