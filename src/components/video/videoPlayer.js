import React,{ useState , useEffect } from 'react';
import QierPlayer from 'qier-player';
function Video(props){
    const [src,setWidth]=useState(props.location.src)
    return(
    <QierPlayer
        themeColor={"#af0c14"}
        width={"100"}
        height={720}
        srcOrigin="https://ia803404.us.archive.org/20/items/godzilla-vs-kong-trailer-2-2021/GODZILLA%20VS%20KONG%20Trailer%202%20%282021%29.mp4" />
    )}
    export default Video;
