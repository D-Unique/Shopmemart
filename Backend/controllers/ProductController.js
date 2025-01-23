import  Product  from '../models/ProductSchema.js';
class ProductsController {
    static async getProduct(req, res) {
        const value  = req.query.category
        console.log(value)
        if (!value) {
            res.json({ message: 'All products' })
        }
        if (value) {
            res.json({ message: `${value}` });
        }

    }

    static async createProduct(req, res) {
        const p = req.body
        try {
            const productObj = {
                name: p.pname,
                price: p.pprice,
                description: p.pdesc,
                image: p.pimage,
                countInStock: p.pcountInStock,
                rating: p.rating,
                category: p.pcategory
            };
            const newProduct = new Product(productObj);
            await newProduct.save();
            return res.status(201).json({ message: 'Product created successfully' });
        } catch (error) {
            return res.status(500).json({
                message: `Server error: ${error.message}`
            });
        }
    }
}

export default ProductsController
