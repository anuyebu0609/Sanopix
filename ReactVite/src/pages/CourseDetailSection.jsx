import { useNavigate, useParams } from "react-router-dom";
import { CoursseData } from "../Components/CoursseData";


const CourseDetailSection=()=>{
const { Id } = useParams();
const navigate = useNavigate();

//     const CoursseData=[{
//         Id:1,
//         CourseName:"Adobe Premiere Pro",
//         CoursePreview1:"Master Professional Editing",
//         CoursePreview2:"with Premiere Pro",
//         Duration:"10",
//         Fee:5999,
//         Rating:4.5,
//         Review:456,
//         Level:"Begineer",
//         Img:"https://ik.imagekit.io/anusha2001/course/icons8-adobe-premiere-pro-480.png?updatedAt=1782619456818",
//     CourseDescription: "Adobe Premiere Pro is one of the world's leading professional video editing software used by filmmakers, YouTubers, content creators, and media professionals. In this course, you'll learn everything from the basics to advanced editing techniques, including video trimming, transitions, color correction, audio editing, motion graphics integration, keyframing, effects, multicam editing, subtitles, and professional video export settings. By the end of the course, you'll be able to create high-quality videos for YouTube, social media, films, advertisements, and client projects with confidence."

//     },
// {
//         Id:2,
//         CourseName:"After Effects Basics",
//         CoursePreview1:"Create Stunning Animations",
//         CoursePreview2:"and Visual Effeccts",
//         Duration:"9",
//         Fee:4999,
//         Rating:4.2,
//         Review:256,
//         Level:"Begineer",
//         Img:"https://ik.imagekit.io/anusha2001/icons8-adobe-after-effects-144.png",
//         CourseDescription: "Learn Adobe After Effects from the ground up and create stunning motion graphics, visual effects, and professional animations. This beginner-friendly course covers the complete workflow, including the interface, keyframes, animation principles, shape layers, text animations, masking, tracking, effects, transitions, green screen editing, and rendering. You'll build real-world projects such as logo animations, social media reels, intros, outros, lower thirds, and promotional videos. By the end of the course, you'll have the confidence to create engaging motion graphics and visual effects for YouTube, Instagram, advertisements, and professional client projects."

//     }
// ,
// {
//         Id:3,
//         CourseName:"DaVinci Resolve",
//         CoursePreview1:"Colour grading,audio & editing",
//         CoursePreview2:"all in one tool",
//         Duration:"12",
//         Fee:6999,
//         Rating:4.1,
//         Review:556,
//         Level:"Intermediate",
//         Img:"https://ik.imagekit.io/anusha2001/icons8-davinci-resolve-144.png",
//         CourseDescription: "Master DaVinci Resolve, the industry-leading software for professional video editing, color grading, visual effects, and audio post-production. This course covers the complete workflow, including media management, timeline editing, transitions, advanced color correction, cinematic color grading, Fairlight audio editing, Fusion visual effects, motion graphics, multicam editing, and exporting high-quality videos. Through hands-on projects and real-world examples, you'll gain the skills to create professional films, YouTube videos, commercials, social media content, and client projects with confidence."

//     },
// {
//         Id:4,
//         CourseName:"Final Cut Pro",
//         CoursePreview1:"Professional Editing for Mac",
//         CoursePreview2:"Mac users",
//         Duration:"9",
//         Fee:7999,
//         Rating:4.8,
//         Review:656,
//         Level:"Intermediate",
//         Img:"https://ik.imagekit.io/anusha2001/icons8-final-cut-pro-new-144.png",
//         CourseDescription: "Master Final Cut Pro, Apple's professional video editing software designed exclusively for macOS. This course takes you from the fundamentals to advanced editing techniques, covering media management, timeline editing, transitions, effects, color correction, audio enhancement, motion graphics, multicam editing, green screen compositing, and optimized export settings. Through practical projects, you'll learn to create high-quality YouTube videos, cinematic films, advertisements, social media content, and professional client projects. By the end of the course, you'll have the skills and confidence to edit videos efficiently using one of the fastest and most powerful editing tools available for Mac users."

//     }]
  const course = CoursseData.find(
    (item) => item.Id === Number(Id)
  );
  if (!course) {
    return (
      <div className="text-center py-20 text-3xl font-bold">
        Course Not Found
      </div>
    );
  }
    return(
        <div>
<section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">

    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <img
          className="w-full dark:hidden"
          src={course.Img}
          alt=""
        />
        <img
          className="w-full hidden dark:block"
          src={course.Img}
          alt=""
        />
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
{course.CourseName}
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
            ${course.Fee}
          </p>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
              ({course.Rating})
            </p>
            <a
              href="#"
              className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
            >
              {course.Review} Reviews
            </a>
          </div>
        </div>
        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <a
            href="#"
            title=""
            className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            Add to favorites
          </a>
<button
  onClick={() =>
    navigate("/JoinCourse", {
      state: {
        courseName: course.CourseName,
        fee: course.Fee,
        id: course.Id,
      },
    })
  }
  className="text-white mt-4 sm:mt-0 bg-[#FEC827] hover:bg-black hover:text-white duration-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
>
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M12 5l7 7-7 7"
    />
  </svg>

  Enroll Now
</button>
        </div>
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
        <p className="mb-6 text-gray-500 dark:text-gray-400">
{course.CourseDescription}
        </p>

      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default CourseDetailSection