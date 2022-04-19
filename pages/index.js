import Head from "next/head";
import react, { useState, useEffect, useRef } from "react";
//Logo
//-------- Icons ----------------
import { IoArrowDownOutline, IoArrowForwardOutline } from "react-icons/io5";
import {
  IoIosArrowDropright,
  IoIosArrowDropleft,
  IoIosArrowForward,
} from "react-icons/io";
//Social media icons
import { SiTwitter, SiLinkedin } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";
import Carousel from '../components/Carousel'
import About from '../components/About'
import Services from "./services";
import WhatsAppBtn from "../components/WhatsAppBtn";
export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Servicios Integrales y Consultoría en Protección Civil.</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Carousel />
      <About />
      <WhatsAppBtn/>
    </div>
  );
}
