import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    // Find recipe by ID
    const found = data.find((r) => r.id === parseInt(id));
    if (found) {
      setRecipe(found);
      // Example mock ingredients & instructions
      setIngredients(["Ingredient 1", "Ingredient 2", "Ingredient 3"]);
      setInstructions(["Step 1", "Step 2", "Step 3"]);
    }
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Recipe not found!</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-lg mx-auto mb-6 rounded-lg shadow-lg"
      />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
