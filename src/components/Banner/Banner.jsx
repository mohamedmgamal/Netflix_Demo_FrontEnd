import React,{ useState , useEffect } from 'react';
import axios from '../Raw/axios';
import requests from '../Home/requests';
import './Banner.css';
import bg from './bg.mp4'


function    Banner() {
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
        <React.Fragment>
        
        {/* // <header className='banner' style={{ */}
        {/* //     backgroundSize:'cover',
        //     backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //     backgroundPosition:"center center",
        // }}> */}
            <div className="video-background ">
                        <video id='bgvid' autoPlay  muted className='col-12' poster='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg'>
                            <source src={bg} type='video/mp4'></source>
                        </video>  
            
            <div className="banner_contents col-6" >
                <h1 className="banner_title col-1" style={{fontsize:"10vw",color:"white"}}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons row">
                    <button className="banner_button btn btn-lg col-5">
                    <i class="fa fa-play" ></i>  Play
                    </button>
                    <button className="banner_button btn btn-lg col-5">
                    <i class="fa fa-info-circle"></i> more info
                    </button>
                </div>
                <div className="col-12">
                <div className="banner_description col-6">
                    {/*{trancate(movie?.overview,200)}*/}
                    <p style={{fontsize:"1vw",color:"white"}}>{movie.overview}</p>
                </div>
                </div>
                

            </div>
            </div>
            </React.Fragment>

            

        // </header>
    )
}

export default Banner
