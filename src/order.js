function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(number, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === number) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var itemName = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
   itemName.push(deliveryOrders[i].item);
  }
  return itemName.join(', ');
}

function searchOrder(deliveryOrders, item) {
  var inList = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(item)) {
      inList = true
    }
  }
  return inList;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
