import '../../styles/components/cart/topcart.css';
import Cart from './Cart';
import Data from '../../data';



const Bestdeal = () => {
  
  return (
    <>
      <div className='best-deal-div'>
        <h3 className='category-title'>Todays Best Deals for you!</h3>
        <div className='bestdeal'>
          <Cart data={Data} />
        </div>
      </div>
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
