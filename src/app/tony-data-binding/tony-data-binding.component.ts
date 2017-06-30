import { Component, OnInit } from '@angular/core';
import {Todo} from '../domain/entities';

@Component({
  selector: 'app-tony-data-binding',
  templateUrl: './tony-data-binding.component.html',
  styleUrls: ['./tony-data-binding.component.css']
})
export class TonyDataBindingComponent implements OnInit {
  todo:Todo = {
      "id": "3",
      "desc": "hello",
      "completed": true,
      "userId": 1
    };
  constructor() {}
  ngOnInit() {
  }

  title="data binding test" ;

}
