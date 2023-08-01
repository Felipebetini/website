import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slideshow = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={true}
      showIndicators={false}
      showArrows={false}
      className='h-96 w-1/3 m-auto'
    >
      <div className='mx-28 carousel-item'>
        <img
          className='rounded-xl filtered '
          height={400}
          width={400}
          src='/images/advanced-forensic-certificate.jpg'
          alt='Avatar'
        />
      </div>
      <div className='mx-28 carousel-item'>
        <img
          className='rounded-xl filtered'
          height={400}
          width={400}
          src='/images/forensic-certificate.jpg'
          alt='Avatar'
        />
      </div>
      <div className='mx-28 carousel-item'>
        <img
          className='rounded-xl filtered'
          height={470}
          width={470}
          src='/images/certificado.jpg'
          alt='Avatar'
        />
      </div>
      <div className='mx-28 carousel-item'>
        <img
          className='rounded-xl filtered'
          height={400}
          width={400}
          src='/images/ux-certificate.jpg'
          alt='Avatar'
        />
      </div>
    </Carousel>
  );
};

export default Slideshow;
