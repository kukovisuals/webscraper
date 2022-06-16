import {useEffect, useState} from 'react';
import axios from 'axios';
import './style.scss';
// import data from './data/data.json';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios('http://localhost:9000/api/v1/main')
      .then(res => setData(res.data.parties)  )
      .catch(err => console.error(err))
  },[])

  return (
    <div className="App">
      {data && 
        data.map( d =>  <GridComponent key={d.name} list={d.events} artist={d.name} /> )
      }
    </div>
  );
}

const GridComponent = ({list, artist}) => {

  if(list.length === 0){
    return
  }
  // console.log(list)
  return(    
    <div className="grid_component_container">
      {list.map( d => <GridWrapper key={d.place} list={d} artist={artist} /> )}
    </div>
  )
}

const GridWrapper = ({list, artist}) => (
  <div className="grid_component_wrapper">        
    <div className="grid_component_item1">
      <span>
        {artist.toUpperCase()}
      </span>
    </div>

    <div className="grid_component_item2">
      <span>
        {list.day}
      </span>
    </div>

    <div className="grid_component_item3">
      <span>
        {condensar(list.artist)}
      </span>
    </div>

    <div className="grid_component_item4">
      <span>
        {list.city}
      </span>
    </div>

    <div className="grid_component_item5">
      <span>
        {list.place}
      </span>
    </div>
  </div>
)

function condensar(data){
  let newData = ''
  const offset = 200
  if(data.length > offset){
    newData = data.slice(0,offset) + ' ...'
  } else {
    newData = data
  }

  return newData
}
export default App;
