import React, { Component } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../components/images/Vanilla-1.2s-286px.gif';


export class Navbar extends Component {
  render() {
    return (
      
    <div className='navbar-header sticky-top navbar-expand-lg d-flex justify-content-between nav-fill navbar-fixed-top navbar-light'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

            <div className="pt-3 row collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand text-white ml-5 " href="exodus.org"> <img src={logo} alt=""/><p className='ml-3'>Wellness Is Our Priority</p></a>
            
          

          {/* navbar list */}
          <ul className="nav d-flex justify-content-between">
            <li className="nav-item">
              <a className="p-2 text-white font-weight-bold" href="exodus.org">About Us</a>
            </li>
            <li className="nav-item">
              <a className="p-2 text-white font-weight-bold" href="exodus.org">Our Offices</a>
            </li>
            <li className="nav-item">
              <a className=" p-2 text-white font-weight-bold" href="exodus.org">Services</a>
            </li>
            <li className="nav-item">
              <a className=" p-2 text-white font-weight-bold" href="exodus.org">FAQs</a>
            </li>
            <li className="nav-item">
              <a className=" p-2 text-white font-weight-bold" href="exodus.org">Contact Us</a>
            </li>
            
            <li className="nav-item">
              <a className=" p-2 text-white font-weight-bold" href="exodus.org">+2347067869822</a>
            </li> 
           <button className="btn btn-success btn-lg mr-5 ml-5">REQUEST APPOINTMENT</button>  
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
