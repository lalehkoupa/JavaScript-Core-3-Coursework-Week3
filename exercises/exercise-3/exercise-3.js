let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
const giveReceipt = (orders) => {
  let tableElement = `QTY    ITEM              TOTAL`;
  let sum = 0;
  console.log(tableElement);
  orders.forEach((order) => {
    const { itemName, quantity, unitPrice } = order;
    total = quantity * unitPrice;
    sum += total;
    tableElement = `${quantity}      ${itemName.padEnd(18, " ")}${total.toFixed(
      2
    )}`;
    console.log(tableElement);
  });
  console.log(`\nTotal : ${sum}\n`);
};
giveReceipt(order);
