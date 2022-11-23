import axios from 'axios';
import { useState } from 'react';
import Histogram from './Histogram';
import './style.css'

function App() {

  const url = 'https://www.terriblytinytales.com/test.txt';
  let data = "";
  let wordList = [];
  let wordFrequrency = {};
  let [frequentWords, setFrequentWords] = useState([]);
  let [frequentWordsCnt, setFrequentWordsCnt] = useState([]);
  let [isClicked, setIsClicked] = useState(false)
  let [isLoading, setIsLoading] = useState(false);

  const findfrequency = () => {
    wordList.forEach((word) => {
      if (!wordFrequrency[word]) {
        wordFrequrency[word] = 1;
      }
      else {
        wordFrequrency[word]++;
      }
    })
  }

  const findMostFrequent = () => {
    let count = 20;
    while (count--) {
      let s = "", v = 0;
      for (const [key, value] of Object.entries(wordFrequrency)) {
        if (!frequentWords.find(x => x === key) && value > v) {
          v = value;
          s = key;
        }
      }
      let t = frequentWords, t1 = frequentWordsCnt;
      t.push(s);
      t1.push(v);
      setFrequentWords(t);
      setFrequentWordsCnt(t1);
    }
  }

  const handleButtonClick = () => {
    setIsLoading(true);
    setIsClicked(true);
    axios.get(url)
      .then((res) => {
        data = res.data;
        wordList = data.split(/\s+/);
        findfrequency();
        findMostFrequent();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <div>
        <button disabled={isClicked} className='submitbutton' type="submit" onClick={handleButtonClick} >
          Show Histogram
        </button>
      </div>
      {
        isLoading && (<div style={{ fontSize: "18px" }} >
          Fetching Data...
        </div>)
      }
      <div className='chart' >
        {
          isClicked === true && isLoading === false && (<Histogram words={frequentWords} wordCnt={frequentWordsCnt} />)
        }
      </div>
    </div>
  );
}

export default App;
