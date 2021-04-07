import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Raw.css';
import {Modal,Button,Row,Col,Form,Container} from 'react-bootstrap';
import requests from '../Home/requests';


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
                        <i class="fa fa-play-circle fa-2x"></i>
                        <i class="fal fa-plus-circle fa-2x"></i>
                        <i class="fal fa-thumbs-up fa-2x"></i>{props.movie.likes}       
                        <i class="fal fa-thumbs-down fa-2x"></i>{props.movie.dislikes}
                        <i class="fal fa-chevron-circle-down fa-2x" onClick={() => setModalShow(true)}></i>
                    </div>
                    <div id='watch'>
                        <span id='match'>98% Match </span>
                        <span id='age'>{props.movie.maturity_rating}</span>
                        <span id='season'> 3 Seasons </span>
                    </div>
                    <div id="category">
                        <span id="chilling">{props.movie.Categories[0]}</span>
                        <span id="scary">{props.movie.Categories[1]}</span>
                        <span id="horror">{props.movie.Categories[2]}</span>
                    </div>
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
            />
             <Modaal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
    )
}
export default Raw;
// 
function Modaal(props) {
  const [movie, setMovie] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(requests.fetchUrl);
        console.log(request.data);
        setMovie(request.data);
        return request;
      }
      fetchData();
    },[]);
    function trancate(str,n){
        return str?.length >n ?str.substr(0,n-1)+"...":str;
    }
    console.log(movie)
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter " style={{marginTop:'100px',color:'black',border:'none'}}>
      <Modal.Body className="show-grid" closeButton style={{backgroundColor:'black',opacity:'0.9',}}>
       
          <Row>
            <Col xs={12} md={12}>
        <section id='popup' className='pb-8'>
            <div className='jumbotron jumbotron-fluid col-12'>
                <video autoPlay  muted loop preload="metadata" poster={movie.poster} >
                    <source src={movie.trailer} type='video/mp4'></source>
                </video>
                <div className='co text-light'>
                <h1 className="display-4">
                <img src={movie.bigPoster} alt={movie.name}/>
                </h1>
                 <div className="popup_buttons row">
                    <div className="icoon">
                    <i class="fa fa-play-circle fa-2x"></i>
                    </div>
                    <div className='icoon'>
                    <i class="fa fa-thumbs-up"></i>
                    </div>
                     <div className='icoon'>
                   <i class="fa fa-thumbs-down"></i>
                    </div>
                    
                    
                    
                   
                </div>
                 
                </div>


            </div>
        </section>
             
            </Col>
           
          </Row>

          <Row>
            <Col xs={8} md={7}>
              <p className='watch'><span className='watching'>98% Match </span><span className='year'>2020 </span><span className='age'>{movie.maturity_rating} <br/></span><span className='season'> 3 season </span></p>
              <p className='top10'>Top 10 in EGYPT</p>
              <p className='overview'> {trancate(movie?.overview,80)}</p>
            </Col>
            <Col xs={4} md={5}>
            <div className='cast'><span className='sp1'>Cast: </span>{movie.Actors}</div>
            <div className='geners'><span className='sp2'>Geners: </span>{movie.Categories}</div>
            <div className='show'><span className='sp3'>This show is: </span> suspenseful</div>

              
            </Col>
            
          </Row>
        
      </Modal.Body>
      
       
     
    </Modal>
  );
}