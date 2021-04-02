import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import logo from './images/logo.png';
import second from './images/second.png';
import third from './images/third.png';
import fourth from './images/fourth.png';
import {Link} from "react-router-dom";



class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className="first" style={{backgroundImage:''}}>
                <img id="netflixlogo" src={logo} alt="netflixlogo"/>
                <Link to={"/login"} ><button id="loginbutton" type="button" className="btn btn-danger">Sign in</button></Link>
                <div className="first11 text-center">
                    <p> Unlimited movies, TV <br/> shows, and more. </p>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    
                    <div className="input-group">
                        <input type="text" id="email1" className="form-control" placeholder="Enter your Email" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                        <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon" onclick="start()"><a onclick="start()" href="" >Start</a></div>
                        </div>
                    </div>
                </div>
                
                </section>
                <section className="second">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 text-right">
                                <h2>Enjoy on your TV.</h2>
                                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <img src={second} alt=""/>
                            </div>
                        </div>
                    </div>

                 </section>
                 <section className="third">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <img src={third} alt=""/>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <h2>Download your shows<br/> to watch offline.</h2>
                                <h3>Save your favorites easily and always have something to watch.</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fourth">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <h2>Watch everywhere.</h2>
                                <h3>Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV without<br/>paying more.</h3>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <img src={fourth} alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </section>
    <section className="fifth">
            <h1>Frequently Asked Questions</h1>

            <div className="container">
                <div className="row">
                    <div id="accordion">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <button className="btn btn-link mylinks" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Netflix ?
                              </button>
                            </h5>
                          </div>
                      
                          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                                <p>
                                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                              <button className="btn btn-link collapsed mylinks" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Netflix cost ?
                              </button>
                            </h5>
                          </div>
                          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                              <h5 className="mb-0">
                                <button className="btn btn-link collapsed mylinks" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                  Where can I watch ?
                                </button>
                              </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                              <div className="card-body">
                                <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                              </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFour">
                              <h5 className="mb-0">
                                <button className="btn btn-link collapsed mylinks" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                                  How do I cancel ?
                                </button>
                              </h5>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                              <div className="card-body">
                                <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                              </div>
                            </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                              <button className="btn btn-link collapsed mylinks" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                What can I watch in Netflix?
                              </button>
                            </h5>
                          </div>
                          <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div className="card-body">
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            <div className="fifth3 text-center">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your Email" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    <div className="input-group-prepend">
                        <div className="input-group-text" id="btnGroupAddon" style={{color:" white"}}>Start</div>
                    </div>
                </div>

                
            </div> 
            
    </section>
    {/* <section className="sixth">
        <footer>
            <div className="container">
                <h5><a href="">Questions? Contact us.</a></h5>
                <div className="row">
                    <div className="block col-md-3 col-sm-6 col-xs-12">
                        <a href="">FAQ</a><br/>
                        <a href="">Investor Relations</a><br/>
                        <a href="">Privacy</a><br/>
                        <a href="">Speed Test</a><br/><br/>
                        <div className="dropdown show">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Arabic
                            </a>
                          
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Deutsch</a>
                            </div>
                          </div>
                    </div>
                    <div className="block col-md-3 col-sm-6 col-xs-12">
                        <a href="">Help Center</a><br/>
                        <a href="">Jobs</a><br/>
                        <a href="">Cookie Preferences</a><br/>
                        <a href="">Legal Notices</a><br/>
                    </div>
                    <div className="block col-md-3 col-sm-6 col-xs-12">
                        <a href="">Account</a><br/>
                        <a href="">Ways to Watch</a><br/>
                        <a href="">Corporate Information</a><br/>
                        <a href="">Netflix Originals</a><br/>
                    </div>
                    <div className="block col-md-3 col-sm-6 col-xs-12">
                        <a href="">Media Center</a><br/>
                        <a href="">Terms of Use</a><br/>
                        <a href="">Contact Us</a><br/>
                    </div>
                </div>
            </div>
        </footer>
    </section> */}
    
            </React.Fragment>
         );
    }
}
 
export default Landing;
