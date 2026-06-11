import { Product } from "@inventory/shared";
import prisma from "../prisma.client";

const createProduct = async (userdata: Product) => {
  await prisma.product.create({
    data: userdata,
  });
};
