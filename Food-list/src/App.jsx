import FoodList from "./coponents/FoodList";
import Container from "./coponents/Container";

function App() {
  const foods = ["Rice", "Dal", "Egg Curry", "Fish Curry","Chicken Curry"];
  return (
    <>
    <Container>
      <div style={{ margin: 10 }}>
        <div style={{ color: "red", textAlign: "center" }}>
          <h2>Foods Items</h2>
        </div>
        <div>
          {foods.map((item) => (
            <FoodList food={item} />
          ))}
          
        </div>
      </div>
    </Container>
    </>
  );
}

export default App;
