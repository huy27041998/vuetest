export default class Header {
  private text?: string;
  private value?: string;
  private sortable?: boolean;

  constructor(
    text?: string,
    value?: string,
    sortable?: boolean
  ) {
    this.text = text;
    this.value = value;
    this.sortable = sortable;
  }
}
