try {
  const myHeading = document.getElementById('myheding');
  myHeading.style.backgroundColor = 'red';
} catch (error) {
  console.error(error);
} finally {
  // this is where potential clean-up code goes
}

console.log('after the error!');

setTimeout(() => { console.log('inside setTimeout!') }, 0);

async function sumNumbersAsync(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  return sum;
}

// this logs a promise
console.log(sumNumbersAsync(1000000));

// this logs the result of a promise
sumNumbersAsync(100000)
  .then((result) => {
    console.log(result);
    throw new Error('custom error!');
  })
  .catch((error) => {
    console.error(error);
  });

// await keyword
async function sumMultipleNumbers() {
  const sumThousand = await sumNumbersAsync(1000);
  console.log(sumThousand);

  console.log(await sumNumbersAsync(42));
}

sumMultipleNumbers();

function gameLoop() {
  // do something for the game
  console.log('in game loop!');

  requestAnimationFrame(gameLoop);
}

gameLoop();
