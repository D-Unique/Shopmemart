import { useContext, useEffect, useState } from "react"
import ProductContext from "../context/ProductContext"
import '../styles/pages/CheckOutPage.css'
import { DbProducts, Product } from "../Enums"



function CheckOutPage() {
  const { products } = useContext(ProductContext)

  
//   const [dbproducts, setdbproducts] = useState<DbProducts[]>([]);
  const [ids, setids] = useState();
  
  const getProduct = async (products: Product[]) => {
    const Ids = products.map((product) => (product.id ));
    const response = await fetch('http://localhost:3000/api/v1/product/getProductsbyId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Ids }),
    })
      const data = await response.json()
     

    return data;

    }
  useEffect(() => {
    async function getProducts() {
     const fatchedp = await getProduct(products);
      setids(fatchedp);
    }
    getProducts();
  }, );

console.log(ids)
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
              {/* {getProduct(products)} */}
                                {products.map((product) => (
                                  
                                    <tr key={product.id}>
                                        <td>Product</td>
                                        <td>{`${product.quantity} x ${20}`}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Subtotal</td>
                              <td>200</td>
                          </tr>
                            <tr>
                                <td>Shipping</td>
                              <td>20</td>
                          </tr>
                            <tr>
                                <td>Total</td>
                              <td>220</td>  
                            </tr>
                            </tbody>
                    
                    </table>
                    <h3>Payment</h3>
                        <form>
                            <input type="text" placeholder="Card Number" />
                            <input type="text" placeholder="MM/YY" />
                      <input type="text" placeholder="CVC" />
                      <input type="submit" value="Submit" /> 
                      
                        </form>
                    </div>
            </section>
              
        </div>

)}

export default CheckOutPage;
