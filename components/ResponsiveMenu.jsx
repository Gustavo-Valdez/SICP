import React, { useState, createRef } from "react";
import { IoIosKeypad, IoIosClose, IoIosCall } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

//Assets
import LogoSICPC from "./assets/Logo_SICPC.svg";

const ResponsiveMenu = () => {
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => setisOpen((isOpen) => !isOpen);

  return (
    <nav className="z-20 flex justify-between sticky md:hidden bg-blue-600 ">
      <div className=" ml-4">
        <Link href={"/"}>
          <Image
            src={LogoSICPC}
            alt={"Logo Servicios Integrales y Consultoría en Protección Civil"}
            width={80}
            height={80}
            blurDataURL="data:..."
            placeholder="blur"
            unoptimized
          />
        </Link>
      </div>
      <button
        onClick={toogle}
        className="p-2 align-middle bg-white rounded-full h-16 w-16 m-3"
      >
        <IoIosKeypad className=" text-3xl rounded-3xl text-center mt-1 ml-2 "></IoIosKeypad>
      </button>

      {/* Overlay for responsive menu */}
      <div
        onClick={toogle}
        className={`fixed top-0  h-full bg-black-rgba z-11 w-full 
       ${
         isOpen === true
           ? "-translate-x-0 transform transition duration-500 ease-in-out w-full"
           : "translate-x-full transform transition duration-500 ease-in-out  w-full"
       }`}
      ></div>

      <aside
        className={`
    z-20
    fixed
    top-0 
    right-0 
    w-4/5
    h-screen 
    translate-x-full
    bg-slate-100
    flex
    flex-col
    overflow-hidden
    
    ${
      isOpen === true
        ? "translate-x-0 transform transition duration-500 ease-in-out "
        : "translate-x-full transform transition duration-500 ease-in-out  "
    }
    `}
      >
        <button
          onClick={toogle}
          className="flex justify-center items-center p-4 self-end"
        >
          <IoIosClose className=" text-6xl "></IoIosClose>
        </button>
        <div className=" flex flex-col pl-8 mt-8 space-y-8 justify-center h-full text-2xl">
          <h1 className="text-2xl  font-bold ">
            Servicios Integrales y Consultoría en Protección Civil.
          </h1>
          <Link href="/" className="text-sky-400 ">
            <a
              onClick={toogle}
              className="font-semibold hover:text-cyan-500 p-4 font-display"
            >
              Inicio
            </a>
          </Link>
          <Link href="/about" className="text-blue md:text-blue-400 ">
            <a
              onClick={toogle}
              className="font-semibold hover:text-cyan-500 p-4 font-display"
            >
              Acerca de Nosotros
            </a>
          </Link>
          <Link href="/services" className="text-blue">
            <a
              onClick={toogle}
              className="font-semibold hover:text-cyan-500 p-4 font-display"
            >
              Servicios
            </a>
          </Link>
          <Link href="/contact" className="text-blue">
            <a
              onClick={toogle}
              className="font-semibold hover:text-cyan-500 p-4 font-display"
            >
              Contacto
            </a>
          </Link>
          <Link href={"tel:(81) 1325 4100"} className="m-0 pl-0">
            <a className="p-3 rounded-3xl flex font-semibold w-full justify-center bg-lime-300 ">
              {" "}
              <IoIosCall className="text-lg ml-4" /> Llamanos
            </a>
          </Link>
        </div>
      </aside>
    </nav>
  );
};

export default ResponsiveMenu;
