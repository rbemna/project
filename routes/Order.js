const express =require ("express")
const router= express.Router()
const {isAuth, adminAuth, providerAuth} = require("../middelware/Auth")
const {orderValidator, validation} = require("../middelware/orderValidator")
const {addOrderItems, getOrders, getProviderOrders, getMyOrders, deleteOrder, updateOrderStatus} =require("../controllers/orderController")

router.post("/",orderValidator(),validation,isAuth,addOrderItems);
router.get("/ordres",isAuth,adminAuth,getOrders)
router.get("/myorders",isAuth,getMyOrders)
router.get("/providerorders",isAuth,providerAuth,getProviderOrders)
// router.get("/:id",isAuth,getOrderById)
router.delete("/:id",isAuth,deleteOrder);
router.put("/:id", isAuth, updateOrderStatus);




module.exports=router