const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат: Заказ № 1456 от 26/01/2026
// 09:07 на сумму 16 рублей

const orderSplit = order.split(";");
const dateTime = orderSplit?.[1]?.split("=")?.[1] ?? "";

const orderNumber = orderSplit?.[0]?.split("#")?.[1];
const formattedDate = new Date(dateTime).toLocaleDateString("en-GB");
const formattedTime = new Date(dateTime).toLocaleTimeString("ru-Ru", { hour: "2-digit", minute: "2-digit" });
const amount = Math.ceil(Number(order.split(";")?.[2]?.split("=")?.[1]));

console.log(`Заказ № ${orderNumber} от ${formattedDate} ${formattedTime} на сумму ${amount} рублей`);
