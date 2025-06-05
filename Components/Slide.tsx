import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages: string[] = ["sunset.jpg", "wall.jpg", "ground.jpg"];

const Slider = () => {
  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "ease",
    indicators: true,
  };

  return (
    <div className="w-full h-[300px] sm:h-[460px] md:h-[620px] lg:h-[820px] relative">
      <Slide {...properties}>
        {slideImages.map((slide, index) => (
          <div className="each-slide-effect" key={slide}>
            <div className="slide-image">
              <Image
                src={`/${slide}`}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
