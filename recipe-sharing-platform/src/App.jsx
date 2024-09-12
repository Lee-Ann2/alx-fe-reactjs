import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecommendationsList from "./components/RecommendationsList";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <> 
                <HomePage />
                <RecipeList />
                <AddRecipeForm />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/details/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;