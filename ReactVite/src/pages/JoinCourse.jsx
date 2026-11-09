import { useLocation } from "react-router-dom";
import JoinCourseForm from "../Forms/ContactForm/JoinCourseForm";
import Reveal from "../Components/Reveal";

const Joinus=()=>{
  return(
        <div className="flex flex-col justify-center ">

          <h3 className="text-black text-[18px] font-[600] bg-[#FEC827] py-2 px-6 rounded-lg inline-block">
            Join Us
          </h3>

          <div className="mt-5">
            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight">
              Start Your,
            </h1>

            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight">
              Creative Journey{" "}
              <span className="text-[#FEC827]">Today!</span>
            </h1>
          </div>

          <div className="mt-6">
            <p className="text-[16px] font-[600] text-gray-500">
Fill in your details and Choose your course to
            </p>

            <p className="text-[16px] font-[600] text-gray-500 mt-2">
Begin in your learing with SanopixCreatorsAcademy.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Practical Learning */}
            <div className="flex flex-col items-start gap-4">
              <div className="bg-[#FEC827] p-5 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-stop-icon lucide-monitor-stop"><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/><rect x="9" y="7" width="6" height="6" rx="1"/></svg>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold">
                  Learn from Experts
                </h4>

                <p className="text-[14px] text-gray-500">
                  Industry professionals to guide you
                </p>

                <p className="text-[14px] text-gray-500">
                  at every step.
                </p>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="flex flex-col items-start gap-4">
              <div className="bg-[#FEC827] p-5 rounded-full">
 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold">
                 Practical Learning
                </h4>

                <p className="text-[14px] text-gray-500">
                  Hands-On projects and real world 
                </p>

                <p className="text-[14px] text-gray-500">
                  experience.
                </p>
              </div>
            </div>

            {/* Career Growth */}
            <div className="flex flex-col items-start gap-4">
              <div className="bg-[#FEC827] p-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6V2h-1" />
                  <path d="M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1" />
                  <path d="M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" />
                </svg>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold">
                  Career Growth
                </h4>

                <p className="text-[14px] text-gray-500">
                  Build your portfolio and get
                </p>

                <p className="text-[14px] text-gray-500">
                  job-ready.
                </p>
              </div>
            </div>

          </div>
        </div>
  )
}
const JoinCourse = () => {
  const location = useLocation();

  const courseName = location.state?.courseName || "";
  const fee = location.state?.fee || "";
  const id = location.state?.id || "";

  return (
    <div className="max-w-[100%] py-10 bg-[#fafafa]">
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
{/* JoinusStarting  */}
<Reveal>
<div>
  <Joinus/>
</div>
</Reveal>
{/* JoinusEnding */}
{/* Form Starting  */}

<Reveal delay={0.2}>
  <div>
    <JoinCourseForm
      courseName={courseName}
      // fee={fee}
      // id={id}
    />
  </div>
</Reveal>
      {/* Form ending  */}
      </div>
<Reveal delay={0.3}>
  <div className="w-[95%] md:w-[90%] mx-auto">
    <WhyJoinUs />
  </div>
</Reveal>
    </div>
  );
};
const WhyJoinUs=()=>{
  return(
    <div className="max-w-[100%] py-10">
      <Reveal>
        <div className="w-[95%] md:w-[90%] mx-auto">
                <h3 className="text-[18px] font-[600] text-[#FEC827] text-center">
            Why Join Us?
          </h3>
                <h2 className="text-3xl font-bold text-black text-center">
        Your Success Is Our Goal
      </h2>
    </div>
    </Reveal>
    <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-4 gap-6 mt-8">
      <Reveal delay={0.1}>
            <div className="flex flex-col justify-center items-center p-6 shadow-lg gap-4 border rounded-lg">
              <div className="bg-[#FEC827] p-5 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-user-icon lucide-square-user"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-center">
                  Industry Relevant Skills
                </h4>

                <p className="text-[14px] text-gray-500 text-center">
                  Learn Skills that are in 
                </p>

                <p className="text-[14px] text-gray-500 text-center">
                High Demand at every step.
                </p>
              </div>
            </div>
      </Reveal>
      <Reveal delay={0.2}>
                        <div className="flex flex-col justify-center items-center p-6 shadow-lg gap-4 border rounded-lg">
              <div className="bg-[#FEC827] p-5 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-stop-icon lucide-monitor-stop"><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/><rect x="9" y="7" width="6" height="6" rx="1"/></svg>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-center">
                  Expert Guidance
                </h4>

                <p className="text-[14px] text-gray-500 text-center">
                  Learn from industry 
                </p>

                <p className="text-[14px] text-gray-500 text-center">
                  Professionals.
                </p>
              </div>
            </div>
      </Reveal>
      <Reveal delay={0.3}>
                                    <div className="flex flex-col justify-center items-center p-6 shadow-lg gap-4 border rounded-lg">
              <div className="bg-[#FEC827] p-5 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal-icon lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-center">
                  Certificate Included
                </h4>

                <p className="text-[14px] text-gray-500 text-center">
                  Get certified and boost
                </p>

                <p className="text-[14px] text-gray-500 text-center">
                  your career.
                </p>
              </div>
            </div>
      </Reveal>
       <Reveal delay={0.4}>
            
                                    <div className="flex flex-col justify-center items-center p-6 shadow-lg gap-4 border rounded-lg">
              <div className="bg-[#FEC827] p-5 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-center">
                  Career Growth
                </h4>

                <p className="text-[14px] text-gray-500 text-center">
                 Build your portfolio and
                </p>

                <p className="text-[14px] text-gray-500 text-center">
                 get a job-ready.
                </p>
              </div>
            </div>
       </Reveal>     
    </div>
    </div>
  )
}

export default JoinCourse;