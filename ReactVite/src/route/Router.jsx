import { createBrowserRouter } from "react-router-dom" 
import Applayout from "../Applayout/Applayout"
import Home from "../Home/Home"
import CourseSection from "../pages/CourseSection"
import CourseDetailSection from "../pages/CourseDetailSection"
import AboutUs from "../pages/AboutUs"
import ContactUs from "../pages/ContactUs"
import JoinCourse from "../pages/JoinCourse"
import ErrorPage from "../pages/ErrorPage"
const Router=createBrowserRouter([{
  path:"/",
  element:<Applayout/>,
  children:[{
    path:"/",
    element:<Home/>
  },
{
  path:"/Course",
  element:<CourseSection/>
},
{
  path:"/CourseDetail/:Id",
  element:<CourseDetailSection/>
},
{
  path:"/About",
  element:<AboutUs/>
},
{
  path:"/Contact",
  element:<ContactUs/>
},
{
  path:"/JoinCourse",
  element:<JoinCourse/>
}
],
errorElement:<ErrorPage/>
}]
)
export default Router