import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods-update/goods-update.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseDetailsComponent } from './warehouse-details/warehouse-details.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { WarehouseUpdateComponent } from './warehouse-update/warehouse-update.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreCreateComponent } from './store-create/store-create.component';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreDetailsComponent } from './store-details/store-details.component';

const routes: Routes = [
  	{path:'', redirectTo:'goods',pathMatch:'full'},
  	{path:'goods', component:GoodsListComponent},
  	{path:'add', component:GoodsCreateComponent},
  	{path:'update/:id', component:GoodsUpdateComponent},
  	{path:'detail/:id', component:GoodsDetailsComponent},
  	{path:'warehouse', component:WarehouseListComponent},
  	{path:'addWarehouse', component:WarehouseCreateComponent},
  	{path: 'updateWarehouse/:id', component: WarehouseUpdateComponent},
  	{path: 'detailWarehouse/:id', component: WarehouseDetailsComponent},
  	{path:'store', component:StoreListComponent},
  	{path:'addStore', component:StoreCreateComponent},
  	{path: 'updateStore/:id', component: StoreUpdateComponent},
  	{path: 'detailStore/:id', component: StoreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
