import React, { Component } from 'react';
import image4 from '../../components/images/mainmansuit.jpg';

export class Index4 extends Component {
  render() {
    return (
      <div className='index4 pt-5 pb-5'>
        <div className='container col display-column'>
          <div className='row'>
              <div className=" pt-5 pl-5 text-white cover text-align-center ">
                <img className='rounded-lg'src={image4} style={{height: 450, width: 440}} alt=""/>
              </div>
              <div className="pt-5 pr-5 ml-5 col text-white cover text-align-center">
                <h3 className='text-success'>The Difference</h3>
                <h4 className='display-4 text-white font-weight-bold'>Our Team Of Passionate Professionals Will Be There With You Every Step Of The Way.</h4>
                <p className='lead-4 text-white mt-5 mb-5'>Our counselors, therapists, psychiatrists, and support staff are passionate about helping each of our clients on their road to recovery.  EXODUS Behavioral Health is committed to being a national industry leader in providing the highest quality of care to each of our clients.</p>
                <button className="btn btn-lg btn-success">VIEW FAQs</button>
                <button className="btn btn-lg btn-light ml-3">CONTACT</button>
              </div>
          </div>
         
        </div>  
      </div>
    )
  }
}

export default Index4
