import React, { Component } from 'react';
import logo from '../../components/images/Vanilla-1.2s-286px.gif';

export class Footer extends Component {
  render() {
    return (
      <div className="card-deck row bg-dark pt-5">     
              <div className ='text-white p-5 col-sm-3'>
                <img src={logo} alt=""/>
                <p className='lead'>Providing a full continuum of care with a holistic approach to substance abuse and mental health treatment to a remarkably diverse patient population, each of EXODUS Behavioral Health’s levels of service are accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).
                </p>
              </div>

             <div className ='text-white p-5 col-sm-2'>
               <p className='lead  font-weight-bold pt-5'>Contact Info</p>
               <p className='lead pt-4'>700 Washington Blvd.</p>
               <p className='lead'>Baltimore MD 21230</p>
               <p className='lead'>1 (410) 343-4343</p>
               <p className='lead'>info@EXODUS.org</p>
             </div>


             <div className ='text-white bg-dark pt-5 col-sm-3'>
             <i className="fas fa-home text-warning fa-2x"/>
                <h5 className='font-weight-bold align-left pt-3'>Family Therapy</h5>
               <p className='text-align-left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>
             </div>
             <div className ='text-white bg-dark pt-5 col-sm-3'>
             <i className="fas fa-home text-warning fa-2x"/>
                <h5 className='font-weight-bold align-left pt-3'>Family Therapy</h5>
               <p className='text-align-left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>
             </div>
          </div> 
    )
  }
}

export default Footer
