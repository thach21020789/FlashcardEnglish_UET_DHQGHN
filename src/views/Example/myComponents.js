import React from 'react';
import ChildComponent from './ChildComponent.js';

import AddComponent from './AddComponent.js';

class MyComponents extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500 $' },
            { id: 'abcJob2', title: 'Testers', salary: '400 $' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000 $' }
        ]
    }


    AddNewJob = (job) => {
        console.log(">> check newjob :", job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    DeleteJob = (job) => {
        let currentArrJob = this.state.arrJobs;
        currentArrJob = this.state.arrJobs.filter((item) => (item.id !== job.id));
        this.setState({
            arrJobs: currentArrJob
        })
    }

    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
               <AddComponent 
               AddNewJob = {this.AddNewJob}
               />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    DeleteJob = {this.DeleteJob}
                />
            </>
        )
    }
}

export default MyComponents;