import Recipe from '../functional components/Recipe';
import React from 'react';

export default function Recipes(props) {

const getRecipeToDone=(recipeName)=>{
    props.setRecipeInDone(recipeName);
}



    let recipeStr = props.recipes.map((recipe) => <Recipe image={recipe.image}
        name={recipe.name}
        description={recipe.description}
        value={recipe.value}
        sendRecipeToDone={getRecipeToDone}
    />);


    return (
        
        <div style={{ border: '1px solid black' ,width:'100%' }}>
            <h1>Recipes List:</h1><br />
            <div style={{width:'80%',display:'flex',alignItems: 'center',marginLeft:'400px'}}>
            {recipeStr}

            </div>
        </div>);

}
