'use strict';

const CategoriesDatabase = require('../categories');

const categories = new CategoriesDatabase();

describe('Categories', () => {

  it('get(_id) -- can get a list of categories', () => {
    let categoriesList = categories.get();
    expect(Array.isArray(categoriesList)).toBeTruthy();
  });

  it('get() -- can get a single category', () => {
    let category = {name: 'home', display_name: 'Home Goods'};
    let createdCategory = categories.post(category);
    let foundCategory = categories.get(createdCategory._id);
    expect(foundCategory._id).toEqual(createdCategory._id);
  });

  it('post() -- can create a category', () => {
    let category = {name: 'electronics', display_name: 'Gizmos and Gadgets'};
    let createdCategory = categories.post(category);
    expect(createdCategory.name).toEqual(category.name);
  });

  it('validate() -- rejects entries without all required schema fields', () => {
    let category = {name:'hardware'};
    let postAttempt = categories.post(category);
    expect(postAttempt.name).toBe(undefined);
  });

  it('put() -- can edit a single category', () => {
    // add a category to the db (need to do this here to grab '_id')
    let category = {name: 'office', display_name:'Office Supplies'};
    let createdCategory = categories.post(category);

    // entry to update the category we created with a new name
    let updatedCategory = {...createdCategory, name: 'cosmetics', display_name:'Makeup and Cosmetics'};
    categories.put(updatedCategory._id, updatedCategory);

    // test to see that a category with _id above was changed
    expect(updatedCategory._id).toEqual(categories.get(createdCategory._id)._id);
    expect(createdCategory.name).not.toEqual(categories.get(createdCategory._id).name);
  });

  xit('delete() -- can delete a single category', () => {

    let category = {name: 'Clothing'};
    let createdCategory = categories.post(category);

    let categoryToDeleteId = createdCategory._id;

    expect(true).toBeTruthy();

  });
  
});