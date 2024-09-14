import { useParams } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const recipeDetails = data.find((recipe) => recipe.id === +id);
    setRecipe(recipeDetails);
  }, [id]);

  return (
    <div className="sm:items-center sm:p-4 bg-pink-200 sm:m-24 md:32 rounded shadow-xl "
      key={recipe.id}
    >
      <img src={recipe.image} alt={recipe.title} className="m-auto py-8 " />
      <h1 className="font-bold text-green-700 text-center">{recipe.title}</h1>
      <h3 className="text-green-400 text-center">Ingredients:</h3>
      <p className="text-green-400 text-center">{recipe.ingredients}</p>
      <h3 className="text-green-400 text-center">Instructions:</h3>
      <p className="text-green-400 text-center">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;