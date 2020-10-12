import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';

//containers
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
// components
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';
// services
import { StockInventoryService } from '../stock-inventory/stock-inventory.service';

// Topic: Reactive Forms
// Control Value Accesor  StockCounter Component
// Validators StockInventory,StockBranch Container

const routes: Routes = [
  {
    path: 'inventory',
    children: [
      {
        path: '',
        component: StockInventoryComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    StockInventoryComponent,
    StockSelectorComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockCounterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [StockInventoryService],
})
export class StockInventoryModule {}
