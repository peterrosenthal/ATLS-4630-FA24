// import { printHelloWorld as hello, PAGE_SIZE } from "./utils.js";
import * as Utils from "./utils.js";
import Counter from "./Counter.js";

Utils.printHelloWorld();

const counter = new Counter();
for (let i = 0; i <= Utils.PAGE_SIZE; i++) {
  counter.countUp();
  console.log(counter.count);
}
