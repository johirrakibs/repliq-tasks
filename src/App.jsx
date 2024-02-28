import { DashBoard } from "./DashBoard/DashBoard"
import { ProductBoard } from "./productBoard/ProductBoard"


function App() {

  return (
    <>
  <div className="grid grid-cols-2">
  <DashBoard />

  <div className="border-2 border-cyan-600">
   <ProductBoard />
  </div>
 
  </div>
     </>
  )
}

export default App
