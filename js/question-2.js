const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4d4f1371ed24753bc791b5cc4855b48"

const resultBox = document.querySelector(".listBox");

async function apiCall() {
  try {
    
    const response = await fetch(url);

    const results = await response.json();

    const object = results;

    console.log(results.results);
    
    resultBox.innerHTML = "";

    for (i = 0; i < object.length; i++) { 
      console.log(object[i]);

      if (i === 8) {
        break;
      }
      
      resultBox.innerHTML += `<div class="result">${object[i].name} + ${object[i].rating} + ${object[i].tag.length}</div>`;
    }
    
  } catch (error) {
    console.log(error);
    resultBox.innerHTML = error
  }
}

apiCall();