import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(
{
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    rating: {type: Number, required: true},
    numRev: {type: Number, required: true},
},
{
    timestamps: true,
}
);


const Product = mongoose.model("Product", productSchema);

export default Product;