import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  componentName: string = 'ParentComponent';
  hasClicked: boolean = false;
  hasBeenRead: boolean = false;

  clicked() {
    this.hasClicked = true;
    console.log('PARENT: Clicked');
  }
  onRecive(messageHasBeenRead: boolean) {
    this.hasBeenRead = messageHasBeenRead;
    console.log('PARENT: Message has been read');
  }

  reset() {
    this.hasClicked = false;
    this.hasBeenRead = false
    console.log('PARENT: Reset');
  }
}
