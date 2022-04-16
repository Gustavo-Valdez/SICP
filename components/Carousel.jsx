import React from "react";
import { Carousel as CarouselSlider} from "react-responsive-carousel";
import Image from 'next/image'
//photos
import Img1 from "./assets/slider/planning.jpg";
import Img2 from "./assets/slider/business.jpg";
import Img3 from "./assets/slider/teamwork.jpg";
import Img4 from "./assets/slider/working_on_table.jpg";
const Carousel = () => (
  <div className="md:h-2/6 md:w-full flex justify-center">
  <CarouselSlider
     autoPlay={true}
     infiniteLoop={true}
     showArrows={false}
     showThumbs={false}
     showStatus={false}
     swipeable={true}
     emulateTouch={true}
    className="cursor-grab ">
    <div>
      <Image alt="" src={Img1} height="1500px"  className="w-full object-cover object-center h-3/5  "/>
    </div>
    <div>
    <Image alt="" src={Img2} height="1500px" className="w-full object-cover object-center"/>
    </div>
    <div>
    <Image alt="" src={Img3} height="900px" className="w-full object-cover object-top"/>
    </div>
    <div>
    <Image alt="" src={Img4} height="1500px" className="w-full object-cover object-center"/>
    </div>
  </CarouselSlider>
  </div>

);

export default Carousel