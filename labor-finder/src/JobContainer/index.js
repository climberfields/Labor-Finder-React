import React, {Component} from 'react';
import CreateJob from '../CreateJob';
import JobList from '../JobList';

class JobContainer extends Component {
  constructor(){
    super();
    this.state = {
      jobs: [],
      jobsObj: {
        name: '',
        description: '',
        budget: '',
        date: '',
        pickupAvailable: true,
        contactInfo: '',
        _id: '',
      },
    }
  }

  addJob = async (job, e) =>{
    try {
      e.preventDefault();
      console.log(job);
    } catch (err) {
      console.log(err, ' Error in addJob');
    }
  }


  render(){
    console.log(this.state)
    return(
      <div>
        <CreateJob addJob={this.addJob}/>
        <JobList showJobs={this.state.jobs}/>
      </div>
    )
  }
}

export default JobContainer;
