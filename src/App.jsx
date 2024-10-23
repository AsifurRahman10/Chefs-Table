import { Banner } from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";
import { Recipes } from "./Component/Recipes/Recipes";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      {/* header */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* our recipes */}
      <Recipes></Recipes>
    </div>
  );
}

export default App;
