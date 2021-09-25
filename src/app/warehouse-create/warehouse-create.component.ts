import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent implements OnInit {

  warehouse: Warehouse = new Warehouse();
	telahDiSubmit = false;
	
  constructor(private warehouseService:WarehouseService, private router:Router) { }

  ngOnInit() {
  }
	
	save(){
		this.warehouseService.createListWarehouse(this.warehouse).subscribe(
			data=>{
				console.log(data);
				this.backToListWarehouse();
			},error=>console.log(error)
		);
	}
	
	onSubmit(){
		this.telahDiSubmit=true;
			this.save();
	}

	backToListWarehouse(){
		this.router.navigate(['warehouse']);
	}

}