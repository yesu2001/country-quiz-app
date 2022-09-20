import './App.css';
import adventure from './Images/adventure.svg'
import {useState} from 'react'
import Result from './Result'


const Question = (questions) => {
	const quest = questions.questions.slice(0,4);
	const {id,question,answer} = quest;
    const [selected,setSelected] = useState('');
    const [yes,setYes] = useState(false);
    const [index,setIndex] = useState(0);
    const [right,setRight] = useState(false);
    const [score,setScore] = useState(0);
    const [result,setResult] = useState(0);

	const handleSelect = (str) => {
		setSelected(str);
		if(str === quest[index].answer) {
			setRight(true)
	        setYes(true)
			setScore(score+1)
		}else {
			setRight(false)
		}
	}

	function nextQuestion(index) {
        if(index === quest.length-1) {
          setResult(true);
        }else {
          setIndex(index+1);   
          setYes(false) 
        }
	}
	
	const reset = () => {
	    setResult(!result)
	    setIndex(0)
	}


	return(<div>
			{ !result ? (<div className="Question">
						<img src={adventure} alt='logo'/>
						<h3>{quest[index]?.question}</h3>
						<div className="choices">
							<p className={(selected===quest[index]?.options[0] ) ? (!right ? 'wrong':'right') : "choice"} onClick={() => handleSelect(quest[index]?.options[0])}>A  <span>{quest[index]?.options[0]}</span></p>
							<p className={(selected===quest[index]?.options[1] ) ? (!right ? 'wrong':'right') : "choice"} onClick={() => handleSelect(quest[index]?.options[1])}>B  <span>{quest[index]?.options[1]}</span></p>
							<p className={(selected===quest[index]?.options[2] ) ? !right ? 'wrong':'right' : "choice"} onClick={() => handleSelect(quest[index]?.options[2])}>C  <span>{quest[index]?.options[2]}</span></p>
							<p className={(selected===quest[index]?.options[3] ) ? !right ? 'wrong':'right' : "choice"} onClick={() => handleSelect(quest[index]?.options[3])}>D  <span>{quest[index]?.options[3]}</span></p>
						</div>
						{!yes ? null:(<button className="next" onClick={() => nextQuestion(index)}>Next</button>)}
					</div>) : (<Result reset={reset} score={score}/>)
			}</div>
	)
}

export default Question;