import {Vue, Component, Prop} from 'vue-property-decorator';
import ProductEntity from "@/models/ProductEntity";

@Component({})

export default class Product extends Vue {
  private dialog = false;
  @Prop() private product: ProductEntity
}