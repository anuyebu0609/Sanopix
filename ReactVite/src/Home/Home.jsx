import Benefits from "../pages/Benefits"
import Benefits2 from "../pages/Benefits2"
import CourseSection from "../pages/CourseSection"
import HeroSection from "../pages/HeroSection"
import JoinNow from "../pages/JoinNow"


const Home=()=>{
  return(
    <div>
        <HeroSection/>
        <Benefits/>
       <CourseSection/>
       <Benefits2/>
       <JoinNow/>
    </div>
  )
}
export default Home