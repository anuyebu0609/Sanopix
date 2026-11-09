
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Validation Schema
const schema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required",
  }),

  email: z.string().trim().email({
    message: "Enter a valid email",
  }),

  subject: z.string().trim().min(1, {
    message: "Enter a Subject",
  }),

  message: z.string().trim().min(5, {
    message: "Message must contain at least 5 characters",
  }),
});

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Popup Auto Close
  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  // Submit Function
  const onSubmit = (data) => {
    const whatsappMessage = `*📩 New Contact Form Enquiry*

👤 *Name:* ${data.name}

📧 *Email:* ${data.email}

📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}`;

    const whatsappURL = `https://wa.me/919344337018?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    const newTab = window.open(whatsappURL, "_blank");

    if (newTab) {
      newTab.opener = null;
    }

    // Show Popup
    setShowPopup(true);

    // Reset Form
    reset();
  };

  return (
    <div className="max-w-[100%] py-16 bg-white">

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-6 right-6 z-50 animate-[fadeIn_0.3s_ease]">
          <div className="bg-[#FEC827] border-2 border-black text-black rounded-2xl shadow-2xl px-6 py-5 max-w-sm">

            <h3 className="text-xl font-bold mb-2">
              ✓ Thank You!
            </h3>

            <p className="text-sm leading-6 font-medium">
              Your enquiry has been received successfully.
              <br />
              Our team will contact you shortly.
            </p>

          </div>
        </div>
      )}

      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ================= FORM ================= */}
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl duration-300">

          <h2 className="text-3xl font-bold">
            Send Us a Message
          </h2>

          <div className="w-16 h-1 bg-[#FEC827] rounded-full mt-2 mb-8"></div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* Name */}
              <div>
                <div className="flex items-center border rounded-lg overflow-hidden focus-within:border-[#FEC827] focus-within:ring-2 focus-within:ring-[#FEC827]">

                  <span className="px-3 text-gray-500">
                    👤
                  </span>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full py-3 px-1 outline-none"
                    {...register("name")}
                  />

                </div>

                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center border rounded-lg overflow-hidden focus-within:border-[#FEC827] focus-within:ring-2 focus-within:ring-[#FEC827]">

                  <span className="px-3 text-gray-500">
                    ✉️
                  </span>

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-3 px-1 outline-none"
                    {...register("email")}
                  />

                </div>

                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

            </div>

            {/* Subject */}
            <div>
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:border-[#FEC827] focus-within:ring-2 focus-within:ring-[#FEC827]">

                <span className="px-3 text-gray-500">
                  📄
                </span>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full py-3 px-1 outline-none"
                  {...register("subject")}
                />

              </div>

              {errors.subject && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="flex border rounded-lg overflow-hidden focus-within:border-[#FEC827] focus-within:ring-2 focus-within:ring-[#FEC827]">

                <span className="px-3 pt-4 text-gray-500">
                  ✎
                </span>

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full py-3 px-1 outline-none resize-none"
                  {...register("message")}
                />

              </div>

              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FEC827] px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white duration-300 flex items-center gap-2 disabled:opacity-50"
            >
              Send Message
              <span>➜</span>
            </button>

          </form>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div>

          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <div className="w-16 h-1 bg-[#FEC827] rounded-full mt-2 mb-8"></div>

          {/* Phone */}
          <div className="flex items-start gap-5 py-5 border-b">

            <div className="w-14 h-14 rounded-full bg-[#FEC827] flex items-center justify-center text-xl shrink-0">
              📞
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 93443 37018
              </p>
            </div>

          </div>

          {/* Email */}
          <div className="flex items-start gap-5 py-5 border-b">

            <div className="w-14 h-14 rounded-full bg-[#FEC827] flex items-center justify-center text-xl shrink-0">
              ✉️
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Email
              </h3>

              <p className="text-gray-600 break-all">
                sanopixcreatorsacademy@gmail.com
              </p>
            </div>

          </div>

          {/* Address */}
          <div className="flex items-start gap-5 py-5 border-b">

            <div className="w-14 h-14 rounded-full bg-[#FEC827] flex items-center justify-center text-xl shrink-0">
              📍
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Address
              </h3>

              <p className="text-gray-600">
                No.22/59 Angalamman Kovil Street,
                <br />
                2nd Layout,
                <br />
                Pattalam,
                <br />
                Jai Nagar,
                <br />
                Chennai - 600012.
              </p>
            </div>

          </div>

          {/* Office Hours */}
          <div className="flex items-start gap-5 py-5">

            <div className="w-14 h-14 rounded-full bg-[#FEC827] flex items-center justify-center text-xl shrink-0">
              🕒
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Office Hours
              </h3>

              <p className="text-gray-600">
                Monday - Saturday
              </p>

              <p className="text-gray-600">
                9:00 AM - 6:00 PM
              </p>

              <p className="text-gray-600">
                Sunday : Closed
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
