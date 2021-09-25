import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { Store } from '../store';
@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent implements OnInit {
 
  store : Store = new Store();
  telahDiSubmit = false;
  

  constructor(private storeService:StoreService, private router:Router) { }

  ngOnInit() {
  }
  save(){
		this.storeService.createListStore(this.store).subscribe(
			data=>{
				console.log(data);
				this.backToListStore();
			},error=>console.log(error)
		);
	}
  
	
	onSubmit(){
		this.telahDiSubmit=true;
			this.save();
	}

	backToListStore(){
		this.router.navigate(['store']);
	}

}

