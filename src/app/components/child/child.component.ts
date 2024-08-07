import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  componentName: string = 'ChildComponent';
  @Input() showMessage: boolean = false;
  @Output() messageHasBeenRead = new EventEmitter<boolean>();

  hasBeenRead() {
    this.messageHasBeenRead.emit(true);
    console.log('CHILD: Message has been read');
  }
}
