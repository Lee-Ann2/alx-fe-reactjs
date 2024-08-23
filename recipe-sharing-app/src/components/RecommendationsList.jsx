import { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationList = () => {
  const { favorites, recommendations, generateRecommendations } =
    useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <div>
      <h1>Hello world</h1>
      <h2>Recommendations!!</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>Recommendations not found try again later</p>
      )}
    </div>
  );
};

export default RecommendationList;