import '../../styles/components/cart/topcart.css';
import { Trash } from 'react-bootstrap-icons';
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface Props {
  product: Product;
}

function Minicart({ product }: Props) {
  const productContext = useContext(ProductContext);
  if (product === null) {
    return <h3>No Product in Cart</h3>
  }
  else {
    const Quantity = productContext.getProductQuantity(product.id);

    return (
      <div className="container" style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <div className="row mt-3 p-1">
          <div className='col-sm-5 bg-secondary'>
            <div className="minicart-image">
              <img src={product.image} alt={product.name} width={150} height={200} />
            </div>
          </div>

          <div className="col-sm-7" style={{ backgroundColor: '#6393C1' }}>
            <div className="minicart-details">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <span className="">
                <button
                  type="button"
                  name="minus"
                  className="minicart-button"
                  onClick={() => productContext.removeOneProduct(product.id)}
                >
                  -
                </button>
                <span>{Quantity}</span>
                <button
                  type="button"
                  name="plus"
                  className="minicart-button"
                  onClick={() => productContext.addOneProduct(product.id)}
                >
                  +
                </button>
                <button type="button" name="delete" className="minicart-trash" onClick={() => productContext.deleteProduct(product.id)}>
                  <Trash />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

  );
  }
}


export default Minicart;
