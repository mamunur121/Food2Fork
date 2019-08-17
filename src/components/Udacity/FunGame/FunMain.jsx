import React from 'react';
import './FunGame.css';
import Score from "./Score";
import Game from "./Game";

class FunMain extends React.Component{
    state = {
        numQuestions: 0,
        numCorrect: 0
    };

    handleButtonClick = isCorrect => {
        this.setState((currentState)=> ({
            numQuestions: currentState.numQuestions + 1,
            numCorrect: isCorrect ? currentState.numCorrect + 1 : currentState.numCorrect,
        }))
    };


    render() {
        const {numQuestions, numCorrect} = this.state;
        return(
            <div className='App'>
                <header className="App-header">
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                    <p>Exercise - Managing State</p>
                </header>
                <main className='App-main'>
                    <Game
                        onButtonClick={this.handleButtonClick}
                    />
                    <Score
                        numQuestions = {numQuestions}
                        numCorrect={numCorrect}
                    />
                </main>

            </div>


        );
    }
}


export default FunMain;