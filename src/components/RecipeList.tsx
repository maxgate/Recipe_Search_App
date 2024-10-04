interface RecipeListProps {
    recipes: Recipe[];
  }
  
  const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  };
  