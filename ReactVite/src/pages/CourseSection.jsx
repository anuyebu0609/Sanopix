import { Link} from "react-router-dom"
import Reveal from "../Components/Reveal";


const CourseCards = (props) => {
    
  return (
    <Link to={`/CourseDetail/${props.Id}`}>
      <div className="relative min-h-[320px] overflow-hidden flex flex-col justify-between border-2 border-[#FEC827] rounded-[20px] bg-white p-5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(254,200,39,0.25),0_5px_15px_rgba(0,0,0,0.12)]">

        {/* Top Right Yellow Shape */}
        <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#FEC827] rounded-bl-[80px]"></div>

        {/* Logo */}
        <div className="flex justify-center relative z-10">
          <img
            src={props.Img}
            alt={props.CourseName}
            className="w-[80px] h-[80px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col mt-4 relative z-10">
          <h2 className="text-[20px] font-semibold text-black leading-6 min-h-[48px]">
            {props.CourseName}
          </h2>

          <p className="text-[14px] text-gray-700 mt-2">
            {props.CoursePreview1}
          </p>

          <p className="text-[14px] text-gray-700">
            {props.CoursePreview2}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-200 relative z-10">

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FEC827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="10" x2="14" y1="2" y2="2" />
              <line x1="12" x2="15" y1="14" y2="11" />
              <circle cx="12" cy="14" r="8" />
            </svg>

            <span className="text-[14px] font-semibold">
              {props.Duration} Hrs
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FEC827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 20h.01" />
              <path d="M7 20v-4" />
              <path d="M12 20v-8" />
              <path d="M17 20V8" />
              <path d="M22 4v16" />
            </svg>

            <span className="text-[14px] font-semibold">
              {props.Level}
            </span>
          </div>

        </div>

      </div>
    </Link>
  );
};


const CourseSection = () => {
    const CoursseData=[{
        Id:1,
        CourseName:"Adobe Premiere Pro",
        CoursePreview1:"Master Professional Editing",
        CoursePreview2:"with Premiere Pro",
        Duration:"10",
        Fee:5999,
        Rating:4.5,
        Review:456,
        Level:"Begineer",
        Img:"https://ik.imagekit.io/anusha2001/course/icons8-adobe-premiere-pro-480.png?updatedAt=1782619456818",
    CourseDescription: "Adobe Premiere Pro is one of the world's leading professional video editing software used by filmmakers, YouTubers, content creators, and media professionals. In this course, you'll learn everything from the basics to advanced editing techniques, including video trimming, transitions, color correction, audio editing, motion graphics integration, keyframing, effects, multicam editing, subtitles, and professional video export settings. By the end of the course, you'll be able to create high-quality videos for YouTube, social media, films, advertisements, and client projects with confidence."

    },
{
        Id:2,
        CourseName:"After Effects Basics",
        CoursePreview1:"Create Stunning Animations",
        CoursePreview2:"and Visual Effeccts",
        Duration:"9",
        Fee:4999,
        Rating:4.2,
        Review:256,
        Level:"Begineer",
        Img:"https://ik.imagekit.io/anusha2001/icons8-adobe-after-effects-144.png",
        CourseDescription: "Learn Adobe After Effects from the ground up and create stunning motion graphics, visual effects, and professional animations. This beginner-friendly course covers the complete workflow, including the interface, keyframes, animation principles, shape layers, text animations, masking, tracking, effects, transitions, green screen editing, and rendering. You'll build real-world projects such as logo animations, social media reels, intros, outros, lower thirds, and promotional videos. By the end of the course, you'll have the confidence to create engaging motion graphics and visual effects for YouTube, Instagram, advertisements, and professional client projects."

    }
,
{
        Id:3,
        CourseName:"DaVinci Resolve",
        CoursePreview1:"Colour grading,audio & editing",
        CoursePreview2:"all in one tool",
        Duration:"12",
        Fee:6999,
        Rating:4.1,
        Review:556,
        Level:"Intermediate",
        Img:"https://ik.imagekit.io/anusha2001/icons8-davinci-resolve-144.png",
        CourseDescription: "Master DaVinci Resolve, the industry-leading software for professional video editing, color grading, visual effects, and audio post-production. This course covers the complete workflow, including media management, timeline editing, transitions, advanced color correction, cinematic color grading, Fairlight audio editing, Fusion visual effects, motion graphics, multicam editing, and exporting high-quality videos. Through hands-on projects and real-world examples, you'll gain the skills to create professional films, YouTube videos, commercials, social media content, and client projects with confidence."

    },
{
        Id:4,
        CourseName:"Final Cut Pro",
        CoursePreview1:"Professional Editing for Mac",
        CoursePreview2:"Mac users",
        Duration:"9",
        Fee:7999,
        Rating:4.8,
        Review:656,
        Level:"Intermediate",
        Img:"https://ik.imagekit.io/anusha2001/icons8-final-cut-pro-new-144.png",
        CourseDescription: "Master Final Cut Pro, Apple's professional video editing software designed exclusively for macOS. This course takes you from the fundamentals to advanced editing techniques, covering media management, timeline editing, transitions, effects, color correction, audio enhancement, motion graphics, multicam editing, green screen compositing, and optimized export settings. Through practical projects, you'll learn to create high-quality YouTube videos, cinematic films, advertisements, social media content, and professional client projects. By the end of the course, you'll have the skills and confidence to edit videos efficiently using one of the fastest and most powerful editing tools available for Mac users."

    }]
    return (
        <div className="max-w-[100%] py-6 space-y-8">
          <Reveal direction="up">
            <div className="w-[95%] md:w-[90%] mx-auto ">
<h2 className="text-[20px] font-[600] text-[#FEC827]">OUR COURSES</h2>
<h1 className="text-[28px] font-[700] text-black">Choose Your Learning Course</h1>
            </div>
            </Reveal>
            <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

{
    CoursseData.map((items,index)=>{
        return(
              <Reveal
      key={items.Id}
      direction="up"
      delay={index * 0.15}
    >
            <CourseCards Id={items.Id} CourseName={items.CourseName} CoursePreview1={items.CoursePreview1} 
            CoursePreview2={items.CoursePreview2} Duration={items.Duration} Level={items.Level} Img={items.Img}/>
            </Reveal>
        )
    })
}

            </div>
        </div>
    );
}

export default CourseSection;