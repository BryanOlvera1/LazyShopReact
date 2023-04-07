const express = require('express');
const cors = require('cors');
const mysql= require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'products'
  ,});

    db.connect(err =>{
    if(err){
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});

// This route retrieves all products from the database
app.get("/products", (req, res) => {
  // SQL query to select all products from the products table
  const q = "SELECT * FROM products";
  // Execute the query using the db object
  db.query(q, (err, data) => {
    // If there's an error, log it and return a JSON response with the error message
    if (err) {
      console.log(err);
      return res.json(err);
    }
    // If there's no error, return a JSON response with the data retrieved from the database
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  // SQL query to insert a new product into the products table
  const q = "INSERT INTO products(`product_title`, `product_description`, `product_price`, `product_image`) VALUES (?)";
  
  // An array of values to be inserted into the query
  const values = [
    req.body.product_title,
    req.body.product_description,
    req.body.product_price,
    req.body.product_image,
  ];
  
  // Execute the query using the db object, passing in the values as an array
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    // If there's no error, return a JSON response with the data retrieved from the database
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log('Server is up on port 8800.')
})