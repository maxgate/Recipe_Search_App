interface RecipeDetailProps {
    recipe: Recipe;
  }
  
  const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
    return (
      <div className="p-6">
        <h2 className="text-3xl">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover" />
        <p className="mt-4">{recipe.description}</p>
        <h3 className="text-xl mt-4">Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="text-xl mt-4">Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    );
  };
  