import { fashion, books, furniture, beauty, gadgets, medicalSupplies, toys, sports } from '../../assets';
import '../../styles/components/cart/topcart.css';

interface topcart {
  name: string;
  image: string;
}

function Topcartegories(): JSX.Element {
  const topCategories: topcart[] = [
    {
      name: 'Fashion',
      image: fashion,
    },
    {
      name: 'Furniture',
      image: furniture,
    },
    {
      name: 'Gadgets',
      image: gadgets,
    },
    {
      name: 'Beauty',
      image: beauty,
    },
    {
      name: 'Medical',
      image: medicalSupplies,
    },
    {
      name: 'Sports',
      image: sports,
    },
    {
      name: 'Books',
      image: books,
    },
    {
      name: 'Toys',
      image: toys,
    },
  ];
  return (
    <section>
      <div className='category-head'>
        <div className='category-title'>
          Shop Our Top Categories
        </div>
        <div className='category-grid topcart'>
          {topCategories.map((category: topcart) => (
            <div
              key={category.name} // Ensure you have a unique key
              style={{
                position: 'relative',
                height: '350px',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <h3
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  fontSize: '25px',
                  fontWeight: '800',
                  margin: '0',
                  textAlign: 'center',
                }}
              >
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Topcartegories;

/*
Fashion
Furniture
Gadgets
Beauty
Medical Supplies
Sports 
Toys 
Books
*/