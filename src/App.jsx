import { DashBoard } from "./DashBoard/DashBoard"
import { ProductBoard } from "./productBoard/ProductBoard"


function App() {

  return (
    <>
  <div className="grid grid-cols-2">
  <DashBoard />
  <ProductBoard />
  </div>
     </>
  )
}

export default App
