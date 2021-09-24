import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods-update/goods-update.component';


const routes: Routes = [
  {path:'', redirectTo:'goods',pathMatch:'full'},
  	{path:'goods', component:GoodsListComponent},
  	{path:'add', component:GoodsCreateComponent},
  	{path:'update/:id', component:GoodsUpdateComponent},
  	{path:'details/:id', component:GoodsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
