const Product = require("../models/ProductModel");

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.send({ message: "mes produits séléctionnés ", product: allProducts });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "oppppppppssssss",
        },
      ],
    });
  }
};

exports.getMyProducts = async (req, res) => {
  try {
    const { _id } = req.user;
    const allProducts = await Product.find({ provider: _id });
    console.log(allProducts);
    res.send({ message: "mes produits séléctionnés ", product: allProducts });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "erreeeeeeeuuuuuuurrrrrrr",
        },
      ],
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      provider: req.user.id,
      price: req.body.price,
      image: req.body.image,
    });

    await newProduct.save(newProduct);
    res.send({ message: "produit ajouté avec succée ", product: newProduct });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "ajout erroné",
        },
      ],
    });
  }
};
exports.getProductById = async (req, res) => {
  try {
    console.log("the id issssss",req.params.id)

    const product = await Product.findById(req.params.id)
    console.log(product)
  if (product) {
    res.send(product);
  } else {
    res.status(404).send("product not found");
  }
  } catch (error) {
    console.error(error.message);
      res.status(500).send('Server Error');
  }
  } 



exports.updateProduct = async (req, res) => {
  try {
      // console.log(req.body)
    const {
        name,
        price,
        description,
        provider,
        category,
        productImage,
      } = req.body
   

      const product = await Product.findById(req.params.id)
    
      if (product) {
        const { _id } = product;
        await Product.updateOne({ _id }, { $set: { ...req.body } });
    }
    
        const updatedProduct = await product.save()
        console.log(updatedProduct)
    res.send({ message: "produit updated avec succée ", product: updatedProduct });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "update erroné",
        },
      ],
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    const prod = await Product.findById(req.params.id);
    console.log(prod);
    await prod.remove();
    res.send({ message: "product deleted " });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "product not found",
        },
      ],
    });
  }
};
