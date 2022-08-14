// const data = [ { "definition": "an expression of greeting", "word": "hello" }, { "definition": "a telephone call", "word": "hello" } ]; 
// const definitions = data.map(entry => entry.definition); 
// const words = data.map(entry => entry.word); 
// console.log(definitions); // ['an expression of greeting', 'a telephone call'] console.log(words); // ['hello', 'hello']


// -------


// const word: string = "test"; 
// const definition: string = "a procedure or test to determine the quality, performance, or reliability of something"; 
// const apiUrl: string = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; 
// const response = await fetch(apiUrl); 
// const data = await response.json(); 
// const word: string = data.word; 
// const definition: string = data.definition;


// ------


// function fetchJSON(text: string) {
//     fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + text)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         localStorage.setItem('definition', JSON.stringify(data));
//     });
//   }