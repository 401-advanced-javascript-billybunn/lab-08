'use strict';

const uuid = require('uuid/v4');

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
  }
  
  post(record) {
    record.id = uuid();
    this.database.push(record);
    return record;
  }

  put(_id, record) {
  }

  delete(_id) {
  }

}

module.exports = Categories;
