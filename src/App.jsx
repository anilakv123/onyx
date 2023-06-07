import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Error from "./pages/Error"
import Layout from "./components/organisms/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
