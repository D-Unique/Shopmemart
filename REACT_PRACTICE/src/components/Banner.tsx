import '../styles/components/Banner.css';
import { Button } from 'react-bootstrap';
import Carousel from './Carousel';
import image1 from '../assets/img/cart/carousel/image1.jpeg';
import image2 from '../assets/img/cart/carousel/image2.jpeg';
import image3 from '../assets/img/cart/carousel/image3.jpeg';

const images: string[] = [image1, image2, image3];

function Banner() {
  return (
    <div id="banner">
      <div className="text">
        <h2 className="slideinleft">Shopping and Department Store</h2>

        <p className="intro2 slideinleft">
          Explore our curated selection of products designed to fit your lifestyle and budget
        </p>

        <Button
          className="intro2 slideinleft"
          variant="primary"
          style={{
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          Start Shopping
        </Button>
      </div>
      <div className='image-div'>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Banner;
