import { Component } from '@angular/core';

@Component({
selector: 'newmessage',
template: `<div class="component">

<h2>Write a new message. TO BE DONE.</h2>

<form class="form-group">
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon">@</span>
        <input type="text" class="form-control" placeholder="type a username" ng-model="user" aria-describedby="basic-addon">
    </div>
    <div class="form-group">
        <br>
        <textarea class="form-control" rows="3">Hi {{user}}, my name is Exemple, do you want to trade with me ?</textarea>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
    <button type="submit" class="btn btn-warning" onclick="window.history.back();">Cancel</button>
</form>
<div>`,

})
export class NewMessageComponent {
	
}
