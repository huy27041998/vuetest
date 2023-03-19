import {Vue, Component, Prop} from 'vue-property-decorator';
import ProductEntity from "@/models/ProductEntity";

@Component({})

export default class Product extends Vue {
  @Prop() product: ProductEntity

  addToCart(): void {
    console.log(this.product.name, this.product.description);
  }

  viewDetails() {
    console.log(this.product.name, this.product.price, this.product.description);
  }
}