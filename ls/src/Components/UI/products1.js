import React from "react";
import "./products.css";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { prodarray } from "./prodarray";

const Products1 = () => {
 const [searchTerm, setSearchTerm] = useState("");
const [searchPrice, setSearchPrice] = useState("");

const filteredprodarray = prodarray.filter((product) => {
  return (
    product.product_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchPrice === "" || product.product_price <= parseInt(searchPrice))
  );
});
  return (
  <div>
      <h1 className="producthead">Products Page</h1>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Search by Maximum Price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>
      <div className="products-container">
        {filteredprodarray.map((product) => (
          <div key={product.product_id} className="product-card">
            <img src={product.product_image} alt={product.product_title} />
            <div className="product-details">
              <h2>{product.product_title}</h2>
              <p>{product.product_description}</p>
              <span className="product-price">${product.product_price}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products1;

// const [searchTerm, setSearchTerm] = useState("");
// const [searchPrice, setSearchPrice] = useState("");

