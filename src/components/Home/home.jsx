import React from 'react';
import './home.css';
import Row from '../Raw/Raw';
import Banner from '../Banner/Banner'

import requests from './requests';

function Home(){
    return(
        <React.Fragment>
            <div className="row">
            <Banner />
            </div>
           
        <div className="Home">
            
            <Row title="NETFLIX ORIRGINALS" fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="fetchTopRated" fetchUrl={requests.fetchTopRated} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

        </div>
        </React.Fragment>
    )
}
export default Home;