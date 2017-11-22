import { Component } from '@angular/core';

@Component({
selector: 'messages',
template: `
	<div class="component">
	<h2>Inbox. TO BE DONE.</h2>

		<div class="row">
			<div class="col-sm-12">
				<ul class="nav nav-pills">
				<li  class="active"><a href>user1</a></li>
				<li ><a href>user2</a></li>
				<li ><a href>user3</a></li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="well">
				<p><b>User1:</b> Hey, u have no more carrots ? <span class="pull-right"><em><small>2 hours ago.</small></em></span></p>
				<!--<p ng-show="message.length > 1"><b>Me:</b> {{message}}<span class="pull-right"><em><small>now.</small></em></span></p>-->
				<div class="input-group input-group-lg">
				<input type="text" class="form-control" ng-model="message" placeholder="type your message here">
				<span class="input-group-btn">
				<button class="btn btn-default" type="button">Send</button>
				</span>
				</div>
			</div>
		</div>
		</div>
`

})

export class MessagesComponent {
	
}
