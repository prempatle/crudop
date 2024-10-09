const Product = require("../models/product");

exports.createProduct=async(req, res)=>{
    try{
        const pro = new Product(req.body);
        await pro.save();
        res.status(201).json("Product added!")

    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
    exports.viewProducts = async(req, res)=>{
        try{
            const product = await Product.find();
            res.status(200).json(product);
        }
        catch(err){
            res.status(400).json({error:err.message})
        }
    }

    exports.viewSingleProducts = async(req, res)=>{
        try{
            const product = await Product.findById(req.params.id);
            if(!product) return res.status(404).json({error:"Product was not found!"})
            res.status(200).json(product);
        }
        catch(err){
            res.status(400).json({error:err.message})
        }
    }

    exports.deleteProducts = async(req, res)=>{
        try{
            const productid = req.params.id;
            const product = await Product.findByIdAndDelete(productid);
            if(!product) return res.status(404).json({error:"Product was not found!"})
            res.status(200).json({message:"Data deleted successfully"});
        }
        catch(err){
            res.status(400).json({error:err.message})
        }
    }

    exports.updateProduct = async(req, res)=>{
        try{
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new:true,
                runValidator:true
            });
            if(!product) return res.status(404).json({error:"Product not found!"});
            res.status(200).json(product);
        }
        catch(err){
            res.status(404).json({error:err.message});
        }
    }