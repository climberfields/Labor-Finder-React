import React, {Component} from 'react';

class CreateJob extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      description: '',
      budget: '',
      date: '',
      pickupAvailable: false,
      contactInfo: '',
    }
  }

  updateJob = (e) =>{
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  render(){
    return(
      <div>
        <h1>Enter Your Info: </h1>
        <form onSubmit={this.props.addJob.bind(null, this.state)}>
          Name: <input type="text" name = "name" value={this.state.name} onChange={this.updateJob} placeholder="Your Name"/><br/>
          Description: <input type="text" name = "description" value={this.state.description} onChange={this.updateJob} placeholder="Enter Job Description" /><br/>
          Budget: <input type="text" name = "budget" value={this.state.budget} onChange={this.updateJob} placeholder="Enter your budget" /><br/>
          Date: <input type="text" name = "date" value={this.state.date} onChange={this.updateJob} placeholder="Date for the job" /><br/>
          Can you pick up the worker: <input type="checkbox" name = "pickupAvailable" value={this.state.pickupAvailable} onChange={this.updateJob}/><br/>
          Contact Info: <input type="text" name="contactInfo" placeholder="Your name" value={this.state.contactInfo} onChange={this.updateJob}/><br/>
          <button>Post Job</button>
        </form>
      </div>
    )
  }
}
export default CreateJob;
