import { useEffect, useState } from 'react';
import './App.css';
import QueryInput from './QueryInput';
import QueryOutput from './QueryOutput';

function App() {
  const [query,setquery]=useState("");
  const [result, setresult] = useState([]);
  const [flag,setflag]=useState(false);
  const fetchQuery =()=>{
    fetch(`http://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=20`)
    .then((response)=>
      response.json()
    ).then((r)=>{setresult((p)=>{

      return r.hits;
    }
      
      
      
      )})
  }
  return (
    <div className="App">
      <QueryInput query={query} 
    setquery={setquery}
    fetchQuery={fetchQuery}/>
    <QueryOutput result={result} query={query} setresult={setresult}/>
    </div>
  );
}

export default App;
