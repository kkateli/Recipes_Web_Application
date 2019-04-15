// Global app controller
//only the name of the file
// import s from "./testing";
// console.log(`I have imported ${s} from the file testing.js`);
import str from './models/Search.js';
console.log(str); 

import {add, multi} from './views/searchView';
console.log(`${add(3,3)} and ${multi(3,3)}`); 
