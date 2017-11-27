import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ContractService, AlertService, UserService, ItemService } from './_services/index';
import { Item,User, Clause } from './_models/index';
@Component({
  
  selector: 'new-contract',
  template: `
	<div class="header">
            <h1 id="mainTitle">New contract</h1>
            <div><a class="headerButton" [routerLink]="['/contracts']">\< Back to Contracts</a></div>
	</div>

    <div class="col-md-6 col-md-offset-3">
        <h1>Add a new contract</h1>
        <form name="form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>
	        <div class="form-group" [ngClass]="{ 'has-error': f.submitted}">
                <label for="title">Title</label>
                <input type="text" class="form-control" name="title" [(ngModel)]="model.title" #firstName="ngModel" required />
                <div *ngIf="f.submitted && !firstName.valid" class="help-block">Title is required</div>
            </div>
        </form>
        <div>
        <label >Parties</label>
        <div *ngFor="let partie of parties" >
            <ul style="float: left; margin-right:20px; margin-top:10px">
                id:{{partie.username}}-{{partie.id}}
            </ul>
            <button class="btn btn-contract" style="margin-top:10px" (click)="delete(partie)">Delete</button> 
        </div>
        <select [(ngModel)]="chosenParty" style="margin-top:10px; margin-right:20px">
             <option *ngFor="let user of allUsers" value={{user.id}}>{{user.username}}</option>
        </select>
        <button class="btn btn-contract" style="margin-top:10px" (click)="addParty()">Add party</button>
        </div>

        <div>
        <label style="margin-top:30px">Clauses</label>
        </div>
        <div *ngFor="let clause of clauses">
            <ul>{{clause.fromUsername}}: {{clause.fromId}} gives {{clause.itemName}} to {{clause.forUsername}}: {{clause.forId}}</ul>
        </div>
        <div>
            <label style="margin-top:30px;">From</label>
            <select [(ngModel)]="fromUser" style="margin-top:10px; margin-left:20px">
                 <option *ngFor="let user of parties" value={{user.id}}>{{user.username}}</option>
            </select>
        </div>
        <div>
            <label style="margin-top:30px;">Gives</label>
            <select [(ngModel)]="itemGived" style="margin-top:10px; margin-left:20px">
                 <option *ngFor="let item of items" value={{item.id}}>{{item.title}}</option>
            </select>
        </div>
        <div>
            <label style="margin-top:30px;">For</label>
            <select [(ngModel)]="forUser" style="margin-top:10px; margin-left:20px">
                 <option *ngFor="let user of parties" value={{user.id}}>{{user.username}}</option>
            </select>
        </div>
        <button class="btn btn-contract" style="margin-top:10px" (click)="addClause()">Add Clause</button>
    </div>
	`
})

export class NewContractComponent  {
    currentUser: User;

    model: any = {};

    loading = false;
	
    parties: User[];
    allUsers: User[];
    chosenParty:string;
    itemGived:string;

    clauses: Clause[];
    fromUser:string;
    forUser:string;

    items: Item[];
	constructor(
        private router: Router,
        private contractService: ContractService,
        private alertService: AlertService,
        private userService: UserService,
        private itemService: ItemService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.parties=[];
        this.loadAllUsers();
        this.initClauses();
        this.loadAllItems();
    }

    addContract() {
        this.loading = true;
        this.contractService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Adding successful', true);
                    this.router.navigate(['/contracts']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    register(){}

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { 
            this.allUsers=users;
            //this.parties=parties;
        });
    }

    delete(user: User){
        this.parties = this.parties.filter(partie => partie.id != user.id);
        console.log(user.id);
    }
    addParty(){
        var user=this.allUsers.filter(user => ""+user.id==this.chosenParty);
        this.parties=this.parties.concat(user);
        //this.parties.push();
    }

    initClauses(){
        let clause1=new Clause();
        clause1.fromId=1;
        clause1.forId=2;
        clause1.itemId=3;
        clause1.fromUsername="aaaaa";
        clause1.forUsername="bbbbb";
        clause1.itemName="item1"
        let clause2=new Clause();
        clause2.fromId=3;
        clause2.forId=2;
        clause2.itemId=1;
        clause2.fromUsername="aaaaazzz";
        clause2.forUsername="bbbbbzzzzz";
        clause2.itemName="item2"
        let clause3=new Clause();
        clause3.fromId=1;
        clause3.forId=1;
        clause3.itemId=3;
        clause3.fromUsername="aaaazzzzza";
        clause3.forUsername="bbbzzzzzbb";
        clause3.itemName="item3"
        this.clauses=[clause1,clause2,clause3];
    }

    private loadAllItems() {
        this.itemService.getAll().subscribe(items => { this.items = items; });
    }

    private addClause(){}
}

// <form name="form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>
  //          <div class="form-group" [ngClass]="{ 'has-error': f.submitted}">
    //            <label for="title">Title</label>
      //          <input type="text" class="form-control" name="title" [(ngModel)]="model.title" #firstName="ngModel" required />
        //        <div *ngIf="f.submitted && !firstName.valid" class="help-block">Title is required</div>
          //  </div>
        //</form>    