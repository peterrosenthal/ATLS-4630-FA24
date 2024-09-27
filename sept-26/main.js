import _ from 'lodash';
import data from './data.json';
import cities from './cities.csv';

console.log(data);
console.log(cities);

const myArray = ['first', 'second', 'third', 'fourth'];

console.log(_.chunk(myArray, 2));

function scrollListener() {
  console.log(window.scrollY);
}

const debouncedScrollListener = _.debounce(scrollListener, 250);
const throttledScrollListener = _.throttle(scrollListener, 250);

window.addEventListener('scroll', scrollListener);

const populations = cities.map(city => city.Population);
console.log(populations);

const biggestPopulation = _.max(populations);
console.log(biggestPopulation);
