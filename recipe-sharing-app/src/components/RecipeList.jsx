import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect } from "react";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const {
    searchTerm,
    filterRecipes,
    filteredRecipes,
    favorites,
    addFavorite,
    removeFavorite,
  } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const toggleButton = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  if (searchTerm === "") {
    return (
      <div>
        <SearchBar />
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/details/${recipe.id}`}>More Details</Link>
            <button
              onClick={() => toggleButton(recipe.id)}
            >
              {favorites.includes(recipe.id)
                ? "Remove from Favorites"
                : "Favorites"}
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <SearchBar />
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/details/${recipe.id}`}>More Details</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default RecipeList;