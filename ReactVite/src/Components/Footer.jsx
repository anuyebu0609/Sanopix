import { Link } from "react-router-dom";
import { Email, Insta, Whatsapp, Facebook } from "../assets/FooterImage/FooterImage";

const Footer = () => {
  return (
    <div className="max-w-[100%] bg-black py-12">
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO */}
        <div className="flex flex-col items-start gap-3">
          <img
            src="https://sanopix.in/assets/images/header-logo.webp"
            alt="logo"
            className="w-[180px]"
          />

          <p className="text-[16px] font-medium text-gray-400">
            We help you learn professional
          </p>
          <p className="text-[16px] font-medium text-gray-400">
            Video editing skills and build
          </p>
          <p className="text-[16px] font-medium text-gray-400">
            your creative future.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="mailto:sanopixcreatoracademy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Email}
                alt="email"
                className="w-8 h-8 hover:scale-110 duration-300"
              />
            </a>

            <a
              href="https://www.instagram.com/sanopixcreatorsacademy/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Insta}
                alt="instagram"
                className="w-8 h-8 hover:scale-110 duration-300"
              />
            </a>

            <a
              href="https://wa.me/919344337018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Whatsapp}
                alt="whatsapp"
                className="w-8 h-8 hover:scale-110 duration-300"
              />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="facebook"
                className="w-8 h-8 hover:scale-110 duration-300"
              />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Course"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/JoinCourse"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                Join Now
              </Link>
            </li>

          </ul>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-bold text-white">
            Resources
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/PrivacyPolicy"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/TermsConditions"
                className="text-[16px] font-medium text-gray-400 hover:text-[#FEC827] duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-bold text-white">
            Newsletter
          </h3>

          <p className="text-[16px] font-medium text-gray-400">
            Subscribe to get updates on new
          </p>

          <p className="text-[16px] font-medium text-gray-400">
            courses and offers.
          </p>

          <div className="w-full max-w-sm">
            <div
              className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-[#FEC827] focus-within:ring-2 focus-within:ring-[#FEC827] duration-200"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 outline-none text-black"
              />

              <button className="bg-[#FEC827] px-4 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="w-[95%] md:w-[90%] mx-auto py-2 mt-6 border-t border-gray-600">
        <h3 className="text-[16px] font-medium text-gray-400 text-center mt-6">
          © 2026 SanopixCreatorsAcademy.
        </h3>
      </div>

    </div>
  );
};

export default Footer;