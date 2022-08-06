import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register } from "./pages/";
import {
  AllProducts,
  AddProduct,
  Inventory,
  SharedLayout,
} from "./pages/dashboard/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AllProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="Inventory" element={<Inventory />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
