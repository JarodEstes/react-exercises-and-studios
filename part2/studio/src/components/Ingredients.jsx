import recipedata from ""

function IngredientList() {
   return (
    <div>
      <h3>Ingrediends</h3>
      {recipedata.map((data) =>{
        return (
          <div key={data.name}>
            {data.ingrediends.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
          </div>
        )
          } )}
    </div>
   )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 