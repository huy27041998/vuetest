export default class ProductEntity {
  id?: number;
  name?: string;
  price?: number;
  priceString?: string;
  inStock?: number;
  image?: string;
  description?: string;
  longDescription?: string;
  category?: string;

  constructor(
      id?: number,
      name?: string,
      price?: number,
      priceString?: string,
      inStock?: number,
      image?: string,
      description?: string,
      longDescription?: string,
      category?: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.priceString = priceString;
    this.inStock = inStock;
    this.image = image;
    this.description = description;
    this.longDescription = longDescription;
    this.category = category;
  }
}
