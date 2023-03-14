import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
})

export default class ShopList extends Vue {
  productList: [] = [];

  mounted(): void {
    this.productList = []
  }

}