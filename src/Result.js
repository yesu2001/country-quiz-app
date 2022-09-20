import './App.css';
import winner from './Images/winners.svg'

const Result = ({reset,score}) => {
	return (
		<div className="Result">
			<img src={winner} alt="wininner"/>
			<div>
				<p>Results</p>
				<span>You got <b>{score}</b> correct answers</span>
			</div>
			<button onClick={reset}>try again</button>
		</div>
	)
}

export default Result;