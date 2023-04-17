const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};


module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {  
    // TODO: complete  
    return itemsModel.items.find( i => i.id === itemId);    
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete

    let index = itemsModel.items.findIndex(item => item.id === itemId);
    if (index >= 0) {
      itemsModel.items.splice(index, 1);
      return true;
    }
    return false;
}

module.exports.updateById = async (itemId, newObj) => {
  // TODO: complete
  let itemToUpdate = itemsModel.items.find(i => i.id === itemId);

  if (itemToUpdate) {
    for (let propertyName in newObj) {
      if (propertyName === "id")
        continue;
      itemToUpdate[propertyName] = newObj[propertyName];
    }
    return true
  }
  return false;
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}