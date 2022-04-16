import React from "react";
import {
  GiTeacher,
  GiFireExtinguisher,
  GiRadioactive,
  GiMedicalPack,
  GiMountainClimbing,
} from "react-icons/gi";

import { GrSystem } from "react-icons/gr";
import { AiOutlineAlert } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";

export default function Services() {
  return (
    // Services container
    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500  md:m-0  md:p-0 md:h-100 md:w-full ">
      <h1 className="text-center text-4xl font-display font-bold md:pt-10 text-white p-10">
        Nuestros servicios
      </h1>
      {/* Services */}
      <div className="
      md:grid 
      md:grid-cols-4 
      md:gap-4
      md:place-items-center 
      md:h-auto 
      md:grid-rows-2   
      md:m-0 
      md:w-full
      md:mb-0 
      flex 
      flex-col 
      justify-center 
      place-items-center
      
      w-full
      
      ">
        {/* Card */}
        <div
          className="card md:m-4 mb-5">
          <div className="face front flex flex-col">
            <GiFireExtinguisher className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Capacitacion de Brigadas de Emergencia para Programa Interno de Proteccion Civil
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>


        <div
          className="card md:m-4  mb-5 ">
          <div className="face front flex flex-col">
            <GiFireExtinguisher className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Operaciones contra incendio: Basico, Intermedio y Avanzado
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>


        <div
          className="card md:m-4  mb-5">
          <div className="face front flex flex-col">
            <GiRadioactive className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Respuesta a Emergencias con Materiales Peligrosos: Intermedio y
            Avanzado
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>
                
        <div
          className="card md:m-4  mb-5">
          <div className="face front flex flex-col">
            <GiMedicalPack className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Respuesta a Emergencias Medicas prehospitalarias; Basico e
            Intermedio Civil
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>
                
        <div
          className="card md:m-4  mb-5">
          <div className="face front flex flex-col">
            <GiMountainClimbing className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Rescate Vertical (Alturas): Basico, Intermedio y Avanzado
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>
                
        <div
          className="card md:m-4  mb-5">
          <div className="face front flex flex-col">
            <FaHandsHelping className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Rescate en Espacio Confinados: Basico, Intermedio y Avanzado
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>
                
        <div
          className="card md:m-4  mb-5">
          <div className="face front flex flex-col">
            <GrSystem className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Preparacion del Sistema de Comando de incidentes
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>
                
        <div
          className="card md:m-4  mb-5">
          <div className="face front flex flex-col">
            <AiOutlineAlert className="text-6xl md:w-full w-full md:justify-center md:mt-5 md:mb-5 justify-center" />
            <span className="md:text-base text-base w-full md:text-center text-center">
            Planeacion y Gestion de Simulacros
          </span>
          </div>
          <div className="face back">
            <span className="md:text-base w-full md:text-center text-center">
            Commodo commodo commodo officia exercitation dolore voluptate dolore deserunt adipisicing.
          </span>
          </div>
        </div>
                
        

        
      </div>
    </div>
  );
}
