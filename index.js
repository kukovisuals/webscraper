const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()
const port = 3000

const cleanData = require('./cleanData');
const artists = require('./api/djs.js');

// 1st I read the artist name from djs.js
const artistArray = readArtists(artists)

// 2nd read the text files from all the djs in djs/artis.txt
readText(artistArray)

// 3th clean the data of each text file

// 4th send that data back as a json file 
function readText(data){

  let writeJson

  for(const artist of data){
    fs.readFile(`djs/${artist}.txt`, 'utf8', (err, artistData) => {
      if (err) {
        console.error(err);
        return;
      }
      writeJson = cleanData(artistData, artist) ;
       fs.writeFileSync('./api/events.json', JSON.stringify(writeJson));

      console.log('writeJson',writeJson)
    });


    console.log('This is after the read call');
  }
}

function readArtists(data){
  
  const djsArray = []

  for(const dj of data){
      
    const {name} = dj

    djsArray.push(name)
  }
  return djsArray
}


// 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// patino 16468371537
// tono 9086746558
// 19293109699
