const fs = require('fs')
// const party = require('./api/party.js');
const party = require('./api/events.json');
const sendText = require('./twilio/sms.js')

function cleanData(data, artist){

  if(data.length < 1) return
 
  const streamData = data.split('\r\n')

  for(let i=0; i<streamData.length; i++){

    // if we get a match for our city
    if(streamData[i] === 'New York'){

      const day = streamData[i-3]
      const club = streamData[i-2]
      const allArists = streamData[i-1]

            
      if(!party[artist][day]) {
        party[artist][day] = []
        const snedData = day + ': ' + club + ' -> ' + allArists

        party[artist][day].push([club, allArists ])
        
        fs.writeFileSync('./api/events.json', JSON.stringify(party));
        console.log('writeJson',party)
        /*
          Send text data if found a new date in party[artist][day]
        */
  
        sendText(snedData) 
       }
    }
  }     
   
  return party
}


module.exports = cleanData;