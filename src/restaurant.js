function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant;
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item);
  }
  return restaurant;
}

function removeMenuItem(restaurant, item, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name.includes(item)) {
      restaurant.menus[type].splice(i, 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`; 
    }
  }  
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
}

function checkForFood(restaurant, item) {
  for (var i = 0; i < restaurant.menus[item.type].length; i++) {
    if (restaurant.menus[item.type][i].name === item.name) {
      return `Yes, we're serving ${item.name} today!`
    }
  }
  return `Sorry, we aren't serving ${item.name} today.`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood
};
