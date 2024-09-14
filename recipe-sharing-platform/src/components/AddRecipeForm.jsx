import data from "../data.json";
import { useState } from "react";

function AddRecipeForm() {
  const [recipes, setRecipes] = useState(data);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validate = {};
    if (!title) {
      validate.title = "This field is required";
    }

    if (!summary) {
      validate.summary = "This field is required";
    }

    if (!ingredients) {
      validate.ingredients = "This field is required";
    }

    if (!steps) {
      validate.steps = "This field is required";
    }
    setErrors(validate);

    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      ingredients,
      instructions,
    };
    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setSummary("");
    setIngredients("");
    setSteps("");
    console.log(newRecipe);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Recipe"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="text-red-600">{errors.title}</span>}
        <input
          type="text"
          name="summary"
          id="summary"
          placeholder="Enter Details"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        {errors.summary && (
          <span>{errors.summary}</span>
        )}
        <textarea
          name="ingredients"
          id="ingredients"
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && (
          <span>{errors.ingredients}</span>
        )}
        <textarea
          name="instructions"
          id="instructions"
          placeholder="Enter Instructions"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <span>{errors.steps}</span>}
        <button
          type="submit"
          className="bg-pink-300 rounded hover:bg-pink-500 text-white font-light"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;