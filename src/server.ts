import express from "express";
import { createConnection } from "./database/data-source";
import { ControleValidade } from "./modules/controle-validade/domain/ControleValidade.domain";

createConnection();

const app = express();

app.get("/", (request, response) => {
  return response
    .status(200)
    .json({ message: "Server is running in http://localhost:3333" });
});

app.get("/teste", (request, response) => {
  const data = ControleValidade.create({
    alertaEmDias: 2,
    dataValidade: new Date("2023-01-21 00:00:00"),
    produtoID: 1
  })
 
 return response
    .status(200)
    .json({ message: "OK" });
});

app.listen(3333, () =>
  console.log("Server is running in http://localhost:3333")
);
