interface data {
    id: number;
    name: string;
    image: string;
    height: string;
    width: string;
    description?: string;
    price: number;
    rating?: number; 
  }


const Data: data[] = [{
    id: 1,
    name: 'MacBook',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    height: '200px',
    width: '200px',
    description: 'Fits 13-13.3 Inch MacBook Air/Pro',
    price: 15.99,
    rating: 4,
  },
    {
      id: 2,
      name: 'Mens Slim Fit T-Shirts',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      height: '200px',
      width: '200px',
      description: 'Slim fit, perfect for casual wear',
      price: 22.99,
      rating: 5,
    },
    {
      id: 3,
      name: 'Mens Cotton Jacket',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      height: '200px',
      width: '200px',
      description: 'Great for winter and summer',
      price: 55.99,
      rating: 4,
    },
    {
      id:4,
      name: 'Mens Casual Slim Fit',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      height: '200px',
      width: '200px',
      description: '',
      price: 15.99,
      rating: 4,
    },
    {
      id:5,
      name: 'John Hardy Women\'s Legends Naga Gold',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      height: '200px',
      width: '200px',
      description: 'From our Legends Collection',
      price: 695,
      rating: 4,
    }
  ]

export default Data
