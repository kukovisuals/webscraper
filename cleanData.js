
const party = require('./api/party.js');
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
          const snedData = day + ',' + club + ', ' + allArists
          sendText(snedData)
         }
        // console.log('wtf',party) 
        party[artist][day].push([club, allArists ])
      }
     
    }
  return party
}


module.exports = cleanData;