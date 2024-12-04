import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Card = (props) => {
    const [ guessed, setGuessState ] = useState(false);
    const [ correct, setCorrect ] = useState(props.correctState);

    return ( 
        <Button 
            variant="primary" 
            style={{ 
                backgroundColor: (correct && guessed) ? "green" : ((!correct && guessed) ? "red" : "grey"), 
                color: "white",
                border: "none",
                fontSize: "20px",
                height: "100px", 
                width: "200px"}}
            onClick={() => {
                setGuessState(true);
            }}>
            {props.name}
        </Button>
     );
}
 
export default Card;