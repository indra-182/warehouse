import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsUpdateComponent } from './goods-update/goods-update.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { WarehouseDetailsComponent } from './warehouse-details/warehouse-details.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseUpdateComponent } from './warehouse-update/warehouse-update.component';
import { StoreCreateComponent } from './store-create/store-create.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreUpdateComponent } from './store-update/store-update.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsCreateComponent,
    GoodsListComponent,
    GoodsUpdateComponent,
    GoodsDetailsComponent,
    WarehouseCreateComponent,
    WarehouseDetailsComponent,
    WarehouseListComponent,
    WarehouseUpdateComponent,
    StoreCreateComponent,
    StoreDetailsComponent,
    StoreListComponent,
    StoreUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
