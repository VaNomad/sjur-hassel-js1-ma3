const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4d4f1371ed24753bc791b5cc4855b48"

const resultBox = document.querySelector(".box");

async function apiCall() {
  try {
    
    const response = await fetch(url);

    const result = await response.json();

    console.log(result);
    
    setTimeout(() => {
      resultBox.innerHTML = "";
    }, 2000)

    for (i = 0; i < result.length; i++) { 
      console.log(result[i].object);

      if (i === 8) {
        break;
      }
      
      resultBox.innerHTML += `
      <div class="result">
      <h2>Name: ${result[i].name}</h2>
      <p>Rating: ${result[i].rating}</p>
      <p>Tags: ${result[i].tags.length}</p>
      </div>`;      
    }
    
  } catch (error) {
    console.log(error);
    resultBox.innerHTML = error
  }
}

apiCall();