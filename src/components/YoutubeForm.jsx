import React, { Component } from 'react';
import { useFormik } from 'formik';

class YoutubeForm extends Component{

   formik = useFormik({});

  render(){
    return(
      <div className="container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control" />
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" className="form-control" />

          <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    );
  }
}

export default YoutubeForm;