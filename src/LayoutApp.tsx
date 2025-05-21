import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
function LayoutApp() {
    return(
        <div>          
             <Navbar/>
             <Outlet/> 
        </div>
    );
}
export default LayoutApp;