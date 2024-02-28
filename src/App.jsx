import { DashBoard } from "./DashBoard/DashBoard";
import { ProductBoard } from "./productBoard/ProductBoard";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <DashBoard className="md:order-2" />

        <div className="border-2 border-gray-300 md:order-1">
          <ProductBoard />
        </div>
      </div>
    </>
  );
}

export default App;
