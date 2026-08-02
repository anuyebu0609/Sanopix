const Benefits = () => {
  const benefits = [
    {
      icon: "📚",
      title: "Beginner to Advanced",
      desc: "Step-by-Step learning path for all Levels",
    },
    {
      icon: "💻",
      title: "Practical Projects",
      desc: "Learn by doing real-world projects",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      desc: "Learn from industry professionals",
    },
    {
      icon: "🏆",
      title: "Certificates Included",
      desc: "Get certified and boost your creative career",
    },
  ];

  return (
    <section className="w-full bg-black py-12">
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              p-6
              rounded-2xl
              bg-[#111]
              transition-all
              duration-500
              hover:scale-105
              hover:bg-[#181818]
              hover:shadow-[0_15px_40px_rgba(254,200,39,0.15)]
              cursor-pointer
            "
          >
            {/* Glow Effect */}
            <div
              className="
                absolute
                -top-10
                -right-10
                h-24
                w-24
                rounded-full
                bg-[#FEC827]
                opacity-0
                blur-3xl
                transition-all
                duration-500
                group-hover:opacity-20
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#FEC827]
                text-3xl
                transition-all
                duration-500
                group-hover:-translate-y-2
                group-hover:rotate-6
                group-hover:shadow-[0_0_30px_rgba(254,200,39,0.8)]
              "
            >
              {item.icon}
            </div>

            {/* Content */}
            <h3
              className="
                text-xl
                font-bold
                text-white
                mb-2
                transition-all
                duration-300
                group-hover:text-[#FEC827]
              "
            >
              {item.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;