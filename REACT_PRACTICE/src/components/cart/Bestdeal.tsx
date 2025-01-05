import '../../styles/components/cart/topcart.css';
import Cart from './Cart';



const Bestdeal = () => {
  const data = [{
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
  
  return (
    <>
      <h3 className='category-title mg-t5'>Todays Best Deals for you!</h3>
      <section className='bestdeal'>
        <Cart data={data} />
      </section>
    </>
  );
}

export default Bestdeal;




// // interface basedeal {
// //   name: string;
// //   image: string;
// //   description?: string;
// //   rating?: number;
// //   price: string;
// // }
// // function Bestdeal() {
// //   const bestDeal: basedeal[] = [
// //     {
// //       name: 'HomePod mini',
// //       image: homemini,
// //       description: 'Table with air purifier, stained veneer/ black',
// //       rating: 4,
// //       price: `$99.99`,
// //     },
// //     {
// //       name: ' Instax Mini 9',
// //       image: mini9,
// //       description: 'Selfie mode and selfie mirror, Macro mode',
// //       rating: 4,
// //       price: `$99.00`,
// //     },

// //     {
// //       name: 'Basecamp',
// //       image: basecamp,
// //       description:
// //         'Basecamp is a project management and team communication software',
// //       rating: 4,
// //       price: `$99.00`,
// //     },
// //   ];
// //   return (
// //     <section>
// //       <h2
// //         style={{
// //           lineHeight: '40px',
// //           fontSize: '28px',
// //           fontWeight: '700',
// //           color: '#231f1e',
// //           margin: '180px 0 10px 40px',
// //         }}
// //       >
// //         Todays Best Deals for you!
// //       </h2>
// //       <Row
// //         style={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           gap: '40px',
// //           justifyContent: 'space-between',
// //           margin: '40px 20px 40px 20px',
// //           padding: '0 40px',
// //         }}
// //       >
// //         {bestDeal.map((cartgories: basedeal) => (
// //           <Col
// //             className="bestdeal"
// //             style={{
// //               backgroundColor: '#F1F1F1',
// //               height: '400px',
// //               maxWidth: '400px',
// //               minWidth: '200px',
// //               backgroundSize: 'cover',
// //               borderRadius: '10px',
// //             }}
// //             >
// //             <img src={cartgories.image} alt={cartgories.name} />
// //             <div style={{ display: 'flex', flexDirection: 'column' }}>
// //                 <HeartFill />
                
// //             </div>
// //             </Col>
            
// //         ))}
// //       </Row>
// //     </section>
// //   );
// // }

// // export default Bestdeal;
