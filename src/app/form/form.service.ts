import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';

import {UUID} from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';

import {Hero,SuperPower} from '../domain/entities';


@Injectable()
export class FormService {

//  private api_url= 'api/todos';
  private api_hero_url= 'http://localhost:3000/heros';
  private api_superpower_url= 'http://localhost:3000/superpowers';
  private headers = new Headers({'Content-Type': 'application/json'});
  //private userId = 2;

  constructor(private http: Http) { }

  addHero (hero:Hero) : Promise<Hero>{
    hero.id = UUID.UUID();
    console.log("In form Service ts. addHero()");
    console.log("hero is:");
    console.log(hero)
    return this.http
    .post(this.api_hero_url,JSON.stringify(hero),{headers: this.headers})
    .toPromise()
    .then(res => res.json() as Hero)
    .catch(this.handleError);
  }

  getSuperPowers(): Promise<SuperPower[]>{
    const powerId:number = +localStorage.getItem('id');
    return this.http.get(`${this.api_superpower_url}?userId=${powerId}`)
      .toPromise()
      .then(res => res.json() as SuperPower[])
      .catch(this.handleError);
  }
  // PUT /todos/:id
  /*
  toggleTodo(todo:Todo) : Promise<Todo>{
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({},todo, {completed: !todo.completed});
    return this.http
      .put(url, JSON.stringify(updatedTodo),{headers:this.headers})
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }

  //DELETE /todos/:id
  deleteTodoById(id:string) : Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
      .delete(url,{headers:this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  // GET /todos?completed=true/false
  filterTodos(filter:string): Promise<Todo[]>{
    const userId:number = +localStorage.getItem('userId');
    switch(filter){
      case 'ACTIVE': return this.http
            .get(`${this.api_url}?completed=false&userId=${userId}`)
            .toPromise()
            .then(res => res.json() as Todo[])
            .catch(this.handleError);
      case 'COMPLETED': return this.http
            .get(`${this.api_url}?completed=true&userId=${userId}`)
            .toPromise()
            .then(res => res.json() as Todo[])
            .catch(this.handleError);
      default:
            return this.getTodos();
    }
  }


  //Get /todos
  getTodos(): Promise<Todo[]>{
    const userId:number = +localStorage.getItem('userId');
    return this.http.get(`${this.api_url}?userId=${userId}`)
      .toPromise()
      .then(res => res.json() as Todo[])
      .catch(this.handleError);
  }

 getTodo(id:string): Promise<Todo>{
   //console.log(`${this.api_url}?id=${id}`)
    return this.http.get(`${this.api_url}?id=${id}`)
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError);
  }

  
*/
private handleError(error:any) : Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}



