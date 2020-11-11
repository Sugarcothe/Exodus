import React, { Component } from 'react';
import Joi from 'joi-browser';




export class Appointment extends Component {
  state = {
    account: { 
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

  validate = () => {

   const result = Joi.validate(this.state.account, this.schema, { abortEarly: false});

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details)
    errors[item.path[0]] = item.message;
  };

  handleSubmit = e => {
    e.preventDefault()

    const errors = this.validate();
    console.log(errors)
    this.setState({ errors });
    if (errors) return;
  }

  handleChange = ({ currentTarget: input }) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account })

  }

  render() {
      const { account } = this.state;

    return (
      <div className="container bg-white text-dark p-5 ">
      <h4 className='font-weight-bold'>Request Application</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">

            {/* First Name */}
            <div className="form-group col-md-6 p-2">
              <input type="text"
              value={account.firsttname}
              onChange={this.handleChange}
              name='first tname' 
              className="form-control" 
              placeholder='First Name'/>
              </div>
            

            {/* Last Name */}
            <div className="form-group col-md-6 p-2">
              <input type="text"
              value={account.lastname}
              onChange={this.handleChange}
              name='lastname' 
              className="form-control" 
              placeholder='Last Name'/>
            </div>
          </div>

          {/* Email  */}
          <div className="form-row">
            <div className="form-group col-md-6 p-2">
              <input type="text"
              value={account.email}
              onChange={this.handleChange}
              name='email'
              className="form-control" 
              placeholder='Email'/>
            </div>

              {/* Contact */}
            <div className="form-group col-md-6 p-2">
              <input type="text" 
              value={account.contact}
              onChange={this.handleChange}
              name='contact'
              className="form-control" 
              placeholder='Contact'/>
            </div>
          </div>

            {/* Requested Date */}
          <div className="form-row">
            <div className="form-group col-md-6 p-2">
              <input type="text" 
              value={account.requesteddate}
              onChange={this.handleChange}
              name='requesteddate'
              className="form-control" 
              placeholder='Requested Date'/>
            </div>

              {/* Requested time */}
            <div className="form-group col-md-6 p-2">
              <input type="text" 
              value={account.requestedtime}
              onChange={this.handleChange}
              name='requestedtime'
              className="form-control" 
              placeholder='Requested Time'/>
            </div>
          </div>

          {/* reason */}
          <div className="form-group">
              <textarea className="form-control"
              value={account.reason}
              onChange={this.handleChange}
              name='reason' 
              id="exampleFormControlTextarea1" 
              rows="3" 
              placeholder='Reason For Visit?'>
              </textarea>
          </div>
          <button className="btn btn-success btn-block">Submit</button>
        </form>
    </div>
    )
  }
}

export default Appointment
