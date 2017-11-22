import { Component } from '@angular/core';

@Component({
selector: 'search',
template: `
	<div class="component">
		<div class="search-input-group">
			<span>
				<button class="btn btn-default" type="button">Go!</button>
				<input  class="search-input" type="text">
			</span>
		</div>
	</div>
`

})

export class SearchComponent {
	
}
