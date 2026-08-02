import { useState, useEffect, useRef } from "react";

const Benefits2 = () => {
  const [startCount, setStartCount] = useState(false);

  const [clients, setClients] = useState(0);
  const [videos, setVideos] = useState(0);
  const [experts, setExperts] = useState(0);
  const [success, setSuccess] = useState(0);

  const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartCount(true);
        observer.disconnect(); // stop observing after first animation
      }
    },
    {
      threshold: 0.4,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
  useEffect(() => {
    if (!startCount) return;

    const animateValue = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 20);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animateValue(setClients, 15000, 2000);
    animateValue(setVideos, 120, 2000);
    animateValue(setExperts, 10, 2000);
    animateValue(setSuccess, 95, 2000);
  }, [startCount]);

  return (
    <div className="max-w-[100%] py-10" ref={sectionRef}>
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 bg-black rounded-2xl p-10 gap-8">

        {/* CLIENTS */}
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://ik.imagekit.io/opzxy97kk/icons8-clients-64.png"
            alt="client"
            className="animate-float w-16 h-16"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-[700] text-white transition-all duration-300 hover:scale-110">
              {clients >= 1000
                ? `${Math.floor(clients / 1000)}K+`
                : clients}
            </h2>

            <h3 className="text-[16px] font-[600] text-gray-400">
              Happy Clients
            </h3>
          </div>
        </div>

        {/* VIDEOS */}
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://ik.imagekit.io/opzxy97kk/icons8-play-64.png"
            alt="video"
            className="animate-float w-16 h-16"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-[700] text-white transition-all duration-300 hover:scale-110">
              {videos}+
            </h2>

            <h3 className="text-[16px] font-[600] text-gray-400">
              Video Lessons
            </h3>
          </div>
        </div>

        {/* EXPERTS */}
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://ik.imagekit.io/opzxy97kk/icons8-award-64.png"
            alt="expert"
            className="animate-float w-16 h-16"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-[700] text-white transition-all duration-300 hover:scale-110">
              {experts}+
            </h2>

            <h3 className="text-[16px] font-[600] text-gray-400">
              Expert Support
            </h3>
          </div>
        </div>

        {/* SUCCESS */}
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://ik.imagekit.io/opzxy97kk/icons8-trophy-64.png"
            alt="success"
            className="animate-float w-16 h-16"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-[700] text-white transition-all duration-300 hover:scale-110">
              {success}%
            </h2>

            <h3 className="text-[16px] font-[600] text-gray-400">
              Success Rate
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Benefits2;