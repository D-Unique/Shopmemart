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
  product: Product | null;
}

function Minicart({ product }: Props) {
  const productContext = useContext(ProductContext);
  if (product === null) {
    return;
  } else {
    const Quantity = productContext.getProductQuantity(product.id);

    return (
      <div
        style={{
          height: '130px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          flexDirection: 'row',
          marginBottom: '10px',
        }}
      >
        <img
          className="m-auto p-2"
          src={product.image}
          alt={product.name}
          width={100}
          height={80}
        />

        <div
          className="container-fluid d-flex mt-1 mb-1"
          style={{ flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <h5 style={{ textAlign: 'center' }}>{product.name}</h5>
          <p>${product.price}</p>
          <div
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
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
            </div>

            <button
              type="button"
              name="delete"
              className="minicart-trash"
              onClick={() => productContext.deleteProduct(product.id)}
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Minicart;
