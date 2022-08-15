// Import stylesheets
// import './styles.css';
import fetch from 'node-fetch'

const defURL : string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const form: HTMLFormElement = document.querySelector('#defineform');
const defString = document.getElementById('definitions');
const bigHead = document.getElementById('header');



form.onsubmit = () => {
  const formData = new FormData(form);

  const text = formData.get('defineword') as string;
  const kyle = GetWords(text);
  console.log(kyle);

  bigHead!.innerHTML = text;

  let counter = 1;

  defString!.innerHTML = '';
    GetWords(text)
        .then(defintions => {
            defintions.forEach(d => {
              defString!.innerHTML += `<p>${counter}. ${d}</p>`;
              counter++;
            });
        })
        .catch(_ => {
          defString!.innerHTML += `<p class="lead">${text} isn't a word dumdum.</p>`;
        });


  return false; // prevent reload
};


type Word = {
  word: string;};

type GetWord = {
  data : Word[];};

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
    const result = (await response.json());

    console.log('result is: ', JSON.stringify(result, null, 4));

    return result[0].meanings.flatMap(m => m.definitions).flatMap(d => d.definition);

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