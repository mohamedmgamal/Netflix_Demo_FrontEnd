import React, { Component } from 'react';
import './devices.css';

class Devices extends Component {
    state = {  };

    handleSubmit = () => {
        console.log("submit");
    };

    render() { 
        return ( 
            <React.Fragment>
                <div id="devices" className="container">
                    <h4>What devices will you be watching on?</h4>
                    <p className="lead">You can watch Netflix on any of these devices. Select all that apply.</p>
                    <div className="buttons">
                        <button onClick={this.handleSubmit} type="button" id="tv" className="btn btn-outline-secondary">
                            <i className="fas fa-tv fa-lg"></i> Smart TV or Blu-ray player
                        </button>
                        <button onClick={this.handleSubmit} type="button" id="phone" className="btn btn-outline-secondary">
                            <i className="fas fa-tablet-alt fa-lg"></i> Phone or Tablet
                        </button>
                        <button onClick={this.handleSubmit} type="button" id="desktop" className="btn btn-outline-secondary">
                            <i className="fas fa-laptop fa-lg"></i> Desktop or Laptop
                        </button>
                        <button onClick={this.handleSubmit} type="button" id="box" className="btn btn-outline-secondary">
                            <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet"></link>
                            <i class="fas fa-router fa-lg"></i> Set-Top Box
                        </button>
                        <button onClick={this.handleSubmit} type="button" id="media" className="btn btn-outline-secondary">
                        <i class="fas fa-scanner-image fa-lg"></i> Streaming Media Player
                        </button>
                        <button onClick={this.handleSubmit} type="button" id="playstation" className="btn btn-outline-secondary">
                            <i className="fab fa-playstation fa-lg"></i> PlayStation
                        </button>
                        <button onClick={this.handleSubmit} type="button" id="xbox" className="btn btn-outline-secondary">
                            <i className="fab fa-xbox fa-lg"></i> XBOX
                        </button>
                        <button type="button" id="continue" className="btn btn-danger">CONTINUE</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Devices;
