import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() array: any[] = [];
  @Input() title: String = '';
  @Output() selectedItem = new EventEmitter();
  changesDetection(event: any) {
    this.selectedItem.emit(event);
  }
}
