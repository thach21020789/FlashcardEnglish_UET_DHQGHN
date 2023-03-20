import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>> check state: ", this.state)
        if(!this.state.title || !this.state.salary){
            alert("missing pramas");
            return;
        }
        this.props.AddNewJob({
            id: Math.floor(Math.random()*1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    
    render() {
        return (
            <>
                <form />
                <label htmlfor="fname">Job's title:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleJobTitle(event)}
                /><br />

                <label htmlfor="lname">Salary:</label><br />

                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleSalary(event)}
                /><br></br>

                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </>
        )

    }
}

export default AddComponent;