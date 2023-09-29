import { NavLink, Route, Routes } from "react-router-dom";
import Brands from "../../components/brands/Brands";
import FilterProducts from "../filterProducts/FilterProducts";
import Search from "../../components/search/Search";
import "./catalogue.css";
function Catalogue({
  categories,
  getCategory,
  category,
  productsOfCategory,
  searchText,
  addToCart,
}) {
  return (
    <section className="catalogue">
      <div className="container">
        <Search searchText={searchText} />
        <Brands />
        <nav className="navCategories">
          <NavLink to="all" onClick={getCategory}>
            All
          </NavLink>
          {categories.map((category) => (
            <NavLink to={category} key={category} onClick={getCategory}>
              {category}
            </NavLink>
          ))}
        </nav>

        <Routes>
          <Route
            path={category}
            element={
              <FilterProducts
                productsOfCategory={productsOfCategory}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      </div>
    </section>
  );
}

export default Catalogue;
