import React,{ useEffect, useState } from 'react';
import './MyList.css'
import axios from '../Raw/axios'
import MydModalWithGrid from "../Banner/Model";
import {Link} from "react-router-dom";
function MyList({title,fetchUrl}) {
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
    
        return(
            <React.Fragment>
            
                <div className="row col-12">
                    
                    <div className="col-2">col</div>
                    {/* <div className="col-2">col</div>
                    <div className="col-2">col</div>
                    <div className="col-2">col</div>
                    <div className="col-2">col</div> */}
                    
                    
                </div>
               
            
            </React.Fragment>
        )
            

        
    
}
export function Movie(props) {
    const [style, setStyle] = useState({display: 'none'});
    const [modalShow, setModalShow] = useState(false);
    const [like,setLike] =useState(props.movie.likes);
    const [dislike,setDislike]=useState(props.movie.disLikes);
    const [average,setAverage]=useState(((like/(dislike+like))*100).toFixed());
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
                            src:  props.movie.trailer }}class="fa fa-play-circle fa-2x"></Link>
                        <i class="fal fa-plus-circle fa-2x"></i>
                        <i class="fal fa-thumbs-up fa-2x" onClick={()=>{
                                                setLike(like+1)
                            console.log("likes : "+like)
                            console.log("dislike : "+dislike)
                                                 setAverage(((like/(dislike+like))*100).toFixed())
                                                var requestOptions = {
                                                    method: 'GET',
                                                    redirect: 'follow',
                                                    headers: {
                                                        'Authorization': 'token '+localStorage.token}

                                                };
                                                  
                                                  fetch("https://agile-wildwood-89087.herokuapp.com/https://netflix-clone-iti.herokuapp.com/like/"+ props.movie.id, requestOptions)
                                                    .then(response => response.text())
                                                    .then(result => console.log(result))
                                                    .catch(error => console.log('error', error));
                                            }}></i>      
                        <i class="fal fa-thumbs-down fa-2x" onClick={()=>{
                                                setDislike(dislike+1)
                            console.log("likes : "+like)
                            console.log("dislike : "+dislike)
                                            setAverage(((like/(dislike+like))*100).toFixed())
                                                var requestOptions = {
                                                    method: 'GET',
                                                    redirect: 'follow',
                                                    headers: {
                                                        'Authorization': 'token '+localStorage.token}
                                                  };
                                                  
                                                  fetch("https://netflix-clone-iti.herokuapp.com/disLike/"+ props.movie.id, requestOptions)
                                                    .then(response => response.text())
                                                    .then(result => console.log(result))
                                                    .catch(error => console.log('error', error));
                                            }}></i>
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
                    {modalShow && <MydModalWithGrid show={modalShow} movie={props.movie} onHide={() => setModalShow(false)} />}
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
export default MyList;