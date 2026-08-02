import { Logo } from "../assets/HeaderImage/Logo";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/Course" },
  { name: "About Us", path: "/About" },
  { name: "Contact", path: "/Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] bg-white">
      <div className="w-[95%] md:w-[90%] mx-auto">

        {/* Overlay */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Header */}
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[110px]"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">

            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[18px] font-medium transition-all duration-300
                    after:absolute after:left-0 after:-bottom-2
                    after:h-[3px] after:bg-[#FEC827]
                    after:transition-all after:duration-300 after:content-['']
                    ${
                      isActive
                        ? "text-black after:w-full"
                        : "text-black after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Join Now Button */}
            <li>
              <Link to="/JoinCourse">
                <button
                  className="group relative overflow-hidden px-6 py-2 rounded-md
                  border-2 border-[#FEC827] font-semibold"
                >
                  <span
                    className="absolute inset-0 bg-[#FEC827]
                    origin-bottom transition-transform duration-500
                    group-hover:scale-y-0"
                  ></span>

                  <span
                    className="relative z-10 text-black
                    transition-colors duration-500
                    group-hover:text-[#FEC827]"
                  >
                    Join Now
                  </span>
                </button>
              </Link>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FEC827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 8h10" />
              <path d="M7 12h10" />
              <path d="M7 16h10" />
            </svg>
          </button>

        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 z-50
          w-[280px] h-screen bg-white
          shadow-[-5px_0_20px_rgba(0,0,0,0.08)]
          transition-transform duration-500 ease-in-out
          ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* Close Button */}
          <div className="flex justify-end p-5">
            <button onClick={() => setMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FEC827"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-10 mt-10">

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[20px] font-medium ${
                    isActive ? "text-[#FEC827]" : "text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Join Now */}
            <Link
              to="/JoinCourse"
              onClick={() => setMenuOpen(false)}
            >
              <button
                className="group relative overflow-hidden px-6 py-2 rounded-md
                border-2 border-[#FEC827] font-semibold"
              >
                <span
                  className="absolute inset-0 bg-[#FEC827]
                  origin-bottom transition-transform duration-500
                  group-hover:scale-y-0"
                ></span>

                <span
                  className="relative z-10 text-black
                  transition-colors duration-500
                  group-hover:text-[#FEC827]"
                >
                  Join Now
                </span>
              </button>
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;