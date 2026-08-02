const Location = () => {
  return (
    <div className="max-w-[100%] py-16 bg-white">
      <div className="w-[99%] md:w-[98%] mx-auto">

        <div className="relative rounded-2xl overflow-hidden shadow-xl">

          {/* Google Map */}
          <iframe
            title="Sanopix Creators Academy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0716947470546!2d80.26031637412235!3d13.09464271217068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ef9ff2d159%3A0x52faf8c5d1959c4e!2s22%2C%20Angalamman%20Kovil%20St%2C%20Thattankulam%2C%20Choolai%2C%20Chennai%2C%20Greater%20Chennai%2C%20Tamil%20Nadu%20600007!5e0!3m2!1sen!2sin!4v1783960580556!5m2!1sen!2sin"
            className="w-full h-[500px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: 0 }}
          />

          {/* Location Card */}
          <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-2xl p-8 w-[90%] sm:w-[360px]">

            <div className="flex items-start gap-4">

              <div className="w-14 h-14 rounded-full bg-[#FEC827] flex items-center justify-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>

              </div>

              <div>

                <h2 className="text-2xl font-bold mb-4">
                  Our Location
                </h2>

                <p className="text-gray-600 leading-8">
                  No.22/59,
                  <br />
                  Angalamman Kovil Street,
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

            <a
              href="https://www.google.com/maps/search/?api=1&query=22/59+Angalamman+Kovil+Street+2nd+Layout+Pattalam+Jai+Nagar+Chennai+600012"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-2 border-[#FEC827] px-6 py-3 rounded-lg font-semibold hover:bg-[#FEC827] duration-300"
            >
              View on Google Maps

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Location;