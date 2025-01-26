import '../../styles/components/cart/topcart.css';
import { Trash } from 'react-bootstrap-icons';
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { DbProducts } from '../../Enums';


interface Props {
  product: DbProducts | null;
}

function Minicart({ product }: Props) {
  const productContext = useContext(ProductContext);
  if (product === null) {
    return;
  } else {
    const Quantity = productContext.getProductQuantity(product._id);

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
          <p>${product.price * Quantity}</p>
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
                onClick={() => productContext.removeOneProduct(product._id)}
              >
                -
              </button>
              <span>{Quantity}</span>
              <button
                type="button"
                name="plus"
                className="minicart-button"
                onClick={() => {
                  productContext.addOneProduct(product._id)
                  console.log(productContext.products)
                 }}
              >
                +
              </button>
            </div>

            <button
              type="button"
              name="delete"
              className="minicart-trash"
            >
              <Trash onClick={() => {
                productContext.deleteProduct(product._id)
                console.log(product._id)
              }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Minicart;
