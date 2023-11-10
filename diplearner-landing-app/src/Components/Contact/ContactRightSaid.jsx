import Image from "next/image";
import React, { useRef, useState } from "react";
import CircelIcon from "../../../public/circel-svg.svg";
import LongDotIcon from "../../../public/long-dot-svg.svg";
import SquirDotIcon from "../../../public/squir-dot-svg.svg";
import ContactInputBox from "./ContactInputBox";
const ContactRightSaid = () => {
  const form = useRef();

  const [contactMessage, setContactMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHendlar = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactMessage({
      ...contactMessage,
      [name]: [value],
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
      <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-4xl md:mx-1">
        <form ref={form} onSubmit={sendEmail}>
          <ContactInputBox
            type={"text"}
            placeholder={"Enter Your Name"}
            name={"name"}
            value={contactMessage.name}
            action={changeHendlar}
          />
          <ContactInputBox
            type={"email"}
            placeholder={"Enter Your E-mail"}
            name={"email"}
            value={contactMessage.email}
            action={changeHendlar}
          />
          <ContactInputBox
            type={"text"}
            placeholder={"Enter Your Phone Number"}
            name={"phone"}
            value={contactMessage.phone}
            action={changeHendlar}
          />

          <div className="mb-6">
            <textarea
              rows="6"
              placeholder="Your Message"
              className="text-body-color resize-none w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus-visible:shadow-none focus:border-[#ce1c34]"
              name="message"
              value={contactMessage.message}
              onChange={changeHendlar}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full hover:bg-[#00B1E9] bg-[#00B1E9] text-white duration-300 rounded border border-primary p-3 transition hover:bg-opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
        <div>
          <span className="absolute -top-10 -right-9 z-[-1]">
            <Image
              width={"150"}
              height={"150"}
              src={CircelIcon}
              alt={"Circel-Icon"}
            />
          </span>
          <span className="absolute -right-10 top-[90px] z-[-1]">
            <Image
              width={"200"}
              height={"250"}
              src={LongDotIcon}
              alt={"Long-Dot-Icon"}
            />
          </span>
          <span className="absolute -left-7 -bottom-7 z-[-1]">
            <Image
              width={"200"}
              height={"200"}
              src={SquirDotIcon}
              alt={"Squir-Dot-Icon"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactRightSaid);
