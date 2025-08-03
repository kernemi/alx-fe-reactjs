import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleClick = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteRecipeButton;
