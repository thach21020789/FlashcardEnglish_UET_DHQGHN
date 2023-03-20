import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log("check onclick delate: ", job)
        this.props.DeleteJob(job);
    }

    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (

            <>
                {showJobs === false ?
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                            <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        </div>
                    </>
                }

            </>

        )

    }
}

export default ChildComponent;