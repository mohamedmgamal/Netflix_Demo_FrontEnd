import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './step1of3.css'
class Step1Of3 extends React.Component{
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{

        this.setState({[e.target.id]:e.target.value })
    }
    handleSubmit=(e)=>{
        
        e.preventDefault();
        if(e.target.email.value==="" && e.target.email.value==="" ){
            return (
                console.log("omar ahmed abdallah")
            )
        }else{
        console.log(this.state)
        this.setState({
            email:'',
            password:''
        })
    }
    }
    render(){
        return(
            <React.Fragment>
            <div className="row ">
                <div className="center-container col-md-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="header-container">
                        <div className="header">
                            <span>
                                STEP <b>2</b> OF <b>3</b>
                            </span>
                            <h2>Create a password to start your membership.</h2>
                        </div>
                    </div>
                    <div className="mb-3">
                    <div>
                        Just a few more steps and you're done!    
                        </div>
                        <div>
                        We hate paperwork, too.   
                        </div>
                        <input type="email" className="form-control" onChange={this.handleChange} id='email' value={this.state.email} aria-describedby="emailHelp" placeholder="Email" />
                        <div id="emailHelp" className="form-text" hidden>Email is required</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" onChange={this.handleChange} id='password' value={this.state.password}  placeholder="Add a password"/>
                        <div id="emailHelp" className="form-text" hidden>Password is required</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Please do not email me Netflix special offers.</label>
                        
                    </div>
                    <div className="button-container">
                    <input type="submit" className="btn btn-danger" value="continue"/>
                    </div>
                    </form>       
                </div>
            </div>
            
            </React.Fragment>
        ) 
    }
}
export default Step1Of3;