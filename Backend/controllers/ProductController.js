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
}

export default ProductsController
