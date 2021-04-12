import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion,Card, Container} from 'react-bootstrap';
import './MyList.css'
import axios from '../Raw/axios'
import MydModalWithGrid from "../Banner/Model";
import {Link} from "react-router-dom";
import "../../staticUrls"
import {urls} from "../../staticUrls";
import NavBar from "../Navbar/navbar";
import '../Banner/Banner.css'
import '../Raw/Raw.css'
import dateFormat from 'dateformat';

function MyList({title,fetchUrl}) {
    const [movies,setMovies]=useState();


    useEffect(()=>{
        // if [],run once when the row loads and dont run again
       async function fetchData(){
           var myHeaders = new Headers();
           myHeaders.append("Authorization", "token "+localStorage.token);

           var requestOptions = {
               method: 'GET',
               headers: myHeaders,
               redirect: 'follow'
           };

           fetch("https://agile-wildwood-89087.herokuapp.com/https://netflix-clone-iti.herokuapp.com/history/"+localStorage.userId, requestOptions)
               .then(response => response.json())
               .then(result => setMovies(result))
               .catch(error => console.log('error', error));
       } 
       fetchData();
    },[fetchUrl])
    
        return(
            <React.Fragment>
            <NavBar/>
                <div className="row list-dark col-lg-11 col-xs-6">
                    {movies&& movies.map( movie =>(
                        <Movie movie={movie.show} date={movie.date}/>))} 
                        
                </div>
               
                <div className="footer-dark col-md-12">

                <div className="footer-container">
                    <div className="row line col-md-12 col-sm-8 col-xs-6">
                        <div><h6><a href="#" >Questions? Contact us.</a></h6></div>
                    </div>
                    <div className="row links col-md-9 col-sm-6">
                        <div class="col-md-3 col-6 "><a href="#">FAQ</a></div>
                        <div class="col-md-3 col-6"><a href="#">Help Center</a></div>
                        <div class="col-md-2 col-6 "><a href="#">Terms of Use</a></div>
                        <div class="col-md-1 col-6 "><a href="#">Privacy</a></div>
                    </div>
                    <div class="row links2 col-md-9 col-xs-6 ">
                        <div class="col-md-3 col-xs-3"><a href="#">Cookie Preferences</a></div>
                        <div class="col-md-6 col-xs-"><a href="#">Corporate Information</a></div>
                    </div>
                    <div class="row links3 col-md-9 ">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">العربية</a></li>

                            </ul>
                        </div>
                    </div>
                </div>

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
    const date=dateFormat(props.date,"mmmm dS, yyyy")
    return (
    
        <div style={{position:"inherit", marginTop:"100px",marginLeft:"30px",marginRight:"15px"}}>
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
                    <span id="date">{date}</span>
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
                        {props.movie.Categories && props.movie.Categories.map( categorie =>(
                            <span id="chilling">{categorie}</span>))}
                    </div>
                    {modalShow && <MydModalWithGrid show={modalShow} movie={props.movie} onHide={() => setModalShow(false)} />}
                </div>


            </div>
            <img className="Raw-img list"
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
