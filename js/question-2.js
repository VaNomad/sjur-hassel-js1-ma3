const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4d4f1371ed24753bc791b5cc4855b48"

const resultBox = document.querySelector(".box");

async function apiCall() {
  try {
    
    const response = await fetch(url);

    const result = await response.json();

    const data = result.results;

    console.log(data);
    
    // setTimeout(() => {
      resultBox.innerHTML = "";
    // }, 2000)

    for (i = 0; i < data.length; i++) { 
      console.log(data[i]);

      if (i === 8) {
        break;
      }
      
      resultBox.innerHTML += `
      <div class="games">
      <h2>Name: ${data[i].name}</h2>
      <p>Rating: ${data[i].rating}</p>
      <p>Tags: ${data[i].tags.length}</p>
      </div>`;      
    }
    
  } catch (error) {
    console.log(error);
    resultBox.innerHTML = error
  }
}

apiCall();