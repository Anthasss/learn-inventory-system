import express from "express";

import { dummyProducts } from "./dummy/dummyProducts";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    data: "Ini data",
    message: "Ini message",
  });
});

app.get("/products", (req, res) => {
  res.json(dummyProducts);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
