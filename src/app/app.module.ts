import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { HttpClientModule } from '@angular/common/http';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsUpdateComponent } from './goods-update/goods-update.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    GoodsCreateComponent,
    GoodsListComponent,
    GoodsUpdateComponent,
    GoodsDetailsComponent
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
