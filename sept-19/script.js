fetch('https://meowfacts.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json.data[0]));

const addMeowFactsButton = document.getElementById('add-meow-facts-button');
addMeowFactsButton.addEventListener('click', addMeowFactsToPage);

async function addMeowFactsToPage() {
  const count = 3;
  const url = `https://meowfacts.herokuapp.com/?count=${count}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'text/json',
    }
  });
  const json = await response.json();

  for (const meowfact of json.data) {
    const paragraph = document.createElement('p');
    paragraph.innerText = meowfact;
    document.body.append(paragraph);

    // unsafe:
    // document.body.innerHTML += `<p>${meowfact}</p>`;
  }
}
