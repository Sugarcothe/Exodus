import React, { Component } from 'react';
import Joi from 'joi-browser'

export class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {

    const result = Joi.validate(this.state.data, this.schema, { abortEarly: false});
 
     if (!result.error) return null;
 
     const errors = {};
     for (let item of result.error.details)
     errors[item.path[0]] = item.message;
   };
 
   validatePropert = ({ name, value }) => {
     const obj = {[name]: value };
     const schema = {[name] : this.schema[name]};
     const {error} = Joi.validate(obj, schema);
     if (error) return null;
     return error.details[0]
 
   }

   handleSubmit = e => {
    e.preventDefault()

    const errors = this.validate();
    console.log(errors)
    this.setState({ errors });
    if (errors) return;

    this.doSubmit()
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]

    const data = {...this.state.data};
    data[input.name] = input.value;
    
    this.setState({ data, errors });

  };



}

export default Form
