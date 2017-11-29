import { Component } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';

// LM: import Contracts
import { Contract } from './_models/index';
import { ContractService } from './_services/index';
import { Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector:'contracts',
    template: `
    <div class="header">
            <h1 id="mainTitle">Contracts</h1>
            <div><a class="headerButton" [routerLink]="['/new-contract']">+ Add</a></div>
    </div>

    <div *ngFor="let contract of contracts">
        <ul>{{contract.title}}:</ul>
        <li *ngFor="let clause of contract.clauses">
            {{clause.fromUsername}} gives {{clause.itemName}} to {{clause.forUsername}}
        </li>
    </div>

  `
  
})

export class ContractsComponent {
    currentUser: User;
    //users: User[] = [];

    contracts: Contract[] = [];

    constructor(private contractService: ContractService, private router :Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadAllContracts();
        //console.log("clause length"+this.contracts.length);
    }

    ngOnInit() {
        this.loadAllContracts();
    }

    deleteContract(id: number) {
        this.contractService.delete(id).subscribe(() => { this.loadAllContracts() });
    }


    private loadAllContracts() {
        this.contractService.getAll().subscribe(contracts => { this.contracts = contracts; });
    }

    /*private loadUsersContracts() {
      this.contractService.getAll().subscribe(contracts => { this.contracts = contracts; });
      this.contracts=this.contracts.filter(contract=>(isUserContract(contract)))
    }*/


}
