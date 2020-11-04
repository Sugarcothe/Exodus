import React, { Component } from 'react';
import image6 from '../../components/images/black man on suit.jpg';

export class Index6 extends Component {
  render() {
    return (
      <div className='index4 pt-5 pb-5'>
        <div className='container col align-items-center display-column'>
          <div className='row'>
              <div className="Index6left pt-5 text-white cover ml-5 pl-5 pr-5 col-md-5 ">
                <h4 className='text-success col-md-5 text-justify'>Testimonial</h4>
                <h4 className='display-4 text-white text-justify font-weight-bold'>Don't Just Take Our Word for It.</h4>
                <p className='lead text-align-left'>We take our work seriously and we understand it up to us to break to cycle of addiction and get to the root cause of the problem so you can fully recover.</p>
                <div className="card card-slant card-white">
                  <i className="fas fa-quote-left fa-3x text-success pt-5"></i>
                  <p className='text-dark p-5'>
                  “Since coming to EXODUS I have a clearer understanding of my mental health and how not addressing it and not taking my medications contributed to my addiction. I have learned so much, especially about my triggers and preventing relapse. I am excited about my recovery journey.” </p>

                  <p className='font-weight-bold text-dark align-text-center text-align-center pb-5'>James H</p>
                
                </div>
              </div>


             <div className='image6 pl-5 pt-5 col-md-5'>
               <img className='pb-5' src={image6} alt=""/>
               <div className="bg-dark r-5 text-success">
                <h1 className='justify-left text-white pt-5 pb-5'>Today Is The Day To Start Living Again!</h1>
                <h1 className='pb-5'>(410) 343-4343</h1>
             </div>
             </div>
            
          </div>
         
        </div>  
      </div>
    )
  }
}

export default Index6
