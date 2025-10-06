import EnsureAuth from "../middlewares/Auth.js";
import express from "express";
const Productrouter = express.Router();

//frontend -> router -> middleware -> controller -> model -> database -> response
Productrouter.get("/", EnsureAuth, (req, res) => {
    console.log(req.user);
    const products = [
        {
            id: 101,
            name: "iPhone 14 Pro",
            price: 120000,
            rating: 4.5,
            description: "The latest iPhone model with advanced features.",
        },
        {
            id: 102,
            name: "Samsung Galaxy S23",
            price: 90000,
            rating: 4.3,
            description: "The latest Samsung model with advanced features.",
        }
    ];
    res.status(200).json({ success: true, data: products });
});


export default Productrouter;