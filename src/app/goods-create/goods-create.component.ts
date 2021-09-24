import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoodsService } from '../goods.service';
import { Goods } from '../goods';

@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.css']
})
export class GoodsCreateComponent implements OnInit {

	goods: Goods = new Goods();
	telahDiSubmit = false;
	
  constructor(private goodsService:GoodsService, private router:Router) { }

  ngOnInit() {
  }
	
	save(){
		this.goodsService.createListGoods(this.goods).subscribe(
			data=>{
				console.log(data);
				this.backToListGoods();
			},error=>console.log(error)
		);
	}
	
	onSubmit(){
		this.telahDiSubmit=true;
			this.save();
	}

	backToListGoods(){
		this.router.navigate(['goods']);
	}

}
