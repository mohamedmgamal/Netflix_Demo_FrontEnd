import React,{ useState , useEffect } from 'react';
import axios from '../Raw/axios';
import requests from '../Home/requests';
import './Banner.css';
import bg from './bg.mp4';
import {Modal,Button,Row,Col,Form,Container} from 'react-bootstrap';


function Banner() {
    const [movie, setMovie] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    

    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1) ]);
        return request;
      }
      fetchData();
    },[]);
    function trancate(str,n){
        return str?.length >n ?str.substr(0,n-1)+"...":str;
    }
    return (
        <React.Fragment>
        <section id='jumtron' className='pb-5'>
            <div className='jumbotron jumbotron-fluid col-12'style={{height:"100vh"}}>
                <video autoPlay  muted loop poster='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg' >
                           <source src={bg} type='video/mp4'></source>
                </video>
                <div className='container co text-light 'style={{marginLeft:"0%",marginTop:"20%"}}>
                <h1 className="display-4">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                 <div className="banner_buttons row">
                    <button className="banner_buttona ">
                    <i class="fa fa-play"></i>  Play
                    </button>
                    <button className="banner_button " onClick={() => setModalShow(true)}>
                    <i class="fa fa-info-circle"></i> more info
                    </button>
                </div>
                 <div className="banner_description col-6">
                    {trancate(movie?.overview,200)}
                </div>
                </div>


            </div>
        </section>
        
             <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </React.Fragment>

            

       
    )
}

export default Banner



function MydModalWithGrid(props) {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1) ]);
        return request;
      }
      fetchData();
    },[]);
    function trancate(str,n){
        return str?.length >n ?str.substr(0,n-1)+"...":str;
    }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter " style={{marginTop:'100px',color:'black',border:'none'}}>
      {/* <Modal.Header closeButton>
        
      </Modal.Header> */}
      <Modal.Body className="show-grid" closeButton style={{backgroundColor:'black',opacity:'0.9',}}>
       
          <Row>
            <Col xs={12} md={12}>
        <section id='popup' className='pb-8'>
            <div className='jumbotron jumbotron-fluid col-12'>
                <video autoPlay  muted loop poster='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg' >
                    <source src={bg} type='video/mp4'></source>
                </video>
                <div className='co text-light'>
                <h1 className="display-5">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                 <div className="popup_buttons row">
                    <button className="popup_buttona ">
                    <i class="fa fa-play"></i>  Play
                    </button>
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
              <p className='watch'><span className='watching'>98% Match </span><span className='year'>2020 </span><span className='age'>18+</span><span className='season'> 3 season </span></p>
              <p className='top10'>Top 10 in EGYPT</p>
              <p className='overview'> {trancate(movie?.overview,80)}</p>
            </Col>
            <Col xs={4} md={5}>
            <div className='cast'><span className='sp1'>Cast: </span>Ahmed Alaa</div>
            <div className='geners'><span className='sp2'>Geners: </span>Crime,Action</div>
            <div className='show'><span className='sp3'>This show is: </span> susbenseful</div>

              
            </Col>
            
          </Row>
        
      </Modal.Body>
      
       
     
    </Modal>
  );
}
