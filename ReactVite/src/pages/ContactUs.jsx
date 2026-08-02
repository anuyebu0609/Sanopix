import { girl } from "../assets/ContactUsImage/ContactUsImage"

import ContactForm from "../Forms/ContactForm/ContactForm";
import Location from "./Location";
import Reveal from "../Components/Reveal";


const ContactUsHero = () => {
  return (
    <div className="max-w-[100%] py-16 bg-white">
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <Reveal direction="left">
        <div>
          <span className="inline-block bg-[#FEC827] text-black text-[16px] font-semibold px-6 py-2 rounded-lg">
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-black">
            Let's Connect &
            <br />
            Create <span className="text-[#FEC827]">Together.</span>
          </h1>

          <p className="mt-6 text-[16px] font-[600] text-gray-500 leading-8">
            We'd love to hear from you! Whether you have a question,
            a suggestion, or just want to say hello,
            feel free to reach out.
          </p>

          <p className="mt-4 text-[16px] font-[600] text-gray-500 leading-8">
            Our team is always ready to help and guide you with
            the right information. Let's build something amazing together.
          </p>
        </div>
        </Reveal>

        {/* Right Side */}
        <Reveal direction="right" delay={0.2}>
        <div className="flex justify-center">
          <img
            src={girl}
            alt="Contact Us"
            className="w-full max-w-[500px] rounded-3xl object-cover shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>
</Reveal>
      </div>
    </div>
  );
};

// export default ContactUsHero;






// Main Render Page 
const ContactUs = () => {
  return (
    <div>
      <ContactUsHero />

      <Reveal direction="up">
        <ContactForm />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <Location />
      </Reveal>
    </div>
  );
};



export default ContactUs;
