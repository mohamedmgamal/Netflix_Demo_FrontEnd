import React,{ useState , useEffect } from 'react';
import axios from '../Raw/axios';
import requests from '../Home/requests';
import './Banner.css';

import {Modal,Button,Row,Col,Form,Container} from 'react-bootstrap';
import MydModalWithGrid from "./Model";
import {Link} from "react-router-dom";


function Banner() {
    const [movie, setMovie] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchBanner);
            console.log(request.data[0])
            setMovie(request.data[0]);
            return request;
        }

        fetchData();
    }, []);

    function trancate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <React.Fragment>
            {movie.trailer && <div>
                <section id='jumtron' className='pb-5'>
                    <div className='jumbotron jumbotron-fluid col-12' style={{height: "100vh"}}>
                        <video autoPlay muted loop poster={movie.poster}>
                            <source src={movie.trailer} type='video/mp4'></source>
                        </video>
                        <div className='container co text-light ' style={{marginLeft: "0%", marginTop: "20%"}}>
                            <div className="display-4">
                                <img src={movie.bigPoster} alt={movie.name}/>
                            </div>
                            <div className="banner_buttons row">
                                <Link to={{
                                    pathname: '/video',
                                    search: '?Movie'+movie.name,
                                    movie:  movie }}  className="banner_buttona ">
                                    <i class="fa fa-play"></i> Play
                                </Link>
                                <button className="banner_button " onClick={() => setModalShow(true)}>
                                    <i class="fa fa-info-circle"></i> more info
                                </button>
                            </div>
                            <div className="banner_description col-6">
                                {trancate(movie?.Description, 100)}
                            </div>
                        </div>


                    </div>
                </section>

                <MydModalWithGrid show={modalShow} movie={movie} onHide={() => setModalShow(false)}/>
            </div>}
        </React.Fragment>


    )
}

export default Banner



// function MydModalWithGrid(props) {
//     const [movie, setMovie] = useState([]);
//     const [lgShow, setLgShow] = useState(false);
//     const like=movie.likes;
//     const dislike=movie.disLikes;
//     const average=Math.round(like/(dislike+like))*100;
//     useEffect(()=>{
//       async function fetchData(){
//         const request = await axios.get(requests.fetchBanner);
//         console.log(request.data);
//         setMovie(request.data[0]);
//         return request;
//       }
//       fetchData();
//     },[]);
//     function trancate(str,n){
//         return str?.length >n ?str.substr(0,n-1)+"...":str;
//     }
//
//
//   return (
//
//     <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" {...props}  style={{marginTop:'100px',color:'black',border:'none'}}>
//       {/* <Modal.Header closeButton>
//
//       </Modal.Header> */}
//       <Modal.Body className="show-grid" closeButton style={{backgroundColor:'black',opacity:'0.9',}}>
//
//           <Row>
//             <Col xs={12} md={12}>
//         <section id='popup' className='pb-8'>
//             <div className='jumbotron jumbotron-fluid col-12'>
//                 <video autoPlay  muted loop preload="metadata" poster={movie.poster} >
//                     <source src={movie.trailer} type='video/mp4'></source>
//                 </video>
//                 <div className='co text-light'>
//                 <h1 className="display-4">
//                 <img src={movie.bigPoster} alt={movie.name}/>
//                 </h1>
//                  <div className="popup_buttons row">
//                     <div className="icoon">
//                     <i class="fa fa-play-circle fa-2x"></i>
//                     </div>
//                     <div className='icoon'>
//                     <i class="fa fa-thumbs-up"></i>
//                     </div>
//                      <div className='icoon'>
//                    <i class="fa fa-thumbs-down"></i>
//                     </div>
//
//
//
//
//                 </div>
//
//                 </div>
//
//
//             </div>
//         </section>
//
//             </Col>
//
//           </Row>
//
//           <Row>
//             <Col xs={8} md={7}>
//               <p className='watch'><span className='watching'>{average}% Match </span><span className='year'>2020 </span><span className='age'>{movie.maturity_rating} <br/></span><span className='season'> 3 season </span></p>
//               <p className='top10'>Top 10 in EGYPT</p>
//               <p className='overview'> {trancate(movie?.Description,90)}</p>
//             </Col>
//             <Col xs={4} md={5}>
//             <div className='cast'><span className='sp1'>Cast: </span>{movie.Actors && movie.Actors.join(", ")}</div>
//             <div className='geners'><span className='sp2'>Geners: </span>{movie.Categories && movie.Categories.join(", ")}</div>
//             <div className='show'><span className='sp3'>This show is: </span> suspenseful</div>
//
//
//             </Col>
//
//           </Row>
//           <Row className="series">
//             <Col className="series-poster" xs={4} md={3}>
//               <img src={movie.poster} alt={movie.name}/>
//             </Col>
//             <Col xs={8} md={9}>
//               <Row>
//               <Col xs={9} md={9}>{movie.name}</Col>
//               <Col xs={4} md={3}>58 min</Col>
//
//               </Row>
//               <Row>
//                 <Col xs={12} md={12} className="series-description">{trancate(movie?.Description,80)}</Col>
//               </Row>
//             </Col>
//
//           </Row>
//
//
//
//       </Modal.Body>
//
//
//
//     </Modal>
//   );
// }
