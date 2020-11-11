import React, { Component } from 'react';
import image4 from '../../components/images/mainmansuit.jpg';
import image6 from '../../components/images/black man on suit.jpg';

export class Index1 extends Component {
  render() {
    return (
      <div className=''>
        
        {/* Jumbotron.Index */}
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

        {/* second.index */}
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

      {/* third.index */}
      <div className="index3 jumbotron text-align-center p-4 p-md-5 text-white rounded ">
          <div className="d-jumbotron display-center">
            <h2 className='lead display-4 text-success my-3'>New Possibilities</h2>
            <h1 className="display-3 font-weight-bold">We Know Addiction Is Difficult To Deal With Alone</h1>
            <p className="lead my-3">Addiction, by its nature, is a very complex disease requiring a complex approach. 

            From the very first day that you arrive, you are an immediate member of the EXODUS family.  You will never have to feel alone again. 

            The holistic approach to treatment provided here at EXODUS Behavioral Health addresses the mental, physical, and spiritual aspects of the recovery process.  We pride ourselves on our success, every day clean that our clients accomplish is what we consider SUCCESS!  We are absolutely honored that you have decided to join us.</p>
            <div className='button mt-5'>
              <div className="button btn btn-success btn-lg font-weight-bold">TALK TO A SPECIALIST</div>
            </div>       
          </div>
        </div>

        {/* fourth.index */}
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
      

      {/* fifth.index */}
      <div className='index5 bg-success pt-5' >
        <div className="container col p-3  display-column">
              <h3 className='text-white'>We help in more ways then one</h3>
              <h1 className='text-white font-weight-bold display-4'>Treatment Services Provided</h1>
          <div className="row pt-5 mb-5 pr-5 pl-5">

              
              <div className ='text-white p-5 col-sm-4'>
                
                <i className="fas fa-user-friends text-warning fa-2x"/>
                <h5 className='font-weight-bold pt-3'>Dual Diagnosis</h5>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>officiis, at aut maxime 
              </div>

             <div className ='text-white p-5 col-sm-4'>

              <i className="fas fa-stopwatch text-warning fa-2x"/>
                <h5 className='font-weight-bold pt-3'>Relapse Prevention</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>

             </div>
             <div className ='text-white pt-5 col-sm-4'>
             <i className="fas fa-home text-warning fa-2x"/>
                <h5 className='font-weight-bold pt-3'>Family Therapy</h5>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>
             </div>

             <div className ='text-white pt-5 col-sm-4'>
             <i className="far fa-handshake text-warning fa-2x"/>
                <h5 className='font-weight-bold pt-3'>One-On-One Counseling</h5>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>officiis
             </div>

             <div className ='text-white pt-5 col-sm-4'>
             <i className="fas fa-brain text-warning fa-2x"/>
                <h5 className='font-weight-bold pt-3'>Psychiatric Care</h5>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>officiis
             </div>

             <div className ='text-white pt-5 col-sm-4'>
             <i className="fab fa-gratipay text-warning fa-2x"/>
                <h5 className='font-weight-bold pt-3'>Mindfulness And Meditation</h5>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quisquam vel voluptates earum officiis, at aut maxime architecto! 
                </p>officiis
             </div>
          </div>  
          </div>
        </div> 

        {/* sixth.Index */}
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

      {/* seventh.Index */}
      <div className='bg-success pb-5 Index7'>
        <div className="bg-success text-align-center">
          <h5 className='pt-5 text-white'>Have Some Questions?</h5>
          <h1 className=' text-white pb-5 text-align-center justify-content-center '>We Would Be Happy To Answer Your Questions</h1>
          <button className="btn btn-lg btn-light text-success">Contact Us</button>
        </div>
      </div>
      </div>

      
    )
  }
}

export default Index1
