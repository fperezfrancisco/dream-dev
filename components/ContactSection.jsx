"use client";
import React, { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import checklist from "@/app/assets/checklist-illustration.png";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formBusiness, setFormBusiness] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSending, setFormSending] = useState(false);

  const collectData = (e) => {
    e.preventDefault();

    setFormSending(true);

    console.log({
      formName,
      formEmail,
      formBusiness,
      formMessage,
    });

    const serviceID = "service_cl2r24u";
    const templateID = "template_6da7rqi";
    const publicKey = "B5m78mM5hASikgXT_";

    const templateParams = {
      name: formName,
      email: formEmail,
      message: formMessage,
    };

    setTimeout(() => {
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((res) => {
          setFormSending(false);
          console.log("Success");
          alert("Message Sent successfully!");
          setFormName("");
          setFormEmail("");
          setFormBusiness("");
          setFormMessage("");
        })
        .catch((error) => {
          console.log("error: ", error);
          setFormSending(false);
          alert("Something went wrong, please try again later!");
        });
    }, 3000);
  };

  return (
    <div
      id="contact"
      className="relative w-full h-full py-[64px] md:py-[120px] lg:py-[180px] px-4 md:px-8 lg:px-12 flex flex-col items-start md:items-center md:justify-center overflow-x-clip"
    >
      <div className="w-full max-w-[1440px]  text-primary flex flex-col min-[900px]:flex-row-reverse min-[900px]:justify-between items-center gap-8 min-[900px]:gap-12">
        <div className="flex flex-col items-start text-left w-full max-w-[600px] relative">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 lg:mb-12">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="w-full max-w-[80%] md:text-xl">
            Let us build a website that works for you. Get a custom quote today
            and take the first step toward growing your business.
          </p>
          <Image
            alt="checklist"
            src={checklist}
            className="absolute top-[-100px] min-[900px]:top-[-200px]  min-[900px]:right-0 w-[100px] min-[900px]:w-[190px] -z-10 "
          />
        </div>
        <div className="w-full max-w-[600px] py-4">
          {formSending ? (
            <div>
              <p className="text-2xl font-semibold animate-pulse">
                Sending your form ...{" "}
              </p>
            </div>
          ) : (
            <form
              action=""
              className="w-full max-w-[500px]"
              onSubmit={(e) => collectData(e)}
            >
              <ul className="w-full flex flex-col gap-4 mb-6">
                <li className="w-full flex relative">
                  <label
                    htmlFor="name"
                    className="text-primary font-semibold absolute top-4 left-6"
                  >
                    Name:
                  </label>
                  <input
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                    id="name"
                    type="text"
                    className="border-2 w-full border-primary rounded-2xl py-4 px-6 pl-20"
                  />
                </li>
                <li className="w-full flex relative">
                  <label
                    htmlFor="email"
                    className="text-primary font-semibold absolute top-4 left-6"
                  >
                    Email:
                  </label>
                  <input
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    id="email"
                    type="email"
                    className="border-2 w-full border-primary rounded-2xl py-4 px-6 pl-20"
                  />
                </li>
                <li className="w-full flex relative">
                  <label
                    htmlFor="businessType"
                    className="text-primary font-semibold absolute top-4 left-6"
                  >
                    Business Type:
                  </label>
                  <input
                    value={formBusiness}
                    onChange={(e) => setFormBusiness(e.target.value)}
                    id="businessType"
                    type="text"
                    className="border-2 w-full border-primary rounded-2xl py-4 px-6 pl-36"
                  />
                </li>
                <li className="w-full flex relative">
                  <label
                    htmlFor="message"
                    className="text-primary font-semibold absolute top-4 left-6"
                  >
                    Message:
                  </label>
                  <textarea
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    id="message"
                    rows={6}
                    className="border-2 w-full border-primary rounded-2xl py-4 px-6 pl-28"
                  ></textarea>
                </li>
              </ul>
              <Button primary={true} title={"SEND MESSAGE"} widthFull={true} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
