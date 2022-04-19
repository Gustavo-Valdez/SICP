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
            Se capacitan a distintas brigadas para que se puedan prevenir y controlar distintas situaciones de emergencia, las cuales serán responsables de combatirlas de manera preventiva o ante eventualidades salvaguardar a los civiles, sus bienes y el entorno mismo.
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
            Capacitación y Operaciones contra situaciones de riesgo en incendios en sus 3 niveles: Básico, Intermedio y Avanzado. Se aprenderá a evaluar en qué nivel está el incendio y se procederá de forma segura según sea el caso.
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
            Se da capacitación estableciendo las bases para determinar y evaluar las capacidades para la atención de emergencias con materiales y residuos peligrosos que pueden ser aplicadas tanto a nivel municipal como federal, para así, que se establezcan los programas y planes necesarios para la prevención y preparación, con el objetivo de disminuir la probabilidad de que se presente una emergencia y reducir la seriedad de las consecuencias.
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
            Capacitación para dar atención prehospitalaria en situaciones de emergencias a víctimas cuya condición clínica se considera que pone en peligro la vida, un órgano o su función, con el fin de lograr limitar el daño que pueda causar esta condición y su estabilización orgánico funcional, desde el primer contacto hasta la llegada y entrega a un establecimiento para la atención medica con servicio de urgencias.          </span>
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
            Capacitación en los procedimientos técnicos tendientes para lograr la recuperación de una persona que ha quedado atrapada, lesionada, o accidentada en lugares altos, implementando sistemas adecuados que reúnan todas las condiciones de seguridad necesarias para garantizar el éxito de la operación.          </span>
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
            Capacitación en los procedimientos técnicos tendientes para lograr la recuperación de una persona que ha quedado atrapada, lesionada, o accidentada en lugares donde el espacio no es muy favorable (Espacios confinados o con poca movilidad), implementando sistemas adecuados que reúnan todas las condiciones de seguridad necesarias para garantizar el éxito de la operación.          </span>
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
            Preparación del sistema de Comando de incidentes (SCI) dentro de las instalaciones, consiguiendo el equipamiento adecuado para que el personal pueda usarlo en cualquier momento, además de preparar los protocolos, procedimientos y comunicaciones, con la responsabilidad de administrar los recursos asignados para lograr los objetivos pertinentes en un evento, incidente u operativo.
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
            Planeación y gestión de simulacros de emergencias y desastres, donde se enseñaran utilizando las habilidades y técnicas con las que se atenderían casos reales, implicando la movilización y operación real de personas y recursos materiales, planificando el propósito del simulacro, determinando el alcance de las acciones, etc.
            </span>
          </div>
        </div>
                
        

        
      </div>
    </div>
  );
}
