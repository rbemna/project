const express= require("express")
const router = express.Router();
const {dataProductValidator, validation} = require("../middelware/productValidator")
const {isAuth, providerAuth} =require ("../middelware/Auth")
const {addProduct, getMyProducts,getAllProducts, updateProduct, deleteProduct, getProductById}= require ("../controllers/productController")


router.post("/add", dataProductValidator(), validation,isAuth,providerAuth,addProduct );
router.get("/allProducts",getAllProducts)
router.get("/myProducts",isAuth, providerAuth,getMyProducts)
router.get("/:id",getProductById)
router.put("/editproduct/:id", dataProductValidator(), validation,isAuth,providerAuth,updateProduct );
router.delete("/delete/:id",isAuth,deleteProduct)




module.exports =router;