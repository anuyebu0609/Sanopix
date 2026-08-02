import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Header from "./Header";
// import HeroSection from "../pages/HeroSection"
// import Benefits from "../pages/Benefits";
// import CourseSection from "../pages/CourseSection";
// import Benefits2 from "../pages/Benefits2";
// import JoinNow from "../pages/JoinNow";
// import Footer from "./Footer";
import {createBrowserRouter, Outlet,  RouterProvider} from "react-router-dom"
import Router from "../route/Router";
// import ErrorPage from "../pages/ErrorPage";
// import CourseDetailSection from "../pages/CourseDetailSection";
// import AboutUs from "../pages/AboutUs";
// import ContactUs from "../pages/ContactUs";
// import JoinCourse from "../pages/JoinCourse";





const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<RouterProvider router={Router}/>);