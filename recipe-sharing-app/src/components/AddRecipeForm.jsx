import { useState } from 'react';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };
  const handleDelete = (event) => {
    deleteRecipe(recipe.id)
    navigate('/');
  };
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const handleEdit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={{handleEdit}}>Edit</button>
    </form>
  );
};

export default AddRecipeForm;