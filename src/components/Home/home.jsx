import React from 'react';
import './home.css';
import Row from '../Raw/Raw';
import Banner from '../Banner/Banner'
import requests from './requests';
import Navbar from "../Navbar/navbar";
function Home(){
    return(

       <div style={{background:"black",}}>
            <Navbar/>
            <div style={{margin:"0px",marginTop:"4%"}}>
            <Banner />
            </div>
           
        <div className="Home">
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

        </div>
           <div className="footer-dark col-md-12" >

               <div className="footer-container">
                   <div className="row line col-md-12 col-sm-8 col-xs-6">
                       <div><h6><a href="#">Questions? Contact us.</a></h6></div>
                   </div>
                   <div className="row links col-md-9 col-sm-6">
                       <div className="col-md-3 col-6 "><a href="#">FAQ</a></div>
                       <div className="col-md-3 col-6"><a href="#">Help Center</a></div>
                       <div className="col-md-2 col-6 "><a href="#">Terms of Use</a></div>
                       <div className="col-md-1 col-6 "><a href="#">Privacy</a></div>
                   </div>
                   <div className="row links2 col-md-9 col-xs-6 ">
                       <div className="col-md-3 col-xs-3"><a href="#">Cookie Preferences</a></div>
                       <div className="col-md-6 col-xs-"><a href="#">Corporate Information</a></div>
                   </div>
                   <div className="row links3 col-md-9 ">
                       <div className="dropdown">
                           <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                               English
                           </button>
                           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                               <li><a className="dropdown-item" href="#">العربية</a></li>

                           </ul>
                       </div>
                   </div>
               </div>

           </div>
       </div>
    )
}
export default Home;
