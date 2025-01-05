import { Col } from 'react-bootstrap'
import { HeartFill, StarFill } from 'react-bootstrap-icons';

interface product {
    name: string;
    image: string;
    height: string;
    width: string;
    description?: string;
    price: string;
    rating?: number; 
}
interface Props {
  data: product[]
}
  

function Cart({ data } : Props) {
  return (
    <>

  {data.map((cartgories: product) => (
    <Col
      className="product-single-item">
      <div className='product-tab-thumbnail-wrap'>

        <img className='cart-image' src={cartgories.image} alt={cartgories.name} height={cartgories.height} width={cartgories.width} loading='lazy' />
        <div className='product-wishlist'><HeartFill /></div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', backgroundColor: 'white', gap: '5px', padding: '10px', borderRadius: '10px'
      }}>
        <div className='product-title-wrap'>
          <div className='product-title'>{cartgories.name}</div>
          <div className='product-price'>
            <span className='text-span'>$</span>
            {cartgories.price}</div>
        </div>
        <div className='product-color'>{cartgories.description ? cartgories.description : 'No details'}</div>
        <div className='product-title-wrap'>
          <div className='product-rating'>{Array.from({ length: cartgories.rating || 0 }, (_, i) => (
          <span><StarFill key={i} /></span>
        ))}</div>
          <div><button className='addtocartbutton'>Add to cart</button></div>
        </div>
      </div> 
 
      </Col>
      
  ))}
</>
  )
}

export default Cart
