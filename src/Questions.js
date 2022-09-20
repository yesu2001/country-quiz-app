import './App.css';
import Question from './Question';

const Questions = ({questions}) => {
		
	return(
		<div className="Questions">
			{
				questions.slice(0,5).map(question => <Question question={question}/>)
			}
		</div>
	)
}

export default Questions;