"use strict"

const ps = require("prompt-sync")
const prompt = ps({sigint:true});

let name = prompt ("Enter your name");
 console.log(`Hello ${name}`)
  