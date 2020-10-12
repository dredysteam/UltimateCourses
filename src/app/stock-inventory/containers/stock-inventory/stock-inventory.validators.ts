import { AbstractControl } from '@angular/forms';
export class StockValidators {
  // Form Control Validator
  // Stock Branch && Stock Inventory
  static checkBranch(control: AbstractControl) {
    // A123
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    // console.log(valid);
    return valid ? null : { invalidBranch: true };

    // si es valido devulve null. si es invalido agrega una propiedad booleana
  }
  // Form Group Validator
  // Stock Selector && Stock Inventory
  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItem && selector)) return null;
    const exists = stockItem.value.some((stock) => {
      return stock.product_id === parseInt(selector.value.product_id, 10);
    });
    // console.log(exists);
    return exists ? { stockExists: true } : null;
  }
}
