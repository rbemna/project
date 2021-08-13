const Order =require("../models/OrderModel")

exports.addOrderItems =async (req, res) => {
  try{
  
    const {
      orderItems,
      shippingAddress,
      status,totalPrice
    } = req.body
 
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        status,
        totalPrice
      })
      const createdOrder = await order.save()
      res.send({ message: "order ajouté avec succée ", order: createdOrder });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }

  exports.getOrders = async (req, res) => {
    try {
      const orders = await Order.find();
      res.send(orders);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }


  exports.getMyOrders = async (req, res) => {
    try {

      console.log(req.user._id)
      const orders = await Order.find({user:req.user._id});
      console.log("ordersback", orders)
      res.send(orders);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  exports.getProviderOrders = async (req, res) => {
    try {
      const orders = await Order.find({"orderItems.provider":req.user._id});
      res.send(orders);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  exports.getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (order) {
      res.json(order)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  }

