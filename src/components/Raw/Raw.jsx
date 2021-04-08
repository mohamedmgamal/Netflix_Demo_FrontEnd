import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Raw.css';
import MydModalWithGrid from "../Banner/Model";
import {Link} from "react-router-dom";



const base_url="https://image.tmdb.org/t/p/original/"

function Raw({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([]);


    useEffect(()=>{
        // if [],run once when the row loads and dont run again
       async function fetchData(){
            const request=await axios.get(fetchUrl);
            console.log(request.data)
            setMovies(request.data)
            return request;
       } 
       fetchData();
    },[fetchUrl])

    console.log(movies);
    
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies && movies.map( movie =>(
                    
                    <Movie movie={movie} islarge={isLargeRow}/>
                ))}
            </div>
        </div>
        

        
        
    )
}
export function Movie(props) {
    const [style, setStyle] = useState({display: 'none'});
    const [modalShow, setModalShow] = useState(false);
    const like=props.movie.likes;
    const dislike=props.movie.disLikes;
    const average=Math.round(like/(dislike+like))*100;
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
                    <video className="video" autoPlay  muted loop poster={props.movie.poster}>
                        <source src={props.movie.trailer} type='video/mp4'></source>
                    </video>
                    <div className="icons">
                        <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet"></link>
                        <Link to={{
                            pathname: '/video',
                            search: '?Movie'+props.movie.name,
                            movie:  props.movie }}class="fa fa-play-circle fa-2x"></Link>
                        <i class="fal fa-plus-circle fa-2x"></i>
                        <i class="fal fa-thumbs-up fa-2x"></i>      
                        <i class="fal fa-thumbs-down fa-2x"></i>
                        <i class="fal fa-chevron-circle-down fa-2x" onClick={()=>{setModalShow(true);setStyle({display: "none"})}}></i>
                    </div>
                    <div id='watch'>
                        <span id='match'>{average} % Match </span>
                        <span id='age'>{props.movie.maturity_rating}</span>
                        <span id='season'> 3 Seasons </span>
                    </div>
                    <div id="category">
                        <span id="chilling">{props.movie.Categories[0]}</span>
                        <span id="scary">{props.movie.Categories[1]}</span>
                        <span id="horror">{props.movie.Categories[2]}</span>
                    </div>
                    <MydModalWithGrid show={modalShow} movie={props.movie} onHide={() => setModalShow(false)} />
                </div>


            </div>
            <img className="Raw-img"
                onMouseLeave={e => {
                    setStyle({display: 'none'})
                }}
                onMouseEnter={event => {
                    setStyle({display: ''},
                        console.log("enterd"))
                }}
                key={props.movie.id}
                // src={`${base_url}${
                //     props.isLargeRow ? props.movie.poster_path : props.movie.backdrop_path}`}
                src={props.movie.poster}
                alt={props.movie.name}
            /></div>
    )
}
export default Raw;