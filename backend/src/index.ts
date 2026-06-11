import express from "express";
import type { Product } from "@inventory/shared";

const app = express();
const PORT = 3000;

app.use(express.json());

const hehe: Product = {
  id: 1,
  name: "Hihi",
  quantity: 33,
  price: 2000,
};

app.get("/", (req, res) => {
  res.json({
    data: "Ini data",
    message: "Ini message",
  });
});

app.get("/haha", (req, res) => {
  res.json(hehe);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
