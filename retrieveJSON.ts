// function retrieveJSON(word: string) {
//     https.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, (resp) => {
//         let data = '';
  
//         // A chunk of data has been recieved.
//         resp.on('data', (chunk) => {
//             data += chunk;
//         });
  
//         // The whole response has been received. Print out the result.
//         resp.on('end', () => {
//             fs.writeFile(`${word}.json`, data, (err) => {
//                 if (err) throw err;
//                 console.log('The file has been saved!');
//             });
//         });
  
//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
//     });
//   }