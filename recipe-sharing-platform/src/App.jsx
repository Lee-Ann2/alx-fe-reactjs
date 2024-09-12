import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecipeDetail from "./components/RecipeDetail";
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
          <Route path="/details/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;