import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '@/models/Header';

@Component({
})

export default class Product extends Vue {
  props: {
    product: {
      require: true,
      type: Product
    }
  }

  headers: Header[] = [
    new Header("ID", "id"),
    new Header("Name", "name"),
    new Header("Description", "description"),
    new Header("Price", "price"),
    new Header("InStock", "inStock"),
    new Header("Action", "action", false),
  ]; 

  product: Product

  search: string = "";

  editProduct(id: number) {
    // Implement your edit product logic here
  }

  deleteProduct(id: number) {
    // Implement your delete product logic here
  }

  addToCart() {

  }

  viewDetails() {

  }
}
