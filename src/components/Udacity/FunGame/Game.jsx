import React from 'react';

class Game extends React.Component {

    constructor(props) {
        super(props);
        const gameNums = this.generateNums();
        this.state = {
            value1: gameNums[0],
            value2: gameNums[1],
            value3: gameNums[2],
            proposedAnswer: gameNums[3],
        }
    }

    generateNums = () => {
        const value1 = Math.floor(Math.random() * 10);
        const value2 = Math.floor(Math.random() * 10);
        const value3 = Math.floor(Math.random() * 10);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1, value2, value3, proposedAnswer];
    };

    // update the values and show the new values
    updateState = () => {
        const gameNums = this.generateNums();
        this.setState(prevState => ({
            value1: gameNums[0],
            value2: gameNums[1],
            value3: gameNums[2],
            proposedAnswer: gameNums[3]
        }));
    };

    // return true or false based on the value and proposeValue
    checkAnswer = answer => {
      const {value1, value2, value3, proposedAnswer} = this.state;
      const isEqual = value3 + value2 + value1 === proposedAnswer;
      console.log(answer === isEqual);
      return answer === isEqual;

    };


    onButtonClicks = e => {
        console.log('e.target', e.target.innerText);
      this.updateState();
      const answer = Boolean(e.target.innerText === 'False' ? false : true);
      const isCorrect = this.checkAnswer(answer);
      this.props.onButtonClick(isCorrect);
    };

    render() {
        const {value1, value2, value3, proposedAnswer} = this.state;
        console.log(value1, value2, value3, proposedAnswer);
        return(
            <div className="game">
                <h2>Mental Math</h2>
                <p className='text'>
                    {`Sum of Value: ${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
                </p>
                <button onClick={(e)=> this.onButtonClicks(e)}>True</button>
                <button onClick={(e)=> this.onButtonClicks(e)}>False</button>
            </div>
        );
    }
}

export default Game;