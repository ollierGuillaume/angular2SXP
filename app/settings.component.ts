import { Component } from '@angular/core';

@Component({
selector: 'settings',
template: `
	<div class="component">

	<h1>Settings of {{variable}}</h1>
	<input type="text" ng-model="variable" />
	  <p>ici il y aura les paramètres</p>
	</div>
`,

})

export class SettingsComponent {
	
}
