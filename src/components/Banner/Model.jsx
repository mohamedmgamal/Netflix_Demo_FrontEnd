import React, {useEffect, useState} from "react";
import axios from "../Raw/axios";
import requests from "../Home/requests";
import {Col, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../../staticUrls"
import {urls} from "../../staticUrls";
import {Movie} from "../Raw/Raw";

function MydModalWithGrid(props) {
    const [movie, setMovie] = useState(props.movie);
    const [episodes, setEpisodes] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [like,setLike] =useState(movie.likes);
    const [dislike,setDislike]=useState(movie.disLikes);
    const [average,setAverage]=useState(((like/(dislike+like))*100).toFixed());
    useEffect(()=>{
           fetchDate()
    },[
    ]);
    async function fetchDate(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "token "+localStorage.token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://agile-wildwood-89087.herokuapp.com/https://netflix-clone-iti.herokuapp.com/getEp/"+movie.id+"/"+localStorage.userId , requestOptions)
            .then(response => response.json())
            .then(result => setEpisodes(result))
            .catch(error => console.log('error', error));

    }
    function trancate(str,n){
        return str?.length >n ?str.substr(0,n-1)+"...":str;
    }


    return (

        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" {...props}  style={{marginTop:'100px',color:'black',border:'none'}}>
            {/* <Modal.Header closeButton>

      </Modal.Header> */}
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
                                            <Link to={{
                                                pathname: '/video',
                                                search: '?Movie'+props.movie.name,
                                                    src:  props.movie.trailer }} class="fa fa-play-circle fa-2x"></Link>
                                        </div>
                                        <div className='icoon'>
                                            <i class="fa fa-thumbs-up" onClick={()=>{
                                                setLike(like+1)
                                                console.log("likes : "+like)
                                                console.log("dislike : "+dislike)
                                                setAverage(((like/(dislike+like))*100).toFixed())
                                                console.log("average : "+average)
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
                                        </div>
                                        <div className='icoon'>
                                            <i class="fa fa-thumbs-down" onClick={()=>{
                                                setDislike(dislike+1)
                                                setAverage(((like/(dislike+like))*100).toFixed())
                                                var requestOptions = {
                                                    method: 'GET',
                                                    redirect: 'follow',
                                                    headers: {
                                                        'Authorization': 'token '+localStorage.token}
                                                  };
                                                  fetch("https://agile-wildwood-89087.herokuapp.com/https://netflix-clone-iti.herokuapp.com/disLike/"+ props.movie.id, requestOptions)
                                                    .then(response => response.text())
                                                    .then(result => console.log(result))
                                                    .catch(error => console.log('error', error));
                                            }}></i>
                                        </div>




                                    </div>

                                </div>


                            </div>
                        </section>

                    </Col>

                </Row>

                <Row>
                    <Col xs={8} md={7}>
                        <p className='watch'><span className='watching'>{average}% Match </span><span className='year'>2020 </span><span className='age'>{movie.maturity_rating} <br/></span><span className='season'> 3 season </span></p>
                        <p className='top10'>Top 10 in EGYPT</p>
                        <p className='overview'> {trancate(movie?.Description,90)}</p>
                    </Col>
                    <Col xs={4} md={5}>
                        <div className='cast'><span className='sp1'>Cast: </span>{movie.Actors && movie.Actors.join(", ")}</div>
                        <div className='geners'><span className='sp2'>Geners: </span>{movie.Categories && movie.Categories.join(", ")}</div>
                        <div className='show'><span className='sp3'>This show is: </span> suspenseful</div>


                    </Col>

                </Row>
                {episodes && episodes.map( episode =>(
                <Row className="series">
                    <Col className="series-poster" xs={4} md={3}>
                        <Link to={{
                            pathname: '/video',
                            search: '?Movie'+props.movie.name+'S:'+episode.season+"E:"+episode.episode,
                            src:  episode.link }}> <img src={movie.poster} alt={movie.name}/></Link>
                    </Col>
                    <Col xs={8} md={9}>
                        <Row>
                            <Col xs={9} md={9}>{episode.name}</Col>
                            <Col xs={4} md={3} >{episode.duration}&nbsp;Min</Col>

                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="series-description"><span>episode	&nbsp;:	&nbsp;{episode.episode}</span><br/><span>season	&nbsp;:	&nbsp;{episode.season}</span></Col>
                        </Row>
                    </Col>

                </Row>))}




            </Modal.Body>



        </Modal>
    );
}
export default MydModalWithGrid
