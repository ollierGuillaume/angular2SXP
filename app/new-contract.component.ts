import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ContractService, AlertService } from './_services/index';
import { Item,User } from './_models/index';
@Component({
  
  selector: 'new-contract',
  template: `
	<div class="header">
            <h1 id="mainTitle">New contract</h1>
            <div><a class="headerButton" [routerLink]="['/contracts']">\< Back to Contracts</a></div>
	</div>
	
	`
})

export class NewContractComponent  {
    currentUser: User;

    model: any = {};

    loading = false;
	//private item : Item;
	constructor(
        private router: Router,
        private contractService: ContractService,
        private alertService: AlertService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
}