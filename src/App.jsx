import { Route, Routes } from "react-router-dom"
import { TandoriHomepage } from "./pages/TandoriHomepage/TandoriHomepage"
import {ProductPage} from "./pages/Product/Product"
import {Explore} from "./pages/Explore"
import {Shipping} from "./pages/Shipping"
import {About} from "./pages/About"




function App() {


  return (
    <>
  
      <Routes>
        <Route path= "/Shop" element={<ProductPage/>}/>
        <Route path= "/Explore" element={<Explore/>}/>
        <Route path= "/" element={<TandoriHomepage/>}/>
        <Route path= "/Shipping" element={<Shipping/>}/>
        <Route path= "/About" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
