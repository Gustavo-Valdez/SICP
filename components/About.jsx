import react from "react";
import Img1 from "./assets/slider/planning.jpg";
import Img2 from "./assets/slider/business.jpg";
import Img3 from "./assets/slider/teamwork.jpg";
import Img4 from "./assets/slider/working_on_table.jpg";

import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
const About = () => {
  return (
    <div id="about">
      <div className="flex w-full  drop-shadow-lg p-0 font-sans  md:flex-row flex-col md:w-full">
        <div className="md:w-1/2 p-10 h-full  w-full">
          <h2 className="text-slate-700 font-semibold text-3xl md:w-full">
            Acerca de nosotros
          </h2>
          <p className="flex  justify-center items-center mt-10 font-display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            eleifend sapien efficitur massa bibendum facilisis. Nulla ipsum
            ipsum, ullamcorper id tempus in, vulputate vitae elit. Curabitur at
            congue justo. Fusce aliquet lorem neque, eget lobortis libero
            sagittis sit amet. Curabitur euismod tristique ipsum porta euismod
          </p>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
          >
            <Link href='/contact'>
            Contactanos
            </Link>
          </button>
        </div>

        <div className="w-full md:w-1/2 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-0 grid-flow-row h-full md:h-full">
            <div>
              <Image src={Img1} unoptimized objectFit="contain" />
            </div>
            <div>
              <Image src={Img2} unoptimized objectFit="contain" />
            </div>
            <div>
              <Image src={Img3} unoptimized objectFit="contain" />
            </div>
            <div>
              <Image src={Img4} unoptimized objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
