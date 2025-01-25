import { useContext, useEffect, useState } from "react"
import ProductContext from "../context/ProductContext"
import '../styles/pages/CheckOutPage.css'
import { DbProducts, Product } from "../Enums"




function CheckOutPage() {
  // get cart products from context
  const { products } = useContext(ProductContext);

  // save db products in the state sbproducts
  const [dbproducts, setdbproducts] = useState<DbProducts[]>([]);

  
  const getProduct = async (products: Product[]) => {
    // get all the ids of the cart products and send them to the backend to get the products from the database
    const Ids = products.map((product) => (product.id ));
    const response = await fetch('http://localhost:3000/api/v1/product/getProductsbyId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Ids }),
    })
    const data = await response.json()

    // set the dbproducts state with the data from the backend
    setdbproducts(data.productList);
  }
  
  // get the products from the database on the first render
  useEffect(() => {
     getProduct(products);
  },);
  
  // calculate the subtotal of the products in the cart
  const calculateSubtotal = (dbProducts: DbProducts[], products: Product[]): number => {
    const subtotal = dbProducts.reduce((acc, dbProduct) => {
      const matchingProduct = products.find(product => product.id === dbProduct._id);
      if (matchingProduct) {
        return acc + (dbProduct.price * matchingProduct.quantity);
      } else {
        // Handle cases where a dbProduct doesn't have a corresponding product
        console.warn(`Skipping dbProduct with ID: ${dbProduct._id} due to missing product in 'products' array.`);
        return acc;
      }
    }, 0);
  
    return subtotal;
  };

  // get the subtotal, shipping and total
  const subtotal = calculateSubtotal(dbproducts, products);
  const shipping = 20;
  const total = shipping + subtotal;


  // handle the submit button
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    // prevent the default behavior of the form
    e.preventDefault();
    // send Total and email to the backend
    const response = await fetch('http://localhost:3000/api/v1/payment/initailized', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": "emmunigw@gmail.com", 
        "amount": total
      }), 
    })
    const data = await response.json()
    console.log(data);
    }


  return (
      <div className="checkoutpage">
          <h1>Checkout Page</h1>
          
          <section className="checkoutpage-product">
              <div className="checkoutpage-billing-details">
                  <span>
                      <h2>Billing details</h2>
                  </span>
                  <form>
                      <label>First Name</label>
                      <input type="text" placeholder="Name"  name="fname"required />
                      <label>Last Name</label>
                      <input type="text" placeholder="Name" name="lname" required />
                        <label>Email</label>
                      <input type="text" placeholder="Email" name="email" required />
                      <label>Phone</label>
                      <input type="text" placeholder="Phone" name="phone" required />
                        <label>Address</label>
                      <input type="text" placeholder="Address" name="address"required />
                        <label>City</label>
                      <input type="text" placeholder="City" name="city" required/>
                      <label>Country</label>
                      <input type="text" placeholder="Country" name="country" required/>
                        <label>Postal Code</label>
                      <input type="text" placeholder="Postal Code" name="postal" />
                      <h3>Additional Information</h3>
                      <hr />
                      <label>Order Notes</label>
                      <textarea placeholder="Notes" name="notes" />
                      <input type="submit" value="Place Order" /> 
                    </form>
                </div>
              <div className="checkoutpage-order-summary">
                  <span>
                      <h2>Order Summary</h2>
                    </span>
                    <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
            <tbody>
                                {dbproducts.map((dbproduct) => (
                                  
                                    <tr key={dbproduct._id}>
                                    <td>{dbproduct.name}</td>
                                    {
                                      products.map((product) => (
                                      product.id === dbproduct._id && <td>{`${product.quantity} x ${dbproduct.price}`}</td>
                                    ))
                                    }
                                    </tr>
                                ))}
                                <tr>
                                    <td>Subtotal</td>
                                      <td>{ subtotal}</td>
                                </tr>
                            <tr>
                                <td>Shipping</td>
                <td>{ shipping}</td>
                          </tr>
                            <tr>
                                <td>Total</td>
                <td>{total}</td>  
                            </tr>
                            </tbody>
                    
                    </table>
                    <h3>Payment</h3>
                        <form>
                            <input type="text" placeholder="Card Number" />
                            <input type="text" placeholder="MM/YY" />
                      <input type="text" placeholder="CVC" />
                      <input type="submit" value="Submit"  onClick={(e) => handleSubmit(e)}/> 
                      
                        </form>
                    </div>
            </section>
              
        </div>

)}

export default CheckOutPage;
