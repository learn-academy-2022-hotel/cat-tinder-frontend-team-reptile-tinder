
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://live.staticflickr.com/1233/530562626_65910f75d2_b.jpg',
    altText: '',
    caption: 'Steve',
    key: 1,
  },
  {
    src: 'https://live.staticflickr.com/4130/5071527329_9bb33a4af5_b.jpg',
    altText: '',
    caption: 'Bubba',
    key: 2,
  },
  {
    src: 'https://live.staticflickr.com/65535/48824198611_bd6cd4765c_b.jpg',
    altText: '',
    caption: 'Sandy',
    key: 3,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{height: "400px", width: "550px", borderRadius: "20px"}} src={item.src} alt={item.altText} />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="home-flex">
      <Carousel
        className='carousel'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      <div className="text-flex">
        <h1>Cold-blooded, but not cold-hearted.</h1>
        <h3>The #1 site to find lonely reptiles near you. Join today!</h3>
      </div>
  </div>
  );
}

export default Home;