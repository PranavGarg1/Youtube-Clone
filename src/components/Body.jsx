import { Outlet } from "react-router-dom";
import Main from "./Main";
import SideBar from "./SideBar";

const Body = () =>{
    return(
        <div className="flex flex-row min-h-full">
            <SideBar/>
            <Outlet/>
        </div>
    )
    }
    
    export default Body;