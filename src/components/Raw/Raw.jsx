import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Raw.css';
import mv from './movie.mp4';


const base_url="https://image.tmdb.org/t/p/original/"

function Raw({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([]);


    useEffect(()=>{
        // if [],run once when the row loads and dont run again
       async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
       } 
       fetchData();
    },[fetchUrl])

    console.log(movies);
    
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map( movie =>(
                    <Movie movie={movie} islarge={isLargeRow}/>
                ))}
            </div>
        </div>
        

        
        
    )
}
export function Movie(props) {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <div style={{position:"inherit"}}>
            <div className="HiddenDiv" style={style} onMouseLeave={e => {
                setStyle({display: 'none'})
            }}
                 onMouseEnter={event => {
                     setStyle({display: ''}
                         )
                 }}>
                <div className="miniHidden">
                    <video className="video" autoPlay  muted loop poster='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg'>
                        <source src={mv} type='video/mp4'></source>
                    </video>
                    <div className="icons">
                        <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet"></link>
                        <i class="fa fa-play-circle fa-2x"></i>
                        <i class="fal fa-plus-circle fa-2x"></i>
                        <i class="fal fa-thumbs-up fa-2x"></i>
                        <i class="fal fa-thumbs-down fa-2x"></i>
                        <i class="fal fa-chevron-circle-down fa-2x"></i>
                    </div>
                    <div id='watch'>
                        <span id='match'>98% Match </span>
                        <span id='age'>18+</span>
                        <span id='season'> 3 Seasons </span>
                    </div>
                    <div id="category">
                        <span id="chilling">Chilling</span>
                        <span id="scary">Scary</span>
                        <span id="horror">Horror</span>
                    </div>
                </div>


            </div>
            <img
                onMouseLeave={e => {
                    setStyle({display: 'none'})
                }}
                onMouseEnter={event => {
                    setStyle({display: ''},
                        console.log("enterd"))
                }}
                key={props.movie.id}
                src={`${base_url}${
                    props.isLargeRow ? props.movie.poster_path : props.movie.backdrop_path}`}
                alt={props.movie.name}
            /></div>
    )
}
export default Raw;
// 
