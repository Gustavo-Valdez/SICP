
import { AiOutlineWhatsApp } from "react-icons/ai";
const WhatsAppBtn = () =>{
    return(
    <a
    href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
    className="
    fixed 
    w-16 
    h-16 
    bottom-10
    right-10 
    bg-whatsappGreen
    text-white
    rounded-full
    text-center
    text-5xl
    z-10
    transition
    duration-500
    md:hidden
    animate-bounce
    "
    target="_blank"
  >
    <AiOutlineWhatsApp  className="mt-2 ml-2"/>
  </a>
    )

}
export default WhatsAppBtn