import React, { useState } from "react";
import { GiTeacher } from "react-icons/gi";
import Carousel from "../components/Carousel";
import Image from "next/dist/client/image";
import contactImage from "../components/assets/slider/planning.jpg";
export default function Services() {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) {
      tempErrors["fullName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    if (phone.length <=0){
      tempErrors['phone'] = true;
      isValid = false
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullName,
          subject: subject,
          message: message,
          phone: phone,
          company: company,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };

  return (
    <div className="md:flex  md:h-full md:p-0 md:m-0">
      <div className="md:w-1/2">
        <h2 className="pl-4 pt-10 md:text-2xl">Contactanos</h2>
        <div className="p-7">
          <form onSubmit={handleSubmit} class="w-full ">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-7/12 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre Completo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                />
                {errors?.fullName && (
                  <p className="text-red-500">
                    Nombre completo no puede estar vacio.
                  </p>
                )}
              </div>
              <div class="w-full md:w-4/12 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Empresa
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Tu empresa"
                  onChange={(e) => {
                    setsubject(e.target.value);
                  }}
                />
                {errors?.subject && (
                  <p className="text-red-500">Empresa no puede estar vacio.</p>
                )}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-7/12 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Correo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                {errors?.email && (
                  <p className="text-red-500">Correo no puede estar vacio.</p>
                )}
              </div>

              <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Telefono
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="tel"
                  placeholder="81100000"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                {errors?.phone && (
                  <p className="text-red-500">Telefono no puede estar vacio.</p>
                )}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Mensaje
                </label>
                <textarea
                  class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                  id="grid-password"
                  type="text"
                  placeholder="Escriba su mensaje aqui"
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                />
                  {errors?.message && (
                  <p className="text-red-500">El mensaje no puede estar vacio.</p>
                )}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <button
                  type="submit"
                  class="bg-blue-500  text-white font-bold py-2 px-4 rounded"
                >
                  Enviar
                </button>
              </div>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                  Gracias!, tu mensaje fue enviado con exito
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Algo salio mal, favor de intentarlo de nuevo llenando todos los campos.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="md:w-1/2  hidden md:inline-block w-full md:h-auto ">
        {/* <Carousel className="w-screen" /> */}
        <Image unoptimized objectFit="contain" src={contactImage} />
      </div>
    </div>
  );
}
