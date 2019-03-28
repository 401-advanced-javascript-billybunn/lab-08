'use strict';

const CategoriesDatabase = require('../categories');

const categories = new CategoriesDatabase();

describe('Categories', () => {

  it('get(_id) -- can get a list of categories', () => {
    let categoriesList = categories.get();
    expect(Array.isArray(categoriesList)).toBeTruthy();
  });

  it('get() -- can get a single category', () => {
    let category = {name: 'Home Goods'};
    let createdCategory = categories.post(category);
    let foundCategory = categories.get(createdCategory._id);
    expect(foundCategory._id).toEqual(createdCategory._id);
  });

  it('post() -- can create a category', () => {
    let category = {name: 'Electronics'};
    let createdCategory = categories.post(category);
    expect(createdCategory.name).toEqual(category.name);
  });

  it('put() -- can edit a single category', () => {
    // let category = {_id: 1}
    let category = {name: 'Office Supplies'};
    let createdCategory = categories.post(category);

    let putCategory = {...createdCategory, name: 'Cosmetics'};
    console.log(putCategory._id, createdCategory._id);
    expect(putCategory._id).toEqual(createdCategory._id);
    expect(putCategory.name).not.toEqual(createdCategory.name);
  });

  xit('delete() -- can delete a single category', () => {

  });

  

  
});