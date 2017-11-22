import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';

// LM: import items
import { Item } from './_models/index';
import { ItemService } from './_services/index';



@Component({
selector: 'settings',
template: `
	<div class="component">

	<h1>Settings  {{variable}}</h1>
 <div> <p>Account name : {{currentUser.firstName}}</p> </div>
      
 

  <li ><a href>Change password</a></li>
	</div>

`,

})

export class SettingsComponent {
  currentUser: User;
    //users: User[] = [];

    items: Item[] = [];

    constructor(private itemService: ItemService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  
	
}
