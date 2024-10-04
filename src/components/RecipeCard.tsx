interface RecipeCardProps {
    recipe: Recipe;
  }
  
  const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
      <div className="border rounded p-4 shadow-lg">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
        <h3 className="text-xl mt-2">{recipe.title}</h3>
        <p>Preparation time: {recipe.prepTime} mins</p>
      </div>
    );
  };
  