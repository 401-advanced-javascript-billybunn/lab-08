'use strict';

const uuid = require('uuid/v4');

// ??? required: false
// ??? type: string, array, object, number
const schema = {
  _id: { required: true },
  name: { required: true },
  display_name: { required: true },
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
    record._id = uuid();
    if (this.validate(record)) {
      this.database.push(record);
      return record;
    } else {
      return {error: 'must contain required fields'};
    }
  }

  put(_id, entry) {
    if (this.validate(entry)) {
      this.database = this.database.map(dbRecord => dbRecord._id === _id
        ? dbRecord = entry
        : dbRecord);
      return entry;
    } else {
      return `No records found with _id: ${_id}`;
    }
  }

  delete(_id) {
    if (Object.values(this.database).includes(_id)) {
      this.database = this.database.filter((record) => record._id !== _id);
      return {};
    } else {
      return `No records found with _id: ${_id}`;
    }

  }

  validate(record) {

    let valid = true;

    let requiredFields = Object.entries(schema).reduce((arr, keyPair) => {
      if (keyPair[1].required) arr.push(keyPair[0]);
      return arr;
    },[]);
    // requiredFields;

    if(re) valid = false;






    // check properties of the schema against the record
    let valid = true;

    // let requiredKeys = Object.entries(schema).map(keyPair => {
    //   console.log(keyPair[0]);
    //   if(keyPair[1].required) return keyPair[0]; 
    // });
    let requiredKeys = Object.entries(schema).reduce((arr, keyPair) => {
      // console.log(keyPair);
      if (keyPair[1].require) return arr.push(keyPair[0]);
      // return arr;
    },[]);

    // ADD LOGIC HERE!!!!!!!!!!!!

    console.log(requiredKeys);
    Object.keys(schema).forEach(field => {
      // if (schema[field].required) {
      // console.log(field);
      if (!record[field]) {
        // console.log('no field');
        valid = false;
      }
      // }
    });
    // console.log(valid);
    return valid;
  }

}

module.exports = Categories;
