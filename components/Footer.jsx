//Logo
import LogoSICPC from "./assets/Logo_SICPC.svg";

//Icons
import { SiTwitter, SiLinkedin } from "react-icons/si";
import { IoIosMail, IoIosCall } from "react-icons/io";

import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
const Footer = () => {
  const correoContacto = "mailto:contacto.sicpc@gmail.com";
  const telefonoContacto = "tel:(81) 1325 4100";
  return (
    <div>
      <div className=" w-full md:grid md:grid-cols-4  text-white center md:justify-center text-sm bg-neutral-900 md:p-10 font-display flex flex-col pl-8 pt-10">
        <div className="w-4/5 md:pl-4 md:pt-5 sm:h-auto  md:pr-5 ">
          <Image
            src={LogoSICPC}
            alt={"Logo Servicios Integrales y Consultoría en Protección Civil"}
            width={50}
            height={50}
            blurDataURL="data:..."
            placeholder="blur"
            unoptimized
          />

          <span className="text-3xl md:text-xl">
            Servicios Integrales y Consultoría en Protección Civil
          </span>

          <p className="font-light md:mt-10 mt-3 text-base md:text-sm">
            En SICPC nos especializamos en la cultura de prevencion, dando capacitaciones 
            con nuestro personal profesional en respuestas a emergencias, igualmente,
            ayudamos a las empresas para su continuidad del negocio asesorando y
            gestionando permisos y/o licencias en los estados de Nuevo Leon, Coahuila
            y Tamaulipas.
          </p>
        </div>

        <div className="w-4/5 mt-3">
          <Link href={"/#"} >
            <a className="text-2xl md:text-base">Acerca de Nosotros</a>
            
          </Link>
          <p className="font-light  p-1 text-base">
            En SICPC nos especializamos en la cultura de prevencion, dando capacitaciones 
            con nuestro personal profesional en respuestas a emergencias, igualmente,
            ayudamos a las empresas para su continuidad del negocio asesorando y
            gestionando permisos y/o licencias en los estados de Nuevo Leon, Coahuila
            y Tamaulipas.
          </p>
        </div>
        <div className="w-4/5 mt-4">
          <Link href={"/services"} className="text-2xl md:ml-2 col-span-2">
            <a className="text-2xl md:text-xl">Servicios</a>
          </Link>
          <div className="flex flex-col m-0  md:pl-10 mt-5 text-base w-full ">
            <ul className="m-4 services-container md:m-0 ">
              <li>
                <Link
                  href={"#"}
                  className="text-sky-400  p-3 hover:text-sky-400"
                >
                  <a>
                    Capacitacion de Brigadas de Emergencia para Programa Interno
                    de Proteccion Civil
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-blue p-3">
                  <a>
                    Operaciones contra incendio: Basico, Intermedio y Avanzado
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="text-blue p-3">
                  <a>
                    Respuesta a Emergencias con Materiales Peligrosos:
                    Intermedio y Avanzado
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="text-blue p-3">
                  <a>
                    {" "}
                    Respuesta a Emergencias Medicas prehospitalarias; Basico e
                    Intermedio Civil
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="text-blue p-3">
                  <a>
                    Rescate Vertical (Alturas): Basico, Intermedio y Avanzado
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="text-blue p-3">
                  <a>
                    Rescate en Espacio Confinados: Basico, Intermedio y Avanzado
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="text-blue p-3">
                  <a>Preparacion del Sistema de Comando de incidentes</a>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="text-blue p-3">
                  Planeacion y Gestion de Simulacion
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className="text-lg mb-5">Contactanos</h2>
          <div className="flex ">
            <IoIosMail className="pr-1 text-xl" />
            Correo
          </div>
          <span>
            <Link href={correoContacto} className="mt-3">
              contacto.sicpc@gmail.com
            </Link>{" "}
          </span>
          <div className="flex mt-5">
            <IoIosCall className=" text-xl" />
            Telefono
          </div>

          <span>
            <Link href={telefonoContacto} className="mt-3">
              (81) 1325 4100
            </Link>
          </span>

          {/* Social media links */}
          <div className="flex justify-center ">
            <span className="pl-3">
              <Link href={"https://twitter.com/SicpcC"} className="p-3">
                <SiTwitter className="text-xl" />
              </Link>
            </span>
            <span className="pl-3">
              <Link href={"https://www.linkedin.com/in/sicpc-consultores-a96a3318b/"} className="p-3">
                <SiLinkedin className="text-xl" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-full bg-black w-full">
        <div className="md:flex md:center md:justify-center md:text-sm text-white zinc md:p-3 p-3 w-full justify-center center text-xs text-center">
          Copyright© {new Date().getFullYear()} Servicios Integrales y
          Consultoría en Protección Civil. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
