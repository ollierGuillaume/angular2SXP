import { Component } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';

// LM: import items
import { Item } from './_models/index';
import { ItemService } from './_services/index';

@Component({
    moduleId: module.id,
    selector:'items',
    template: `
    <div class="col-md-6 col-md-offset-3">
        <h1>Items of {{currentUser.firstName}}!</h1>
        <!-- <h2>Items of !</h2>
        <h3>All registered items:</h3> -->
        <ul>
            <!-- better to show items without the userId, but for the moment its still like that -->
            <li *ngFor="let item of items">
                {{item.title}} - {{item.description}} - {{item.userId}} - {{item.id}}
                - <a (click)="deleteItem(item.id)">Delete</a>
            </li>
        </ul>
        <p><a [routerLink]="['/login']">Logout</a></p>
    </div>
  `
})

export class ItemsComponent {
    currentUser: User;
    //users: User[] = [];

    items: Item[] = [];

    constructor(private itemService: ItemService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllItems();
    }

    deleteItem(id: number) {
        this.itemService.delete(id).subscribe(() => { this.loadAllItems() });
    }

    private loadAllItems() {
        this.itemService.getAll().subscribe(items => { this.items = items; });
    }

    private loadUsersItems() {
      this.itemService.getItemsByUserId().subscribe(items => { this.items = items; });
    }

}
