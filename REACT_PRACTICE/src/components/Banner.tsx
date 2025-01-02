import '../styles/components/Banner.css';
import { Button } from 'react-bootstrap';

function Banner() {
  return (
    <div id="banner">
      <div className="text">
        <h2 className="slideinleft">Shopping and Department Store.</h2>

        <p className="slideinleft">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>

        <Button
          variant="primary"
          style={{
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          Learn More
        </Button>
        <div className="overlay slideinright"></div>
      </div>
    </div>
  );
}

export default Banner;
