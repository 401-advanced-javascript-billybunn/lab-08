'use strict';

const CategoriesDatabase = require('../categories');

const categories = new CategoriesDatabase();

describe('Categories', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });

  it('post() -- can create a category', () => {
    let category = {name: 'Electronics'};
    let createdCategory = categories.post(category);
    expect(createdCategory.name).toEqual(category.name);
  });
});