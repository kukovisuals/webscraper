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
        data.map( d =>  <GridComponent key={d.name} artist={d}  /> )
      }
    </div>
  );
}

const GridComponent = ({artist}) => {

  if(artist.length === 0){
    return
  }
  console.log(artist)
  return(    
    <div className="grid_component_container">
      {artist.events.map( d => <GridWrapper key={d.place} artist={artist.name} artistData={d} imagen={artist.imagen} /> )}
    </div>
  )
}

const GridWrapper = ({artist, artistData, imagen}) => (
  <div className="grid_component_wrapper">        
    <div className="grid_component_item1">
      <span>
        {artist.toUpperCase()}
      </span>
    </div>
     <div className="grid_component_item">
      <img src={imagen} alt={artist}/>
    </div>

    <div className="grid_component_item2">
      <span>
        {artistData.day}
      </span>
    </div>

    <div className="grid_component_item3">
      <span>
        {condensar(artistData.artist)}
      </span>
    </div>

    <div className="grid_component_item4">
      <span>
        {artistData.city}
      </span>
    </div>

    <div className="grid_component_item5">
      <span>
        {artistData.place}
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
