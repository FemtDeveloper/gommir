import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

const slideImages: string[] = ["sunset.jpg", "wall.jpg", "ground.jpg"];

const Slider = () => {
  return (
    <div>
      <Slide autoplay duration={3000}>
        {slideImages.map((slide) => (
          <div className="each-slide-effect slide-image" key={slide}>
            <Image src={`/${slide}`} alt="Image 1" fill />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
