import { Col } from 'react-bootstrap'
import { HeartFill, StarFill } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import ProductContext from '../../context/ProductContext';

interface product {
    id: number;
    name: string;
    image: string;
    height: string;
    width: string;
    description?: string;
    price: number;
    rating?: number; 
}



interface Props {
  data: product[]
}
  
// interface Product {
//       id: number;
//       name: string;
//       price: number;
//       image: string;
//     }


function Cart({ data }: Props) {
  // when I connect to the db, I will use the _id to retrieve the product
  // const [productId, setProductId] = useState<string>('')
  // send db call to get product details
  // const product = {
  //   name: productName,
  //   price: productPrice,
  //   image: productImage
  // }
  // const [productImage, setProductImage] = useState<string>('')


  const product  = useContext(ProductContext)

  // const handleAddToCart = (categorie: product, index: number) => {

  //   const Product: Product = {
  //     id: index,
  //     name: categorie.name,
  //     price: categorie.price,
  //     image: categorie.image,
  //   }
  //   product.addOneproduct(Product)
  //   const total = product.getTotalProducts()
  //   alert(`${total} added to cart`)
  // }
  return (
    <>

  {data.map((cartgories: product) => (
    <Col className="product-single-item" key={cartgories.id}>
      <div className='product-tab-thumbnail-wrap'>

        <img className='cart-image' src={cartgories.image} alt={cartgories.name} height={cartgories.height} width={cartgories.width} loading='lazy' />
        <div className='product-wishlist'>
          <HeartFill />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        gap: '5px', padding: '10px',
        borderRadius: '10px'}}>
          
        <div className='product-title-wrap'>
          <div className='product-title'>
            {cartgories.name}
          </div>
          <div  className='product-price'>
            <span className='text-span'>$</span>
              {cartgories.price}
          </div>
        </div>
        <div className='product-color'>{cartgories.description ? cartgories.description : 'No details'}</div>
        <div className='product-title-wrap'>
          {/* <div className='product-rating'>{Array.from({ length: cartgories.rating || 0 }, (_, i) => (
          <span><StarFill key={i} /></span>
        ))}</div> */}
          <div><button className='addtocartbutton' onClick={()=> product.addOneProduct(cartgories.id)}>Add to cart</button></div>
        </div>
      </div> 
 
    </Col>
      
  ))}
</>
  )
}

export default Cart
