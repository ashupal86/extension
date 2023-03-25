const apiKey = "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";
const query = document.getElementById("query");
const results="";
function btnclick(){
const params = {
  model: "davinci",
  documents: [],
  max_rerank: 10,
  return_metadata: true,
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    query: query,
    ...params
  })
};

fetch('https://api.openai.com/v1/search', requestOptions)
  .then(response => response.json())
  .then(data => {
    results = data.data;
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });
}
document.getElementById("answer").innerHTML=results;