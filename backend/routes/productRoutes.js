const express = require("express");
const router = express.Router();
const {createProduct, viewProducts, deleteProducts, updateProduct, viewSingleProducts} = require("../controllers/productController");
router.post("/products", createProduct);
router.get("/products", viewProducts);
router.get("/products/:id", viewSingleProducts);
router.delete("/products/:id", deleteProducts);
router.put("/products/:id", updateProduct);
module.exports=router;