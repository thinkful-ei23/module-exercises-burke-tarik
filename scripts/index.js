/* global shoppingList, cuid, $ */
'use strict';
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.bindEventListeners();
  shoppingList.render();

});
