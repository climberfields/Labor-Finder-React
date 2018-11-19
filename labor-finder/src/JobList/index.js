import React, {Component} from 'react';

class JobList extends Component {
  render(){
    const jobs = this.props.showJobs.map((job, i) =>{
      return(
        <div key={i}>
          Name: {job.name}
          Description: {job.description}
        </div>
      )
    })
    return(
      <div>
        <h2>All the Jobs</h2>
        {jobs}
      </div>
    )
  }
}

export default JobList;
