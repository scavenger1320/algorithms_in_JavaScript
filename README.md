This is a collection of algorithms completed in JavaScript.

Most files can be run independently except where noted (also, files requiring others will have a require line near the top).

To run independent files using Node.js via command line
	- Navigate to the directly containing the file
	- Run `node ${filename}`

Independent files can also be run in a browser console by copying and pasting all of the code within the file into the browser console.

For files that require others, the individual file can still be run using node just as above as long as you're working within the entire project structure.

Algorithms are written using plain ES5 JavaScript.  Cases using ES6 will be noted.

==============================================================================
TESTING
	
Testing is slowly being brought in using Mocha with Chai and will be added to all existing algorithms.  This will take some time to catch up so tests won't be available for all algorithms yet.  Once tests are caught up, new algorithms will be completed using TDD.

Tests can be found within the 'test folder' and will follow the same directory structure as the files being tested. i.e. fibonacci.js is found within the arrays folder, so the test file for it can also be found within the arrays folder inside of the 'test' directory.  Test files will also be named the same as the file it is testing, but will also include '.test' (i.e. fibonacci.test.js)

To run individual file tests in node, go to terminal and type:
	`npm test ${filepath}`

For example, to run the fibonacci file test you would type:
	`npm test test/arrays/fibonacci.test.js`