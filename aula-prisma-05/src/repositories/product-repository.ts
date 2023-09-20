import prisma from "../database/database";
import { Product } from "@prisma/client"


type CreateProduct = Omit<Product, "id">;

async function getProducts() {
  const products = await prisma.product.findMany()

  return products
}

async function getProduct(id: number) {
  const product = await prisma.product.find({
    where: {
      id
    }
  })

  return product
}

async function createProduct(product: CreateProduct) {
  const createProduct = await prisma.product.create({
    data: product
  })

  return createProduct;
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;