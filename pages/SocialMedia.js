/* import { motion } from "framer-motion"; */
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import "/styles/contact.css";
import cellphone from "/pages/important-pages/images/telephone.svg";
import chat from "/pages/important-pages/images/chat-quote.svg";
import envelope from "/pages/important-pages/images/envelope-mail.svg";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjvdpdbl");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <div className="socialmedia-container">
      <h1 className="title-c">Contact me</h1>

      <div id="contact" className="contact-intro">
        <h3 className="subtitle-contact">YOUR JOURNEY STYLE STARTS HERE!</h3>
        <p className="text-contact">
          To book a personal styling appointment or to find out more about how I
          can help, please get in touch via the form below, text or phone.
        </p>
      </div>
      <div className="form-with-photo">
        <div className="icons">
          <Link href={"tel:+447956 359559"}>
            <Image
              alt="phone"
              className="phone"
              src={cellphone}
              width="100%"
              height="100%"
            />
          </Link>
          <Link href={"mailto:info@emilystott.net"}>
            <Image
              alt="envelope"
              className="envelope"
              src={envelope}
              width="100%"
              height="100%"
            />
          </Link>
          <Link href={"sms:+447956 359559"}>
            <Image
              alt="chat"
              className="chat"
              src={chat}
              width="100%"
              height="100%"
            />
          </Link>
        </div>

        <div className="form">
          <form className="details" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="message">How can I help? :</label>
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="Submit"
              type="submit"
              disabled={state.submitting}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
