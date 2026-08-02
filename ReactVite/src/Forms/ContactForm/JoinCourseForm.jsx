import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaMoneyBillWave,
} from "react-icons/fa";
import { CoursseData } from "../../Components/CoursseData";
import { Link } from "react-router-dom";
// const courseData = {
//   "Adobe Premiere Pro": "₹12,999",
//   "After Effects": "₹14,999",
//   "DaVinci Resolve": "₹11,999",
//   "Frontend Development": "₹19,999",
// };

const JoinCourseForm = ({ courseName}) => {
const {
  register,
  watch,
  handleSubmit,
  setValue,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
    name: "",
    phone: "",
    email: "",
    course: "",
    fee: "",
    mode: "",
  },
});

const selectedCourse = watch("course");
const selectedMode = watch("mode");
const feeValue = watch("fee");

// When page opens from Course Details
useEffect(() => {
  if (courseName) {
    const selected = CoursseData.find(
      (item) => item.CourseName === courseName
    );

    reset({
      name: "",
      phone: "",
      email: "",
      course: courseName,
      fee: selected ? `₹${selected.Fee.toLocaleString("en-IN")}` : "",
      mode: "",
    });
  }
}, [courseName, reset]);

// When user changes course manually
useEffect(() => {
  console.log("courseName prop:", courseName);
  console.log("selectedCourse:", selectedCourse);
  console.log("CoursseData:", CoursseData);

  if (!selectedCourse) {
    setValue("fee", "");
    return;
  }

  const selected = CoursseData.find(
    (item) => item.CourseName === selectedCourse
  );

  console.log("Matched Course:", selected);

  if (selected) {
    setValue("fee", `₹${selected.Fee.toLocaleString("en-IN")}`);
  }
}, [selectedCourse, courseName, setValue]);

const onSubmit = (data) => {

  const message = `
🎓 *New Course Enrollment*

👤 Name : ${data.name}

📱 Phone : ${data.phone}

📧 Email : ${data.email}

📚 Course : ${data.course}

💰 Fee : ${feeValue}

💻 Mode : ${data.mode}
`;

  window.open(
    `https://wa.me/919344337018?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  alert("✅ Successfully Submitted!");
};

  return (
    <div className="w-full max-w-[700px] mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 lg:p-8">

      <h2 className="text-3xl font-bold text-black">
        Join Our Course
      </h2>

      <p className="text-gray-500 mt-2">
        Please fill in the details below to enroll.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 space-y-4"
      >

        {/* Full Name */}

        <div>
          <label className="font-medium text-[15px] mb-1.5 block">
            Full Name
          </label>

<div
  className={`flex items-center rounded-xl px-4 border-2 transition-all ${
    errors.name
      ? "border-red-500"
      : "border-gray-300 focus-within:border-[#FEC827]"
  }`}
>
            <FaUser className="text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Enter your full name"
{...register("name", {
  required: "Full Name is required",
  pattern: {
    value: /^[A-Za-z ]{3,40}$/,
    message: "Enter a valid full name",
  },
})}
              className="w-full py-3 px-3 outline-none text-[15px]"
            />

          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.name?.message}
          </p>
        </div>

        {/* Phone */}

        <div>
          <label className="font-medium text-[15px] mb-1.5 block">
            Phone Number
          </label>

<div
  className={`flex items-center rounded-xl px-4 border-2 transition-all ${
    errors.phone
      ? "border-red-500"
      : "border-gray-300 focus-within:border-[#FEC827]"
  }`}
>
            <FaPhoneAlt className="text-gray-400 text-lg" />

            <input
              type="tel"
              placeholder="Enter your phone number"
{...register("phone", {
  required: "Phone Number is required",
  pattern: {
    value: /^[6-9]\d{9}$/,
    message: "Enter a valid 10-digit mobile number",
  },
})}
             className="w-full py-3 px-3 outline-none text-[15px]"
            />

          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.phone?.message}
          </p>
        </div>

        {/* Email */}

        <div>
          <label className="font-medium text-[15px] mb-1.5 block">
            Email Address
          </label>

<div
  className={`flex items-center rounded-xl px-4 border-2 transition-all ${
    errors.email
      ? "border-red-500"
      : "border-gray-300 focus-within:border-[#FEC827]"
  }`}
>
            <FaEnvelope className="text-gray-400 text-lg" />

            <input
              type="email"
              placeholder="Enter your email"
{...register("email", {
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
})}
              className="w-full py-3 px-3 outline-none text-[15px]"
            />

          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.email?.message}
          </p>
        </div>

        {/* Course */}

        <div>
          <label className="font-medium text-[15px] mb-1.5 block">
            Select Course
          </label>

<div
  className={`flex items-center rounded-xl px-4 border-2 transition-all ${
    errors.course
      ? "border-red-500"
      : "border-gray-300 focus-within:border-[#FEC827]"
  }`}
>
            <FaGraduationCap className="text-gray-400 text-lg" />

            <select
              {...register("course", {
                required: "Please select a course",
              })}
              className="w-full py-3 px-3 bg-transparent outline-none text-[15px]"
            >
<option value="">Choose your course</option>

{CoursseData.map((course) => (
  <option
    key={course.Id}
    value={course.CourseName}
  >
    {course.CourseName}
  </option>
))}
            </select>

          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.course?.message}
          </p>
        </div>

        {/* Course Fee */}

        <div>
          <label className="font-medium text-[15px] mb-1.5 block">
            Course Fee
          </label>

          <div className="flex items-center border rounded-xl px-4 bg-gray-100">

            <FaMoneyBillWave className="text-[#FEC827] text-lg" />

<input
  type="text"
  readOnly
  value={feeValue || ""}
  className="w-full py-3 px-3 bg-transparent outline-none font-semibold text-[15px]"
/>

          </div>
        </div>
                {/* Mode of Training */}

        <div>
          <label className="font-medium text-[15px] mb-1.5 block">
            Mode of Training
          </label>

          <div className="grid grid-cols-2 gap-5">

            {/* Online */}

            <label
              className={`cursor-pointer rounded-2xl border-2 p-4 transition-all duration-300 ${
                selectedMode === "Online"
                  ? "border-[#FEC827] bg-[#FFF9E6] shadow-lg"
                  : "border-gray-200 hover:border-[#FEC827]"
              }`}
            >
              <input
                type="radio"
                value="Online"
                {...register("mode", {
                  required: "Please select training mode",
                })}
                className="hidden"
              />

              <div className="flex flex-col items-center">

                <img
                  src="https://img.icons8.com/fluency/96/laptop.png"
                  alt=""
                  className="w-12"
                />

                <h3 className="font-semibold text-base mt-2">
                  Online
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Learn from anywhere with live online classes.
                </p>

              </div>
            </label>

            {/* Offline */}

            <label
              className={`cursor-pointer rounded-2xl border-2 p-4 transition-all duration-300 ${
                selectedMode === "Offline"
                  ? "border-[#FEC827] bg-[#FFF9E6] shadow-lg"
                  : "border-gray-200 hover:border-[#FEC827]"
              }`}
            >
              <input
                type="radio"
                value="Offline"
                {...register("mode", {
                  required: "Please select training mode",
                })}
                className="hidden"
              />

              <div className="flex flex-col items-center">

                <img
                  src="https://img.icons8.com/fluency/96/classroom.png"
                  alt=""
                  className="w-12"
                />

                <h3 className="font-semibold text-base mt-2">
                  Offline
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Classroom learning with practical sessions.
                </p>

              </div>

            </label>

          </div>

          <p className="text-red-500 text-sm mt-2">
            {errors.mode?.message}
          </p>

        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="w-full bg-[#FEC827] hover:bg-black hover:text-white duration-300 rounded-xl py-3.5 text-base font-semibold shadow-md"
        >
          Enroll Now →
        </button>

        {/* Footer */}

<p className="text-center text-gray-500">
  Need help?
  <Link
    to="/Contact"
    className="text-[#FEC827] font-semibold ml-2 hover:underline"
  >Contact Us</Link>
</p>

      </form>

    </div>
  );
};

export default JoinCourseForm;