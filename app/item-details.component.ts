import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ItemService } from './_services/index';
import { Item } from './_models/index';
@Component({
  
  selector: 'my-app',
  template: `
	<div class="header">
            <h1 id="mainTitle">Item Details</h1>
            <div><a class="headerButton" [routerLink]="['/items']">\< Back to Items</a></div>
	</div>
	
    <div class="col-md-6 col-md-offset-3">
        <div *ngFor="let item of items">
            <h2 *ngIf="item.id==getItemId()">
                {{item.title}}
            </h2>
            <ul *ngIf="item.id==getItemId()">
                {{item.description}}
                {{item.picture}}
            </ul>
        </div>
    </div>
	`
})

export class ItemDetailsComponent  {
	private items : Item[];
	//private item : Item;
	constructor(private route: ActivatedRoute, private itemService : ItemService){
		itemService.getAll().subscribe(items => { this.items = items; }); //TODO (!) code sale!!recuperer le bon item avec itemservice.getById(id)
	}

	getItemId(){
		return this.route.snapshot.params["itemID"];
	}
}