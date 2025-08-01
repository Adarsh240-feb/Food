const FoodDetailsPage = ({ allFoods, addToCart }) => {
  // ...find food by name...
  return (
    <button onClick={() => addToCart(food)}>Add to Cart</button>
  );
};

export default FoodDetailsPage;