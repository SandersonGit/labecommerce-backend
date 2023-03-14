import { users, products, purchases } from "./database";
import express, { Request, Response } from "express";
import cors from "cors";
import { user, product, purchase  } from "./types";

console.log(users);
console.log(products);
console.log(purchases);

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.get("/products", (req: Request, res: Response) => {
  res.status(200).send(products);
});

app.get("/products/search", (req: Request, res: Response) => {
  const q = req.query.name as string;

  const result = products.filter((product) => {
    return product.name.toLowerCase().includes(q.toLowerCase());
  });
  res.status(200).send(result);
});

app.post("/user", (req: Request, res: Response) => {
  const { id, email, password } = req.body;

  const newUsers: user = {
    id,
    email,
    password
  };
  users.push(newUsers)
  res.status(201).send("Cadastro realizado com sucesso!");
});

app.post('/product', (req: Request, res: Response)=>{
    const { id, name, price, category } = req.body;

    const newProduct: product = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct);
    res.status(201).send("Produto cadastrado com sucesso!");
})

app.post('/purchase', (req: Request, res: Response)=>{
    const { userId, productId, quantity, totalPrice } = req.body

    const newPurchase: purchase = {
        userId,
        productId,
        quantity,
        totalPrice

    }
    purchases.push(newPurchase);
    res.status(201).send("Compra realizada com sucesso!")

})


