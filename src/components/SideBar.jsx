import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () =>{

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if(!isMenuOpen) return null;

    return(
        <div className="p-3 my-2 shadow bg-white h-100 w-40   ">
            <ul className="flex flex-col gap-3">
                <Link to="/"><li>Home</li></Link>
                <li>Subscription</li>
                <li>History</li>
                <li>Library</li>
                <li>Shorts</li>
                <li>Music</li>
            </ul>
        </div>
    )
    }
    
    export default SideBar;