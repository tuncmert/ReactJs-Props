import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Card from './components/Card';
import DateAndHour from './components/DateAndHour';

function App() {
  const [date, setDate] = useState(Date());
  const [elements, setElements] = useState([]);
  const liClass = "list-group-item"
  return (
    <div className="container">
      <DateAndHour date={date} />
      <ul className='list-group mt-2'>
        <li className={liClass} onClick={(e) => addElement(e.target.innerHTML)}>C#</li>
        <li className={liClass} onClick={(e) => addElement(e.target.innerHTML)}>Java</li>
        <li className={liClass} onClick={(e) => addElement(e.target.innerHTML)}>Python</li>
        <li className={liClass} onClick={(e) => addElement(e.target.innerHTML)}>JavaScript</li>
      </ul>
      <div className='row'>
        {
          elements.length>0?elements.map((e)=>{return <Card key={e.name} features={e}/>}):<h5>There is no element!!!</h5>
        }
      </div>
    </div>
  );
  function addElement(e) {
    let obj = { name: e, count: 1 }
    let elementExists = elements.find((item) => { return item.name === e });
    if (elementExists) {
      elementExists.count++;
      setElements([...elements])
    } else {
      setElements([...elements, obj])
    }
  }
}


export default App;
