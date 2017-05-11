'use strict';

// this file will eventually create one master list of the singly linked list class
// and all of it's methods that have been defined in all the separate files
// this will allow you to import this one file and have access to the entire class

// for now it contains the singly linked list class
// plus the sllAdd file which contains a random list method that will be needed in several other files

var SLL = require("./sll.js"); // first require the actual singly linked list class file and set it to a variable to use
SLL.prototype.constructor = SLL; // now create a constructor to allow other needed files to be prototyped to the main class
require("./sllAdd.js")(SLL); // this is adding the methods in the sllAdd.js file so that any other file that requires this one has access to them
module.exports = SLL; // this is what allows us to export the singly linked class with prototyped methods