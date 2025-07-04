import { useSearchParams } from "react-router-dom";

const WatchPage = () =>{

    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"));
    return(
        <div>
            <iframe 
            width="800"
            height="400" 
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>

            </iframe>
        </div>
    );
}

export default WatchPage;