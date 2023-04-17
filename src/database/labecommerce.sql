-- Active: 1681682916308@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO users (id, name, password)
VALUES
("1", "Sanderson", "123456789"),
("2", "Melanie", "987654321"),
("3", "Maria", "147852369");

INSERT INTO products (id, name, price, category)
VALUES
("1", "Blusa", 50.00, "roupas"),
("2", "Calça", 100.00, "roupas"),
("3", "Carrinho", 35.00, "Brinquedo"),
("4", "Boneca", 80.00, "Brinquedo"),
("5", "Vestido", 150.00, "roupas");