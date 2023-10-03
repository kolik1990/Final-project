import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmptyCart from "./components/emptyCart/EmptyCart";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import Catalogue from "./pages/catalogue/Catalogue";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import NotFound from "./pages/notFound/NotFound";
import Product from "./pages/Product/Product";
import "./media.css";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("category")) || " "
  );
  const [productsOfCategory, setProductsOfCategory] = useState(
    JSON.parse(localStorage.getItem("productsOfCategory")) || products
  );
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [count, setCount] = useState(1);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);
  useEffect(() => {
    localStorage.setItem(
      "productsOfCategory",
      JSON.stringify(productsOfCategory)
    );
  }, [productsOfCategory]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const getCategory = (event) => {
    setCategory(event.target.text);
  };

  const getProductsCategory = () => {
    const filterProducts = products.filter(
      (product) => product.category === category
    );
    setProductsOfCategory(filterProducts);
    if (category === "All") {
      setProductsOfCategory(products);
    }
  };
  useEffect(() => {
    getProductsCategory();
  }, [category]);

  const searchText = (e) => setSearch(e.target.value);
  useEffect(() => {
    if (search.length > 0) {
      const resultFiler = productsOfCategory.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductsOfCategory(resultFiler);
    } else {
      setProductsOfCategory(getProductsCategory);
    }
  }, [search]);

  const addToCart = (product) => {
    const productInCart = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!productInCart) {
      setCart([...cart, { ...product, count: (product.count = 1) }]);
    } else {
      setCart([...cart]);
    }
  };
  const inc = (id) => {
    cart.map((product) =>
      product.id === id ? setCount(product.count++) : product
    );
  };
  const dec = (id) => {
    cart.map((product) =>
      product.id === id ? setCount(product.count--) : product
    );
    setCart(cart.filter((product) => product.count !== 0));
  };
  const currentPrice = (sum, current) => {
    return sum + current.price * current.count;
  };
  const total = cart.reduce(currentPrice, 0);

  return (
    <div className="App">
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route
          path="/catalogue/*"
          element={
            <Catalogue
              categories={categories}
              getCategory={getCategory}
              category={category}
              productsOfCategory={productsOfCategory}
              searchText={searchText}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="about" element={<AboutUs />} />
        <Route
          path={`/product/:id`}
          element={<Product addToCart={addToCart} category={category} />}
        />

        <Route
          path="/cart"
          element={
            <EmptyCart
              category={category}
              cart={cart}
              inc={inc}
              dec={dec}
              total={total}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
