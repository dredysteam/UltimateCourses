import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.css'],
})
export class StockBranchComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit(): void {}
  get invalid() {
    return (
      this.parent.get('store.branch').hasError('invalidBranch') &&
      this.parent.get('store.branch').touched &&
      !this.required('branch')
    );
  }
  required(name: string) {
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }
  get unknown() {
    return (
      this.parent.get(`store.branch`).hasError('unknownBranch') &&
      this.parent.get(`store.branch`).dirty
    );
  }
}
