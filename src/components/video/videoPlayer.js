import React,{ useState , useEffect } from 'react';
import QierPlayer from 'qier-player';
function Video(props){
    const [src,setSrc]=useState(props.location.movie.trailer)
    return(
    <QierPlayer
        themeColor={"#af0c14"}
        width={"100"}
        height={720}
        srcOrigin={src}/>
    )}
    export default Video;
