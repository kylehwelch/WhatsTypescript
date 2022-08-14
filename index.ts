// Import stylesheets
import './style.css';
import fetch from 'node-fetch'

const form: HTMLFormElement = document.querySelector('defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};


type Word = {
  word: string;};

type GetWord = {
  data : Word[];};

async function GetWords(){
  try {
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if(!response.ok){
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = (await response.json()) as GetWord;

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

GetWords();