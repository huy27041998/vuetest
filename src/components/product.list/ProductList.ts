import ProductEntity from '@/models/ProductEntity';
import Vue from 'vue';
import Component from 'vue-class-component';
import Product from "@/components/product/Product.vue";
@Component({
  components: {Product}
})

export default class ProductList extends Vue {
  products: ProductEntity[] = [
    new ProductEntity(1, "Product 1", "This is product 1", 1, 2, "https://picsum.photos/200/300"),
    new ProductEntity(2, "Product 2", "This is product 2", 2, 1, "https://picsum.photos/id/237/200/300"),
    new ProductEntity(3, "Product 3", "This is product 3", 1, 1, "https://picsum.photos/seed/picsum/200/300"),
    new ProductEntity(4, "Product 4", "This is product 4", 5, 0, "https://picsum.photos/200/300/?blur"),
  ];

}