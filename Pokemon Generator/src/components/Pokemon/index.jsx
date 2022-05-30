import Card from "react-bootstrap/Card";
import "./Pokemon.css";

function Pokemon(props) {
  if (props.pokemon.sprites == null) {
    return (
      <div className="Pokemon">Press the button to generate the Pokemon</div>
    );
  }

  return (
    <Card className="cardPokemon">
      <Card.Img variant="top" src={props.pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>
          NAME: {props.pokemon.forms[0].name.toUpperCase()}
        </Card.Title>
        <Card.Text>
          TYPE: {props.pokemon.types[0].type.name.toUpperCase()}
        </Card.Text>
        <Card.Text>WEIGHT: {props.pokemon.weight} KG</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
