'use strict';

const uuid = require('uuid/v4');

// ??? required: false
// ??? type: string, array, object, number
const schema = {
  id: { required: true },
  name: { required: true },
  display_name: { require: true },
};

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let response = _id
      ? this.database.filter(record => record._id === _id)[0]
      : this.database;
    return response;

  }

  post(record) {
    record.id = uuid();
    if (this.validate(record)) {
      this.database.push(record);
      return record;
    } else {
      return null;
    }
  }

  put(_id, record) {
    if(record._id) {this.database = this.database.map(dbRecord => dbRecord._id === _id 
      ? record
      : dbRecord);}
  }

  delete(_id) {
  }

  validate(record) {
    // check properties of the schema against the record
    let valid = true;

    Object.keys(schema).forEach(field => {
      if (schema[field].required) {
        if (!record[field]) { valid = false; }
      }
    });

    return valid;
  }

}

module.exports = Categories;
