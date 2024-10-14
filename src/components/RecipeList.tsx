import RecipeCard from "./RecipeCard";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe?.id} recipe={recipe} />
      ))}
    </div>
  );
};

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  prepTime: number;
  image: string;
}

export default RecipeList;
