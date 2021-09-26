import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {

	supplier: Supplier = new Supplier();
	telahDiSubmit = false;
	
  constructor(private supplierService:SupplierService, private router:Router) { }

  ngOnInit() {
  }
	
	save(){
		this.supplierService.createListSupplier(this.supplier).subscribe(
			data=>{
				console.log(data);
				this.backToListSupplier();
			},error=>console.log(error)
		);
	}
	
	onSubmit(){
		this.telahDiSubmit=true;
			this.save();
	}

	backToListSupplier(){
		this.router.navigate(['supplier']);
	}

}
