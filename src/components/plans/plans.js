import React from 'react'
import './plans.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Plans extends React.Component{
    next=()=>{
        this.props.history.push( {pathname: '/Payment-method',
            user :this.props.user})
    }
    render(){
        return (
            <div className="row body1">
            <div className="body col-md-7 ">
        <div className="row firstrw ">
            <div className="col-lg-12 text-left">
                <p>STEP <b>2</b> OF <b>3</b></p>
                <h4>Choose the plan that’s right for you</h4>
                <h6>Watch all you want. Ad-free.</h6>
                <h6>Recommendations just for you.</h6>
                <h6>Change or cancel your plan anytime.</h6>
            </div>
        </div>
        <div className="row exp" style={{height: '120px'}} >
            <div className="col-lg-6"></div>
            <div className="col-lg-2  text-center"  onClick="sq1()">
               <div id="firstsquare">Basic</div> 
            </div>
            <div className="col-lg-2  text-center"  onClick="sq2()">
               <div className="exp3" id="secondsquare">Standard</div> 
            </div>
            <div className="col-lg-2  text-center"  onClick="sq3()">
               <div id="thirdsquare">Premium</div> 
            </div>
        </div>
        <div className="row text-left lastrw">
            
            <div className="col-lg-6"><h3>Monthly Price</h3></div>
            <div className="col-lg-2 " id="firstcol" >EGP 120  </div>
            <div className="col-lg-2" id="secondsquare1">EGP 165</div>
            <div className="col-lg-2" id="thirdsquare1">EGP 200</div>
        </div>
        <div className="row text-center lastrw">
            <div className="col-lg-6"><h3>Video Quality</h3></div>
            <div className="col-lg-2">
                <div id="firstcol1">Good</div>
            </div>
            <div className="col-lg-2">
                <div id="secondsquare2">Better</div>
            </div>
            <div className="col-lg-2">
                <div  id="thirdsquare2">Best</div>
            </div>
        </div>
        <div className="row text-center lastrw">
            <div className="col-lg-6"><h3>Resolution</h3></div>
            <div className="col-lg-2">
                <div id="firstcol2" >480p</div>
            </div>
            <div className="col-lg-2">
                <div id="secondsquare3">1080p</div>
            </div>
            <div className="col-lg-2">
                <div id="thirdsquare3" >4K + HDR</div>
            </div>
        </div>
        <div className="row text-center lastrw">
            <div className="col-lg-6"> <h3>Watch on your TV, computer, mobile phone and tablet</h3></div>
            <div className="col-lg-2"><svg id="firstcol4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg></div>
            <div className="col-lg-2"><svg id="secondsquare5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg></div>
            <div className="col-lg-2"><svg id="thirdsquare5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg></div>
        </div>
        
        
        <div className="row txtrw">
            <p>Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content available in HD, Full HD, Ultra HD or HDR. See <a href="#">Terms of Use</a> for more details.
                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</p>
        </div>
        <div className="butclass">
           <input id="subbut" type="submit" name="submit" value="Continue" onClick={this.next}/>
        </div>
       
    </div>
    
    </div>
        )
    }
}
export default Plans;
