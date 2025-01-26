import { Col } from 'react-bootstrap';
import StarRating from './StarRating';
import { HeartFill } from 'react-bootstrap-icons';
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { DbProducts } from '../../Enums';



function MacroCart({ data }: { data: DbProducts[] }) {

  const product = useContext(ProductContext)

  return (
    <>
      { (!data) ? <div> No products found </div>:
      
        data.map((item: DbProducts) => (
        <Col xs={2} className="product-single-item m-0 mb-3" key={item._id}>
          <div className='product-tab-thumbnail-wrap'>

            <img className='cart-image' src={item.image} alt={item.name} height='200px' width='200px' loading='lazy' />
            <div className='product-wishlist'>
              <HeartFill />
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            gap: '5px',
            padding: '10px',
          }}>

            <div className='product-title-wrap'>
              <div className='product-title'>
                {item.name}
              </div>
              <div className='product-price'>
                <span className='text-span'>$</span>
                {item.price}
              </div>
            </div>
            <div className='product-color'>
              {
                item.description ? item.description : 'No description.'
              }
            </div>
            <div className='product-title-wrap'>
              <StarRating rating={ item.rating || 0} color="gold" />
              <div><button className='add-to-cart-button' onClick={() => product.addOneProduct(item._id)}>Add to cart</button></div>
            </div>
          </div>
        </Col>
      ))}
    </>
  )
}

export default MacroCart;
