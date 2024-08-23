import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from "./components/FavoritesList";
import RecommendationList from "./components/RecommendationsList";


function App() {
  return (
    <Router>
      <div>
        <h1>Recipes</h1>
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;