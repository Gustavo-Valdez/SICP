//Logo
import LogoSICPC from "./assets/Logo_SICPC.svg";

//Social media icons
import { SiTwitter, SiLinkedin } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  const correoContacto = "contacto.sicpc@gmail.com";
  const telefonoContacto = "tel:(81) 1325 4100";

  return (
    <div className=" ">
      <div className="h-8 w-full bg-blue-600  text-white justify-end md:pr-5  md:flex hidden">
        <div className="md:flex md:items-center md:justify-around md:w-2/5 md:text-sm w-full text-xs  flex">
          <span>
            Contacto: <Link href={""}>{correoContacto}</Link>{" "}
          </span>
          <span>
            {" "}
            Llamenos: <Link href={telefonoContacto}>(81) 1325 4100</Link>
          </span>
          <span>
          <Link href={"https://twitter.com/SicpcC"} className="p-3">
                <SiTwitter className="text-xl" />
              </Link>
          </span>
          <span>
          <Link href={"https://www.linkedin.com/in/sicpc-consultores-a96a3318b/"} className="p-3">
                <SiLinkedin className="text-xl" />
              </Link>
          </span>
        </div>
      </div>

      {/* Responsive Navbar */}
      <ResponsiveMenu />

      {/* Navbar */}
      <div className="md:w-full md:flex center md:justify-center md:items-center md:font-display border-2 md:sticky  md:z-50 hidden">
        <div className="">
        <Image
          src={LogoSICPC}
          alt={"Logo Servicios Integrales y Consultoría en Protección Civil"}
          width={80}
          height={80}
          blurDataURL="data:..."
          placeholder="blur"
          unoptimized
        />
        </div>
       
        <h1 className="text-base ml-9 font-bold  md:flex">
          Servicios Integrales y Consultoría en Protección Civil.
        </h1>
      </div>

      {/* Nav links */}
      <div className="p-4 w-full drop-shadow-xl bg-white flex justify-center md:sticky md:z-50">
        <div className="md:flex md:h-full md:align-middle  md:content-center  flex justify-around w-1/2 hidden">
          <Link href='/' className="text-sky-400 ">
            Inicio
          </Link>
          <Link href="/about" className="text-blue md:text-blue-400 ">
            Acerca de Nosotros
          </Link>
          <Link href="/services" className="text-blue">
            Servicios
          </Link>
          <Link href="/contact" className="text-blue">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
