import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Applayout=()=>{
    return(
       <div>
        <Header/>
<Outlet/>
       <Footer/>
       </div>
    )
}
export default Applayout