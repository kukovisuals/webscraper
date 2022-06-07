// const express = require('express')
const axios = require('axios')
const fs = require('fs')

const apiData = require('./api/events.json')

// const app = express()
// const port = 3000

const cleanData = require('./cleanData');
const readArtists = (data) => data.split('\r\n')

fs.readFile('./api//artistNames.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error in artistNAmes.txt file -> ',err);
    return;
  }
  // 1st I read the artist name from djs.js
  const artistArray = readArtists(data)

  // 2nd read the text files from all the djs in djs/artis.txt
  readText(artistArray)
});
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
      cleanData(artistData, artist) ;
    });
    console.log('This is after the read call');
  }
}

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })