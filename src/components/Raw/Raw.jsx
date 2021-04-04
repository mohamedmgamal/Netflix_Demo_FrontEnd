import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Raw.css'

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
                <div className="miniHidden"><h1>{props.movie.name}</h1></div>


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
