import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../../dto/IEmployee';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() employee: IEmployee = {
    id: 0,
    name: '',
    age: 0,
    position: '',
  };

  @Output() sendData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleDeleteEmployee(id: number) {
    this.sendData.emit(id);
  }
}
