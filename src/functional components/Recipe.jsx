import React from 'react';
import Button from '@mui/material/Button';

export default function recipe(props) {
  //props.name="stam"; ERROR IMMUTABLE!
  const sentToDone=()=>{props.sendRecipeToDone(props.name);}
  const sentFromDone=()=>{props.sendRecipeFromDone(props.name);}

  return (
    <div className="container" style={{ margin:'10px', height: '400px', width: '20%', border: '2px solid black', borderRadius: '8px', float: 'left' }}>
      <img src={props.image} style={{ height: '50%', width: '100%' }} />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      {props.value != 'eat!' ? (
        <Button variant="outlined" onClick={sentToDone} >{props.value} </Button>
      ) : (
        <Button variant="outlined" onClick={sentFromDone} >{props.value} </Button>
      )}
     




    </div>);
}