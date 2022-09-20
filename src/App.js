import {useState,useEffect} from 'react';
import './App.css';
import Question from './Question';
import Result from './Result';

function App() {
  const [countries,setCountries] = useState([])
  const [questions,setQuestions] = useState([]);
  const [result,setResult] = useState(false);
  const [index,setIndex] = useState(1);
  const [score,setScore] = useState(0);


  useEffect(() => {
    fetchData();
  })

  function fetchData() {
    fetch("https://restcountries.com/v2/all")
    .then((res) => { return res.json() })
    .then((countryData) => {
        localStorage.setItem("countries", JSON.stringify(countryData));
        let getcountries = localStorage.getItem("countries");
        setCountries(JSON.parse(getcountries));
        randomCountries();
    })
  }


  function randomCountries() {
    if(countries.length>0){
      for (var i = 0; i < 5; i++) {
        var random = Math.floor(Math.random() * countries.length)
        const {area,capital,name} = countries[random]
        const quiz = {
          id: area,
          question: `${capital} is the capital of`,
          answer: name, 
          options: randomCapitals(random),
        }
        questions.push(quiz)
      }
    }
  }

  function randomCapitals(random) {
    const capitals = [];
    capitals.push(countries[random]?.name);
    var count = 1
    for (var i = 0; i < 3; i++) {
      capitals.push(countries[random+count]?.name);
      count+=1;
    }
    return capitals;
  }
  

  
  

  

  return (
    <div className="App">
      <h1>Country Quiz</h1>
      <Question questions={questions}/> 
    </div>
  );
}

export default App;
