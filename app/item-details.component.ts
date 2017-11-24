import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ItemService } from './_services/index';
import { Item } from './_models/index';
@Component({
  
  selector: 'my-app',
  template: `
	<div class="header">
            <h1 id="mainTitle">Item Details</h1>
	</div>
	
	<ul>
            <!-- better to show items without the userId, but for the moment its still like that -->
            <table id="tableCustomers">
                <th>  Item</th>
                <th>ID</th>
                <tr *ngFor="let item of items" [routerLink]="['/item-details',item.id]">
                    <td>{{item.title}}</td>
                    <td>{{item.id}}</td>
                </tr>
            </table>

    </ul>

	`
})

export class ItemDetailsComponent  {
	private items : Item[];
	//private item : Item;
	constructor(private route: ActivatedRoute, private itemService : ItemService){

		itemService.getAll().subscribe(items => { this.items = items; });//TODO (!) code sale!!recuperer le bon item avec itemservice.getById(id)
		/*for(var i=0; i<this.items.length; i++){
			if(this.items[i].id==route.snapshot.params["itemID"]) this.item=this.items[i];
		}*/
		//console.log(this.items[0].id);
	}
}


