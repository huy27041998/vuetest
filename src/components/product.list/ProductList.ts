import ProductEntity from '@/models/ProductEntity';
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
})

export default class ProductList extends Vue {
  products: ProductEntity[] = [
    new ProductEntity(1, "Product 1", "This is product 1", 1, 2),
    new ProductEntity(2, "Product 2", "This is product 2", 2, 1),
    new ProductEntity(3, "Product 3", "This is product 3", 1, 1),
    new ProductEntity(4, "Product 4", "This is product 4", 5, 0),
  ];

}