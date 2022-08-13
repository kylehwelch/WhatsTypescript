// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  event.preventDefault();
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  fetchJSON(text);
  console.log(text);
  return false; // prevent reload
};

function fetchJSON(text: string) {
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + text)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      localStorage.setItem('definition', JSON.stringify(data));
  });
}