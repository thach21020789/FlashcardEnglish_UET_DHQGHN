
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Test.scss'
class Test extends React.Component {
    handleClick = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }
    state = {
        isFlipped: false,
        word: [
            {wordEnglish: 'hello', Meaging: "xin chào"}
        ]
    }
    render() {
        return (



            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div onClick={this.handleClick} className="card">
                    <h2>Hello</h2>
                    {/* <p>Content for front side of the flashcard goes here.</p> */}
                </div>

                <div onClick={this.handleClick} className="card">
                    <h2>Xin chào</h2>
                    {/* <p>Content for back side of the flashcard goes here.</p> */}
                </div>
            </ReactCardFlip>

        )
    }
}

export default Test;