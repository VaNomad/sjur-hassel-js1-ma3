const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4d4f1371ed24753bc791b5cc4855b48"

const resultBox = document.querySelector(".box");

async function apiCall() {
  try {
    for (i = 0; i < result.length; i++) {
      const response = await fetch(url);

      const result = await response.json();

      console.log(result);
    }
    
    
  } catch (error) {
    console.log(error);
    resultBox.innerHTML = error
  }
}

apiCall();