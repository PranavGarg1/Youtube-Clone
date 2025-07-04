import { useEffect , useState } from "react";
import { YOUTUBE_VIEOS_API } from "../utils/constsants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () =>{

    const [videos, setVideos] = useState([]);   

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_VIEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }

    return(
        <div className="flex flex-wrap  justify-center">
          {
            videos.map((video)=> 
            <div key={video.id} >
            <Link to={"/watch?v=" + video.id}><VideoCard info = {video}/></Link>
             </div>
            )
          }
            
        </div>
    )
    }
    
    export default VideoContainer;