"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "1",
        email: "abc@gmail.com",
        password: "123456",
    },
    {
        id: "2",
        email: "abcd@gmail.com",
        password: "123456",
    },
];
exports.products = [
    {
        id: "1",
        name: "aston",
        price: 5,
        category: "roupas",
    },
    {
        id: "2",
        name: "vila",
        price: 2,
        category: "roupas",
    },
];
exports.purchases = [
    {
        userId: "1",
        productId: "1",
        quantity: 5,
        totalPrice: 5,
    },
    {
        userId: "2",
        productId: "2",
        quantity: 8,
        totalPrice: 35,
    },
];
const resultado = exports.purchases.reduce((acc, current) => acc + (current.quantity * current.totalPrice), 0);
console.log(resultado);
//# sourceMappingURL=database.js.map