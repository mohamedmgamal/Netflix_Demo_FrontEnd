import React from 'react'
import './plans.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Plans extends React.Component{
    state={}
    next=()=>{
        this.props.history.push( {pathname: '/Payment-method',
            user :this.props.location.user,
            plan:this.state.plan})
    }

    Choose=(e)=>{
        let selectedPlan={}
        if (e.target.id=="div1")
            selectedPlan={"Name":"Basic","Cost":120}
        else if (e.target.id=="div2")
            selectedPlan={"Name":"Standard","Cost":165}
        else if (e.target.id=="div3")
            selectedPlan={"Name":"Premium","Cost":200}
    this.setState({plan:selectedPlan})
    }
    render(){
        return (
            <div className="container firstplan  center-container">


                <div className="col-12 ">
                    <div className=" text-left">
                        <p>STEP <b>2</b> OF <b>3</b></p>
                        <h4>Choose the plan that’s right for you</h4>
                        <h6>Watch all you want. Ad-free.</h6>
                        <h6>Recommendations just for you.</h6>
                        <h6>Change or cancel your plan anytime.</h6>
                    </div>
                </div>
                <table class="table">

                    <tr>

                        <td className="mrmr"></td>
                        <td className="col-lg-2 col-sm-4  col-4">
                            <div className={"square col-12"} id="div1" onClick={this.Choose}>
                                Basic
                            </div>
                        </td>
                        <td className="col-lg-2 col-sm-4  col-4">
                            <div className="square col-12" id="div2" onClick={this.Choose}>
                                Standard
                            </div>
                        </td>
                        <td className="col-lg-2 col-sm-4  col-4">
                            <div className="square col-12" id="div3" onClick={this.Choose}>
                                Premium
                            </div>
                        </td>
                    </tr>

                    <tbody>
                    <tr className="d-sm-none">
                        <td className="d-sm-none hide col-12" colSpan="4">Monthly Price</td>
                    </tr>
                    <tr>
                        <td className="col-sm-12 mrmr">Monthly price</td>
                        <td>EGP120</td>
                        <td>EGP165</td>
                        <td>EGP200</td>
                    </tr>
                    <tr className="d-sm-none">
                        <td className="d-sm-none hide col-12" colSpan="4">Video quality</td>
                    </tr>
                    <tr>
                        <td className="mrmr">Video quality</td>
                        <td>Good</td>
                        <td>Better</td>
                        <td>Best</td>
                    </tr>
                    <tr className="d-sm-none">
                        <td className="d-sm-none hide col-lg-12" colSpan="4">Resolution</td>
                    </tr>
                    <tr>
                        <td className="mrmr">Resolution</td>
                        <td >480p</td>
                        <td>1080p</td>
                        <td>4K+HDR</td>
                    </tr>
                    <tr className="d-sm-none">
                        <td className="d-sm-none hide col-12" colSpan="4">Watch on your TV, computer, mobile phone and tablet</td>
                    </tr>
                    <tr>
                        <td className="mrmr2">Watch on your TV, computer, mobile phone and tablet</td>
                        <td className="mrmr3"><svg id="firstcol4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg></td>
                        <td className="mrmr3"><svg id="firstcol4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg></td>
                        <td className="mrmr3"><svg id="firstcol4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg></td>
                    </tr>
                    </tbody>
                </table>
                {/* <div className="row exp" style={{height: '120px'}} >
            <div className="col-lg-6"></div>
            <div className="squares col-sm">
            <div class="container">
                <div class="row">
                    <div class=" col-sm">
                         Basic
                    </div>
                    <div class=" col-sm">
                        standard
                    </div>
                    <div class=" col-sm">
                    Premium
                    </div>
                </div>
                </div>
            {/* <div className="col-lg-4  text-center"  onClick="sq1()">
               <div id="firstsquare">Basic</div>
            </div>
            <div className="col-lg-4  text-center"  onClick="sq2()">
               <div className="exp3" id="secondsquare">Standard</div>
            </div>
            <div className="col-lg-4  text-center"  onClick="sq3()">
               <div id="thirdsquare">Premium</div>
            </div>
            </div>
        </div> */}
                {/*
        <div className="row text-left lastrw">

        <table class="table">
						<thead>
							<tr>
								<th></th>
								<th>Basic</th>
								<th>Standard</th>
								<th>Premium</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Monthly price after free month ends on 6/19/19</td>
								<td>$8.99</td>
								<td>$12.99</td>
								<td>$15.99</td>
							</tr>
							<tr>
								<td>HD Available</td>
								<td><i class="fas fa-times"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Ultra HD Available</td>
								<td><i class="fas fa-times"></i></td>
								<td><i class="fas fa-times"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Screens you can watch on at the same time</td>
								<td>1</td>
								<td>2</td>
								<td>4</td>
							</tr>
							<tr>
								<td>Watch on your laptop, TV, phone and tablet</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Unlimited movies and TV shows</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Cancel anytime</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>First month free</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
						</tbody>
					</table>
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
        */}
                <div className="col-12 ">
                    <div className="text col-12">
                        <p>Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content available in HD, Full HD, Ultra HD or HDR. Seefor more details.<br/></p>
                        <p>  Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</p>
                    </div>
                </div>
                {this.state.plan !=null &&
                <div className="step1">
                    <span style={{color:"red"}}>Your plan is the {this.state.plan.Name} plan and you will pay {this.state.plan.Cost}</span><br/>
                    <button className="btn btn-danger"onClick={this.next}>CONTINUE</button>

                </div>}

            </div>


        )
    }

}
export default Plans;
