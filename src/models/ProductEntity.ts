export default class ProductEntity {
  private id?: number;
  private name?: string;
  private description?: string;
  private price?: number;
  private inStock?: number;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    price?: number,
    inStock?: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = inStock;
  }
}
