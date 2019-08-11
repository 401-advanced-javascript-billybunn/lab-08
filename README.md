![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/lab-08/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/lab-08/builds/106111114
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: http://xyz.com
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

## LAB 8: Data Modeling

[![Build Status](https://travis-ci.com/401-advanced-javascript-billybunn/lab-08.svg?branch=working)](https://travis-ci.com/401-advanced-javascript-billybunn/lab-08)

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

#### Documentation
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
<!-- * [jsdoc][6] -->


## `/models`
Contains data models and tests for Categories and Products interfaces
### Modules
#### `/categories.js`
#### `get(_id) -> returns a single category or entire category collection`
Used for GET requests. Searches (memory) database for and category with entered `_id` and returns it. Returns entire category list if called without an `_id`. Returns error message if `_id` is not found.

#### `post(record) -> adds a category to the database`
Used for POST requests. Validates entry with `validate` method, creates and appends UUID to entry, and adds it to the database. If a valid entry, returns the added category. Returns error message if entry does not contain all fields required by the `schema`.

#### `put(_id, entry) -> edits content of a category in the database`
Used for PUT requests. Validates entry with `validate` method, searches for category with `_id` entered, updates that category with entry, and saves it to the database. If a valid entry, returns the updated category.

#### `delete(_id) -> deletes a category in the database`
Used for DELETE requests. Searches database for `_id` entered, removes the category with matching `_id` from the database, and returns an empty object upon success. Returns error message if `_id` is not found.

#### `validate(record) -> compares record entry against required keys in schema, returns true / false `
Used for all POST and PUT requests. Checks if all **required** fields in the schema are present in record entered. Returns `true` or `false`.

<!-- #### `modulename.js` -->
<!-- ##### Exported Values and Methods -->

<!-- ###### `foo(thing) -> string` -->
<!-- If you finished everything, you should be able to copy/paste the lab requirements and put them in present tense. -->
<!-- Usage Notes or examples -->

<!-- ###### `bar(array) -> array`
Usage Notes or examples -->

### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db


#### Running the app
* `npm start`
<!-- * Endpoint: `/`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it. -->
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
<!-- * What assertions were made?
* What assertions need to be / should be made? -->

#### UML
<!-- Link to an image of the UML for your application and response to events -->
