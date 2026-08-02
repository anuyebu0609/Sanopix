import Benefits2 from "./Benefits2"
import { Man } from "../assets/AboutUsImage/AboutUsImage"
import { Group } from "../assets/AboutUsImage/AboutUsImage"
import Reveal from "../Components/Reveal"
const AboutUs1=()=>{
    return(
    <div className="max-w-[100%] py-10">
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side */}
        <Reveal direction="left">
        <div className="flex flex-col justify-center">

          <h3 className="text-black text-[18px] font-[600] bg-[#FEC827] py-2 px-6 rounded-lg inline-block">
            About Us
          </h3>

          <div className="mt-5">
            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight">
              Empowering Creators,
            </h1>

            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight">
              Building{" "}
              <span className="text-[#FEC827]">Futures.</span>
            </h1>
          </div>

          <div className="mt-6">
            <p className="text-[16px] font-[600] text-gray-500">
              At Sanopix Creators Academy, we believe creativity has the power
              to inspire, educate and transform lives.
            </p>

            <p className="text-[16px] font-[600] text-gray-500 mt-2">
              Our mission is to make professional video editing skills
              accessible to everyone.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-6">

            {/* Practical Learning */}
            <Reveal direction="up" delay={0.1}>
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
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold">
                  Practical Learning
                </h4>

                <p className="text-[14px] text-gray-500">
                  Hands-on projects and
                </p>

                <p className="text-[14px] text-gray-500">
                  real-world training.
                </p>
              </div>
            </div>
            </Reveal>
            {/* Expert Guidance */}
            <Reveal direction="up" delay={0.2}>
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
                  <path d="M16 12v4" />
                  <path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M2 14h20" />
                  <path d="M8 12v4" />
                </svg>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold">
                  Expert Guidance
                </h4>

                <p className="text-[14px] text-gray-500">
                  Learn from experienced
                </p>

                <p className="text-[14px] text-gray-500">
                  industry professionals.
                </p>
              </div>
            </div>
            </Reveal>
            {/* Career Growth */}
            <Reveal direction="up" delay={0.3}>
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
                  Build skills that open
                </p>

                <p className="text-[14px] text-gray-500">
                  doors to success.
                </p>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
</Reveal>
        {/* Right Side */}
        <Reveal direction="right" delay={0.2}>
        <div className="flex items-center justify-center">
          <img
            src={Man}
            alt="About Us"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </div>
</Reveal>
      </div>
    </div>
    )
}
const AboutUsBenefits=()=>{
    return(
      <Reveal>
<Benefits2/>
      </Reveal>
    )
}
const AboutUs2=()=>{
    return(
        <div className="max-w-[100%] py-10">
<div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* group img  */}
    <Reveal direction="left">
<div>
    <img src={Group} alt="group.img" className="rounded-2xl"/>
</div>
</Reveal>
{/* 2nd component */}
<Reveal direction="up" delay={0.2}>
<div className="flex flex-col items-start justify-start gap-2 border-r-2">
    <div className="flex flex-row justify-start items-start gap-4">
    <div className="p-4 bg-[#FEC827] rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
   </div>
   <div className="flex flex-col">
    <h4 className="text-[16px] font-semibold text-[#FEC827]">Our Mission</h4>
    <h3 className="text-black text-[18px] font-[600] ">Inspire, Educate, Empower</h3>
    </div>
    </div>
    <div className="flex flex-col mt-2">
    <p className="text-[16px] font-[600] text-gray-500">Our mission is to empower individuals with</p>
    <p className="text-[16px] font-[600] text-gray-500">Practical video editing skills through</p>
    <p className="text-[16px] font-[600] text-gray-500">high-quality training, Expert guidance, and</p>
    <p className="text-[16px] font-[600] text-gray-500">real world projects</p>
</div>
</div>
</Reveal>
{/* 3rd component  */}
<Reveal direction="up" delay={0.4}>
<div className="flex flex-col items-start justify-start gap-2 border-r-2">
    <div className="flex flex-row justify-start items-start gap-4">
    <div className="p-4 bg-[#FEC827] rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
   </div>
   <div className="flex flex-col">
    <h4 className="text-[16px] font-semibold text-[#FEC827]">Our Vision</h4>
    <h3 className="text-black text-[18px] font-[600] ">A World of Confident Creators</h3>
    </div>
    </div>
    <div className="flex flex-col mt-2">
    <p className="text-[16px] font-[600] text-gray-500">Our mission is to empower individuals with</p>
    <p className="text-[16px] font-[600] text-gray-500">Practical video editing skills through</p>
    <p className="text-[16px] font-[600] text-gray-500">high-quality training, Expert guidance, and</p>
    <p className="text-[16px] font-[600] text-gray-500">real world projects</p>
</div>
</div>
</Reveal>
</div>
        </div>
    )
}
// for render 
const AboutUs = () => {
  return (
    <div>
<AboutUs1/>
<AboutUsBenefits/>
<AboutUs2/>
</div>
  );
};

export default AboutUs;