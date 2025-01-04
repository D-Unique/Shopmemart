import { useEffect, useState } from 'react';
import { HeartFill, StarFill} from 'react-bootstrap-icons';
import { Row, Col } from 'react-bootstrap';
import '../../styles/components/cart/topcart.css';

interface data {
  name: string;
  image: string;
  height: string;
  width: string;
  description?: string;
  price: string;
  rating?: number; 
}

const Todaybest = () => {
  const botton: string[] = [
    'Fashion',
    'Furniture',
    'Gadgets',
    'Beauty',
    'Medical',
    'Sports',
    'Toys',
    'Books'
  ]
  const [cartgories, setCartgories] = useState<string>('Fashion')
  // handle click event
  const handleClick = (e: any) => {
    setCartgories(e.target.value)
    setIsActive(true)
  }

  // // fetch data from backend
  // const getData = async () => {
  //   const response = await fetch(`https://fakestoreapi.com/products/category/${cartgories}`)
  //   const data = await response.json();
  //   return data;
  // }

  const data: data[] = [{
    name: 'MacBook',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    height: '200px',
    width: '200px',
    description: 'Fits 13-13.3 Inch MacBook Air/Pro',
    price: '15.99',
    rating: 4,
  },
    {
      name: 'Mens Slim Fit T-Shirts',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      height: '200px',
      width: '200px',
      description: 'Slim fit, perfect for casual wear',
      price: '22.99',
      rating: 5,
    },
    {
      name: 'Mens Cotton Jacket',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      height: '200px',
      width: '200px',
      description: 'Great for winter and summer',
      price: '55.99',
      rating: 4,
    },
    {
      name: 'Mens Casual Slim Fit',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      height: '200px',
      width: '200px',
      description: '',
      price: '15.99',
      rating: 4,
    },
    {
      name: 'John Hardy Women\'s Legends Naga Gold',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      height: '200px',
      width: '200px',
      description: 'From our Legends Collection',
      price: '695',
      rating: 4,
    }
  ]
  // const [data, setData] = useState<data[]>([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getData();
  //     setData(result);
  //   };
  //   fetchData();
  // }, [cartgories])
  const [isActive, setIsActive] = useState(false);
    


  return (
    <>
      <div>
      <h2
        style={{
          lineHeight: '40px',
          fontSize: '28px',
          fontWeight: '700',
          color: '#231f1e',
          margin: '180px 0 10px 40px',
        }}
      >
        Todays Best Deals for you!
      </h2>
        {botton.map((botton, index) => (
          <button className='normTodaybutton'
            key={index} value={botton} onClick={handleClick}>{botton}</button>
      ))}
      </div>
      <section>
    
      <Row
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', /* Create two columns of equal width */
            gridTemplateRows: 'repeat(2, 1fr)',
            gridGap: '20px',
          margin: '40px 20px 40px 20px',
          padding: '0 40px',
        }}
      >
        {data.map((cartgories: data) => (
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
      </Row>
    </section>
    </>
  )
}

export default Todaybest

