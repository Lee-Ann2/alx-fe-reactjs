import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

updateRecipe: (updatedRecipe) => set(state => ({
  recipes: state.recipes.map(recipe =>
    recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
  )
}));


deleteRecipe: (id) => set(state => ({
  recipes: state.recipes.filter(recipe => recipe.id != id)
}));


export { useRecipeStore }