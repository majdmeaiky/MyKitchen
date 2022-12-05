import React from 'react'
import Recipe from '../functional components/Recipe';

export default function RecipesDone(props) {

    const getRecipeFromDone = (recipeName) => {
        props.setRecipeFromDone(recipeName);
    }

    let recipeDoneStr = props.recipesDone.map((recipeDone) => <Recipe
        image={recipeDone.image}
        name={recipeDone.name}
        description={recipeDone.description}
        value={recipeDone.value}
        sendRecipeFromDone={getRecipeFromDone}

    />)
    return (
        <div style={{ width:'100%' }}>
            <h1>Ready to EAT!
            </h1>
            <h2>Recipes made:{props.counter} </h2>
            <div style={{width:'80%',display:'flex',alignItems: 'center',marginLeft:'400px'}}>
                {recipeDoneStr}

            </div>
            
        </div>
        
    )
    
}
