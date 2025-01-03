import '../styles/components/Banner.css';
import { Button } from 'react-bootstrap';
import SentenceDisplay from './SentenceDisplay';
import Carousel from './Carousel';
// Images for the carousel
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from '../assets';
  
const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
];

function Banner() {
  return (
    <div>
      <div id="banner">
        <div className="text">
          <h2 className="slideinleft">Shopping and Department Store</h2>

          <p className="intro2 slideinleft">
            Explore our curated selection of products designed to fit your lifestyle and budget
          </p>

          <Button
            className="intro2 slideinleft"
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
      <div className="multi-text">
        <SentenceDisplay />
      </div>
    </div>

  );
};

export default Banner;
