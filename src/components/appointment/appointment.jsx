import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../common/form'




class Appointment extends Form {
  state = {
    data: { 
      firstname: '', 
      lastname: '',
      email: '',
      contact: '',
      requesteddate: '',
      requestedtime: '',
      reason: '',
    },
    errors: {
      
    }

    
  }

    schema = {
      firstname: Joi.string().required().label('Firstname'),
      lastname: Joi.string().required().label('Lastname'),
      email: Joi.required(),
      contact: Joi.number().required()
  }

 

  


  doSubmit = () => {
    console.log('submitted')
  }


  

  render() {
      const { data } = this.state;

    return (
      <div className="container bg-white text-dark p-5 ">
      <h4 className='font-weight-bold'>Request Application</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">

            {/* First Name */}
            <div className="form-group col-md-6 p-2">
              <input type="text"
              value={data.firsttname}
              onChange={this.handleChange}
              name='first tname' 
              className="form-control" 
              placeholder='First Name'
              error='First Name is needed'
              />
              
              </div>
            

            {/* Last Name */}
            <div className="form-group col-md-6 p-2">
              <input type="text"
              value={data.lastname}
              onChange={this.handleChange}
              name='lastname' 
              className="form-control" 
              placeholder='Last Name'
              error='Last Name is needed'/>
              
            </div>
          </div>

          {/* Email  */}
          <div className="form-row">
            <div className="form-group col-md-6 p-2">
              <input type="text"
              value={data.email}
              onChange={this.handleChange}
              name='email'
              className="form-control" 
              placeholder='Email'
              error='pls put you email'/>
            </div>

              {/* Contact */}
            <div className="form-group col-md-6 p-2">
              <input type="text" 
              value={data.contact}
              onChange={this.handleChange}
              name='contact'
              className="form-control" 
              placeholder='Contact'
              error='Phone Number Name is needed'/>
            </div>
          </div>

            {/* Requested Date */}
          <div className="form-row">
            <div className="form-group col-md-6 p-2">
              <input type="text" 
              value={data.requesteddate}
              onChange={this.handleChange}
              name='requesteddate'
              className="form-control" 
              placeholder='Requested Date'/>
            </div>

              {/* Requested time */}
            <div className="form-group col-md-6 p-2">
              <input type="text" 
              value={data.requestedtime}
              onChange={this.handleChange}
              name='requestedtime'
              className="form-control" 
              placeholder='Requested Time'/>
            </div>
          </div>

          {/* reason */}
          <div className="form-group">
              <textarea className="form-control"
              value={data.reason}
              onChange={this.handleChange}
              name='reason' 
              id="exampleFormControlTextarea1" 
              rows="3" 
              placeholder='Reason For Visit?'>
              </textarea>
          </div>
          <button 
            disabled={this.validate(true)}
            className="btn btn-success btn-block">Submit
          </button>
        </form>
    </div>
    )
  }
}

export default Appointment
