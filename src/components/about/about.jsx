import React, { Component } from 'react';
import {Fragment} from 'react';

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="index1 jumbotron text-align-center p-4 p-md-5 text-white rounded ">
      <div className="d-jumbotron display-center">
            <h4 className='lead font-weight-bold my-3'>Recovery is Possible. We Are Here for You Every Step Of The Way!</h4>
            <h1 className="display-3 font-weight-bold"><span className='text-blue'>HEARTBEAT</span> Behavioral Health</h1>
            <p className="lead my-3">We have a team of compassionate professionals standing by ready to assist you on your journey to recovery.</p>
            <div className='button mt-5'>
              <div className="button btn btn-success btn-lg font-weight-bold">TALK TO A SPECIALIST <i class="fas fa-phone-square"></i></div>
              <div className="button btn ml-3 btn-light btn-lg font-weight-bold">VIEW OUR SERVICES <i class="fas fa-user-md"></i></div>
            </div>
      </div>
    </div>
    <div className='index2-header'>
    <div class="px-3 py-3 pt-md-5 text-white pb-md-4 text-center">
        <h1 class="display-4 font-weight-bold pt-5">Why Should You Choose Us</h1>
        <p class="lead pb-5">We are committed to delivering an excellent quality of care to those affected by drug addiction and mental health disorders. We are industry leaders who are passionate about the people we serve and changing the quality of their lives for the better.</p>
    </div>


    <div className="container pt-5">
    <div class="card-columns pb-5">
        <div class="card bg-white">
          <div class="card-body text-center">
            <h5 class="card-text">Alchohol Addiction</h5>
          </div>
        </div>
        <div class="card bg-danger">
          <div class="card-body text-center">
            <h5 class="card-text">Prescription Drug Addiction</h5>
          </div>
        </div>
        <div class="card bg-primary">
          <div class="card-body text-center">
            <h5 class="card-text">Marijuana Addiction</h5>
          </div>
        </div>
        <div class="card bg-primary">
          <div class="card-body text-center">
            <h5 class="card-text">Opiod Addiction</h5>
          </div>
        </div>
        <div class="card bg-warning">
          <div class="card-body text-center">
            <h5 class="card-text">Heroin Addiction</h5>
          </div>
        </div>
        <div class="card bg-success">
          <div class="card-body text-center">
            <h5 class="card-text">Meth Addiction</h5>
          </div>
        </div>
        <div class="card bg-danger">
          <div class="card-body text-center">
            <h5 class="card-text">Cocaine Addiction</h5>
          </div>
        </div>
        <div class="card bg-light">
          <div class="card-body text-center">
            <h5 class="card-text">Other Addiction</h5>
          </div>
        </div>
        <div class="card bg-info">
          <div class="card-body text-center">
            <h5 class="card-text">Homelessness</h5>
          </div>
        </div>
      </div>
    </div>
    </div>     

  </Fragment>
      

    


      
    )
  }
}

export default About
