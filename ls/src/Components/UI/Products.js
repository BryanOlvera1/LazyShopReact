import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './products.css';
import Footer from "../Footer/Footer";


const Products = () => {
  const [Products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const filteredProducts = Products.filter((product) => {
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
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="product-item">
            
            <img src={product.product_image} alt={product.product_title} />
            <div className="product-details">
              <h2>{product.product_title}</h2>
              <p>{product.product_description}</p>
              <span className="product-price">${product.product_price}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};
export default Products;