const VideoCard = ({info}) =>{
    
    const {snippet , statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
    const {viewCount} = statistics;

    return(<>
        <div className="video-card p-2 mx-8 w-72">
            <img className="" src={thumbnails.high.url} alt={title} />
            <h3>{title}</h3>
            <p>{channelTitle}</p>
            <p>{viewCount} views</p>
        </div>
    </>)
}

export default VideoCard;