// Import stylesheets
// import './style.css';
import fetch from 'node-fetch'

const defURL : string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  const text = formData.get('defineword') as string;
  const kyle = GetWords(text);
  console.log(kyle);
  return false; // prevent reload
};


type Word = {
  word: string;};

type GetWord = {
  data : Word[];};

  let theWord : string = "";
  let theDefinition : string = "";

async function GetWords(text: string){
  try {
    const response = await fetch(defURL + text, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if(!response.ok){
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = (await response.json()) as GetWord;

    theWord = findWord(response, `word`)
    theDefinition = findWord(response, `definition`)

    console.log('result is: ', JSON.stringify(result, null, 4));

    return result;
  } catch (error) {
    if(error instanceof Error){
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

document.write(theWord);
document.write(theDefinition);


function findWord(file: any, key: string): string {
  for (let i = 0; i < file.length; i++) {
      if (file[i].hasOwnProperty(key)) {
          return file[i][key];
      }
  }
}