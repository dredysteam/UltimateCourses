import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { StockValidators } from './stock-inventory.validators';
// interfaces
import { Product } from '../../models/product.interface';
import { Item } from '../../models/item.interface';
// services
import { StockInventoryService } from '../../stock-inventory.service';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css'],
})
export class StockInventoryComponent implements OnInit {
  products: Product[];

  productMap: Map<number, Product>;

  total: number;

  //using FormGroup & FormControl
  // form = new FormGroup({
  //   store: new FormGroup({
  //     branch: new FormControl('B349'),
  //     code: new FormControl('1234'),
  //   }),
  //   selector: this.createStock({}),
  //   stock: new FormArray([
  //     this.createStock({ product_id: 1, quantity: 10 }),
  //     this.createStock({ product_id: 3, quantity: 150 }),
  //   ]),
  // });

  // Using Form Builder dont need to use FormGroup and FormControl

  // REACTIVE FORM !! ///==============================================
  form = this.fb.group(
    {
      store: this.fb.group({
        // Form Control, Group Control && Asyncornous Validations
        branch: [
          '',
          Validators.required,
          StockValidators.checkBranch,
          // [this.validateBranch.bind(this)],
        ],
        code: ['', Validators.required],
      }),
      selector: this.createStock({}),
      stock: this.fb.array([]),
    },
    { validator: StockValidators.checkStockExists }
  );
  ///========================================================

  constructor(
    private fb: FormBuilder,
    private stockInventoryService: StockInventoryService
  ) {}

  ngOnInit(): void {
    const cart = this.stockInventoryService.getCartItems();
    const products = this.stockInventoryService.getProducts();

    forkJoin(cart, products).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ]);
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach((item) => this.addStock(item));
        // console.log(myMap);
      }
    );

    // this.calculateTotal(this.form.get('stock').value);
    this.form.get('stock').valueChanges.subscribe((value: Item[]) => {
      this.calculateTotal(value);
      // console.log(value);
    });
  }
  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => {
      return prev + next.quantity * this.productMap.get(next.product_id).price;
    }, 0);
    this.total = total;
  }

  onSubmit() {
    console.log('Form value changes working...', this.form.value);
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10),
    });
  }
  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }
  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
  // validacion asincrona
  // validateBranch(control: AbstractControl) {
  //   return this.stockInventoryService
  //     .checkBranch(control.value)
  //     .pipe(
  //       map((response: boolean) => (response ? null : { unknownBranch: true }))
  //     );
  // }
}
