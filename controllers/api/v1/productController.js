const Product = require('../../../models/product');


//Adding new product to the database

module.exports.create = async function (req, res) {
    console.log(req.body);

    try {

        const product = await Product.create({
            name: req.body.name,
            quantity:req.body.quantity
        });

        return res.status(200).json({
            success: true,
            body:product
        });

    } catch (err) {
        return res.status(500, {
            message: "Internal Server Error"
        });
    }
}


module.exports.getAllProducts = async function (req, res) {
    
    try {

        const allProducts = await Product.find({});

        return res.status(200).json({
            success: true,
            data: {
                product:allProducts
            }
        })
        
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.update = async function (req, res) {
    
    console.log(req.params.id);
    
    try {

        //finding product by id from existing products in db.
        let product = await Product.findById({ _id : req.params.id });

        //product is being updated here
        await Product.update(
            { _id: req.params.id },
            {
                // inc operator increments the quanity field
                $inc:{ quantity:req.params.number}
            }
        )

        

        //returning response to user

        return res.status(200).json({
            success: true,
            message: "Updated Successfully"
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.delete = async function (req, res) {
    
    try {
        //find product in database
        const product = await Product.findById({ _id: req.params.id });

        product.remove();

        //return JSON response to the user

        return res.status(200).json({
            success: true,
            message: "Product deleted Successfully"
        });
        
        
    } catch (err) {
        
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}