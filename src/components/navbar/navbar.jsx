import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Navbar extends Component {
  render() {
    return (
    <div className='navbar-header sticky-top navbar-expand-lg d-flex justify-content-between nav-fill navbar-fixed-top navbar-light'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

            <div className="pt-3 row collapse navbar-collapse" id="navbarTogglerDemo01">
              <h1 className='p-5 font-weight-bold display-5 text-warning'>RuthFoodies</h1>
            
          

          {/* navbar list */}
          <ul className="nav d-flex justify-content-between">
            <li className="nav-item">
              <Link className="p-2 text-white font-weight-bold" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="p-2 text-white font-weight-bold" to="/Offices">Our Offices</Link>
            </li>
            <li className="nav-item">
              <Link className=" p-2 text-white font-weight-bold" to="Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className=" p-2 text-white font-weight-bold" to="/FAQs">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className=" p-2 text-white font-weight-bold" to="/Contact">Contact </Link>
            </li>
            <li>
              <h4 className="text-white font-weight-bold ml-5">+2347067869822</h4>
            </li>
            
           <Link className="btn btn-success btn-lg mr-3 ml-3" to='/Appointment'>REQUEST APPOINTMENT</Link>  
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
