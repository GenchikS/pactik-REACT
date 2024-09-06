import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetails from "./pages/productdeteils";
import NotFound from "./pages/notfound";
import css from "./pr5.module.css";

import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};



export default function Pr5(){
  return (
    <div className={css.container}>
      <header className={css.header}>
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </p>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
