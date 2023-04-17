
import express, { Request, Response } from "express";
import cors from "cors";
import { Cavaleiro } from "./types";

// console.log(users);
// console.log(products);
// console.log(purchases);

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

