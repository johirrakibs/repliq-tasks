import { DashBoard } from "./DashBoard/DashBoard";
import { ProductBoard } from "./productBoard/ProductBoard";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <DashBoard className="md:order-2" />

          <div className="border-2 border-gray-300 md:order-1">
            <ProductBoard />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
