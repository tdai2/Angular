import { Component, OnInit } from '@angular/core';
import {Hero,SuperPower} from '../domain/entities';
import {FormService} from './form.service';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private formService:FormService
  ) { }
  superPowers  = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer',"Mind control"];
  model = new Hero("1","slash",this.superPowers[0]);
  addHero(){
    this.formService.addHero
  }
  

   get diagnostic() { return JSON.stringify(this.model); }


  ngOnInit() {
  }

}
