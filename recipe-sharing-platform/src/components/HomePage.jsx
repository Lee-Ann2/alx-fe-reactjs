import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 m-10 bg-pink-200 rounded sm:items-center md:items-center">
      {recipes?.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <div
            key={recipe.id}
          >
            <img
              src={recipe.image}
              className="sm:bg-center"
            />
            <h1 className="font-bold text-green-700 sm:text-center">{recipe.title}</h1>
            <p className="font-light text-green-500 sm:text-center">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;