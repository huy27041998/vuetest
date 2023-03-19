export default class ProductEntity {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  inStock?: number;
  image?: string;

  constructor(
      id?: number,
      name?: string,
      description?: string,
      price?: number,
      inStock?: number,
      image?: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = inStock;
    this.image = image;
  }
}
