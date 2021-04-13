import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './step1of3.css'
import '../../staticUrls'
import {urls} from "../../staticUrls";
class Step1Of3 extends React.Component{
    state={
        email:"",
        password:'',
        username:'',
        massage:''
    }
    componentDidMount() {
        if (this.props.location.email)
            this.setState({email:this.props.location.email})
        console.log(this.props.location.email)

    }

    handleChange=(e)=>{

        this.setState({[e.target.id]:e.target.value })
    }
    handleSubmit=(e)=> {
        const Help = document.querySelector("#Help")
        if (this.state.email == "" || this.state.password == "" || this.state.username == "") {
            this.setState({massage:"All fields required"})
            return
        }
        if (this.state.password.length<8)
        {
            this.setState({massage:"very short password"});
            return
        }
        var regexUpper = "[A-Z]"; //Uppercase Alphabet.
        var regexLower = "[a-z]"; //Lowercase Alphabet.
        var refexDigit ="[0-9]"; //Digit.
        var regexSC = "[$@$!%*#?&]"; //Special Character.
        if (!new RegExp(regexUpper).test(this.state.password)){
            this.setState({massage:"password must contain Upper Alphabets"});
            return
        }
        if (!new RegExp(regexLower).test(this.state.password)){
            this.setState({massage:"password must contain Lower Alphabets"});
            return
        }
        if (!new RegExp(refexDigit).test(this.state.password)){
            this.setState({massage:"password must contain Digits"});
            return
        }
        if (!new RegExp(regexSC).test(this.state.password)){
            this.setState({massage:"password must contain Special Character"});
            return
        }
       this.setState({message:"Checking UserName availability"})
        fetch(urls.HomeUrl+"/ifun/"+this.state.username)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                if (data.success){
                    this.props.history.push( {pathname: '/step2',
                        user : {
                            "email":this.state.email,
                            "username":this.state.username,
                            "password":this.state.password,
                        } })
                }
                else {
                    this.setState({massage:"This user name already exists"})
                }
            })
                .catch((error) => {
                    this.setState({massage:error})
                });

    }
    render(){
        return(
            <React.Fragment>
            <div className="row"style={{color:"black"}}>
                <div className="col-md-4"></div>
                <div  className="col-md-4">
                <form>
                    <div className="header-container">
                        <div className="header">
                            <span>
                                STEP <b>1</b> OF <b>3</b>
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
                        <input type="text" className="form-control" onChange={this.handleChange} id='username' value={this.state.username} aria-describedby="usernameHelp" placeholder="User Name" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" onChange={this.handleChange} id='password' value={this.state.password}  placeholder="Add a password"/>
                        <span id="Help" className="form-text" style={{color:"#E50913"}}>{this.state.massage}</span>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Please do not email me Netflix special offers.</label>
                    </div>
                    <div className="button-container">
                    <input type="button" className="btn btn-danger" value="continue" onClick={this.handleSubmit}/>
                    </div>
                    </form>       
                </div>
                <div className="col-md-4"></div>
            </div>
            </React.Fragment>
        ) 
    }
}
export default Step1Of3;
