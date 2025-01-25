import  Product  from '../models/ProductSchema.js';
class ProductsController {

    static async getRandomProducts(req, res) {
        try {
          const productList = await Product.aggregate([{ $sample: { size: 10 } }]); 
      
          if (!productList || productList.length === 0) { 
            return res.status(404).json({ message: 'No products found' });
          }
      
          return res.status(200).json(productList); 
      
        } catch (error) {
          console.error('Error fetching random products:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }

    static async getProductbyCategory(req, res) {
        if (req.method == 'GET') {
            const value = req.query.category;

            const productList = await Product.find({ category: value });
            if (!productList) {
                return res.status(404).json({ message: 'No products found' });
            }
            return res.status(200).json({ productList });
        }
        

    }

    static async getProductsbyId(req, res) {
        const value = req.body.id

        const product = new Product()
        const productList = await product.find({ _id: { $in: value } });
        if (!productList) {
           return res.status(404).json({ message: 'No products found' });
        }
        return res.status(200).json({ message: productList });

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
