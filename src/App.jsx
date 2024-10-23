import { Banner } from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      {/* header */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* our recipes */}
    </div>
  );
}

export default App;
