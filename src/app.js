/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoRondon = who[Math.floor(Math.random() * who.length)];
  let actionRandon = action[Math.floor(Math.random() * action.length)];
  let whatRandon = what[Math.floor(Math.random() * what.length)];
  let whenRandon = when[Math.floor(Math.random() * when.length)];

  //write your code here
  let esxcusa =
    whoRondon + " " + actionRandon + " " + whatRandon + " " + whenRandon;
  console.log(esxcusa);
  // function esxcusas() {
  document.getElementById("excuse").innerHTML = esxcusa;
  // }
};
