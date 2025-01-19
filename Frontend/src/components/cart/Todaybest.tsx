import { useEffect, useState, MouseEvent } from 'react';
import { Row } from 'react-bootstrap';
import MacroCart from './Macrocart';
import '../../styles/components/cart/topcart.css';
import Data from '../../data';



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
  // const [cartgories, setCartgories] = useState<string>('Fashion')
  // handle click event
  

  // // fetch data from backend
  // const getData = async () => {
  //   const response = await fetch(`https://fakestoreapi.com/products/category/${cartgories}`)
  //   const data = await response.json();
  //   return data;
  // }

 
  // const [data, setData] = useState<data[]>([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getData();
  //     setData(result);
  //   };
  //   fetchData();
  // }, [cartgories])
  const [selectedIndex, setSelectedIndex] = useState(-1);
    


  return (
    <>
      <div>
      <h2
        style={{
          lineHeight: '40px',
          fontSize: '28px',
          fontWeight: '800',
          color: '#231f1e',
          margin: '180px 0 50px 40px',
        }}
      >
        Todays Best Deals for you!
      </h2>
        {botton.map((botton, index) => (
          <button className={selectedIndex === index ? 'normTodaybutton active': 'normTodaybutton' }
            key={index} value={botton} onClick={ (e: MouseEvent<HTMLButtonElement>) => {
              // setCartgories((e.target as HTMLButtonElement).value)
              setSelectedIndex(index)
            }}>{botton}</button>
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
       <MacroCart data={Data} />
      </Row>
    </section>
    </>
  )
}

export default Todaybest

