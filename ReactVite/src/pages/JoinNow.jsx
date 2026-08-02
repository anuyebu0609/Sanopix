import { useEffect, useRef, useState } from "react";

const JoinNow = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-[100%] py-10" ref={sectionRef}>
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#FEC827] rounded-2xl py-10 overflow-hidden">

        {/* IMAGE */}
        <div
          className={`flex flex-col items-center justify-center transition-all duration-1000 ${
            show
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <img
            src="https://ik.imagekit.io/opzxy97kk/ChatGPT%20Image%20Jun%2029,%202026,%2012_38_54%20PM.png"
            alt="film.img"
            className="w-[60%] animate-float"
          />
        </div>

        {/* TEXT */}
        <div
          className={`flex flex-col justify-center items-center gap-2 transition-all duration-1000 delay-300 ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-[22px] md:text-[32px] font-[700] text-black">
            Start Your Creative Journey Today!
          </h2>

          <h3 className="text-[16px] font-[500] text-gray-800">
            Join thousands of students and master video editing
          </h3>

          <h3 className="text-[16px] font-[500] text-gray-800">
            skills that can change your career.
          </h3>
        </div>

        {/* BUTTON */}
        <div
          className={`flex flex-col items-center justify-center transition-all duration-1000 delay-500 ${
            show
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <button className="group text-white hover:text-[#FEC827] font-[600] text-[18px] bg-black py-4 px-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-all duration-300">
            Join Now

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-2 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;